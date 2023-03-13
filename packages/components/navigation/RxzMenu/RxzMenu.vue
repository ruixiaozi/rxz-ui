<template>
  <div class="rxz-menu" :class="[direction, `level-${level}`]">
    <div
      class="rxz-menu-item"
      v-for="(item, index) in menuItems"
      v-show="!isFold || item.icon"
      :class="[`level-${level}`]"
      :key="index"
      :ref=" (el) => refs[`item-${index}`] = el"
    >
      <a
        :href="item.path"
        @click="handleClick($event, item)"
        @mouseover="openPopover(item, index)"
        @mouseleave="closePopover(item)"
        :target="item.target"
        :class="[
          `level-${level}`,
          currentStyle,
          {
            active: item.active,
          },
        ]"
      >
        <RxzIcon
          class="rxz-menu-item-icon"
          v-show="item.icon"
          :name="item.icon"
          :size="16"
        ></RxzIcon>
        <span v-show="!isFold" v-rxz-overflow class="rxz-menu-item-text">{{ item.name }}</span>
        <RxzIcon
          v-show="!isFold && item.children"
          class="rxz-menu-item-arrow"
          :name="getArrow(item)"
          :size="16"
        ></RxzIcon>
      </a>
      <rxz-menu
        class="rxz-menu-item-sub"
        v-if="item.children && childrenStyleCPT === 'inner' && !item.isFold"
        :items="item.children"
        :active="active"
        :direction="direction"
        :currentStyle="childrenStyleCPT"
        :childrenStyle="nextChildrenStyle"
        :isFold="false"
        :level="nextLevel"
        :canFold="false"
      ></rxz-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RxzIcon } from '@/components/base';
import { RXZ_POPOVER_POS_E } from '@/components/template';
import { vRxzOverflow } from '@/directives';
import { useRxzPopover } from '@/use';
import { debounceByKey } from '@/utils';
import { isNil, uniqueId } from 'lodash';
import { defineProps, defineEmits, computed, ref, ComponentPublicInstance } from 'vue';
import { RxzMenu } from '.';
import define, { RxzMenuItemOption, RXZ_MENU_DIRECTION_E, RXZ_MENU_STYLE_E } from './RxzMenu.define';
const props = defineProps(define.rxzMenuProps);
defineEmits(define.rxzMenuEmits);

const { showPopover, hiddenPopover, createPopover } = useRxzPopover();

const handleMouseMove = debounceByKey((key: string, pos: 'enter' | 'leave', notifyParent = true) => {
  if (props.popoverKey && notifyParent) {
    props.parentMouseMove?.(props.popoverKey)?.(pos);
  }
  if (pos === 'enter') {
    showPopover(key);
  } else {
    hiddenPopover(key);
  }
}, 10);

const setActive = (items: RxzMenuItemOption[]) => {
  // 全都不是Nil，返回items
  if (!items.some((item) => isNil(item.active) || isNil(item.isFold))) {
    return items;
  }
  return items.map((item) => {
    let children: RxzMenuItemOption[] = [];
    if (item.children) {
      children = setActive(item.children);
    }
    return {
      ...item,
      isFold: false,
      active: props.active === item.key || children.some((child) => child.active),
      children: children.length ? children : undefined,
    };
  });
};

const menuItems = computed(() => setActive(props.items));

const childrenStyleCPT = computed(() => {
  if (props.childrenStyle) {
    return props.childrenStyle;
  }
  return props.direction === RXZ_MENU_DIRECTION_E.vertical && !props.isFold ? RXZ_MENU_STYLE_E.inner : RXZ_MENU_STYLE_E.popover;
});

const nextLevel = computed(() => props.level + 1);

const nextChildrenStyle = computed(() => {
  if (nextLevel.value >= 1) {
    return RXZ_MENU_STYLE_E.popover;
  }
  if (props.direction === RXZ_MENU_DIRECTION_E.vertical && props.isFold !== true) {
    return RXZ_MENU_STYLE_E.inner;
  }
  return RXZ_MENU_STYLE_E.popover;
});

const onClickSuccess = (event: Event) => {
  event.preventDefault();
  if (props.popoverKey) {
    handleMouseMove(props.popoverKey)('leave');
  }
  return false;
};

const handleClick = (event: Event, item: RxzMenuItemOption) => {
  if (childrenStyleCPT.value === RXZ_MENU_STYLE_E.inner && item.children) {
    item.isFold = !item.isFold;
    event.preventDefault();
    return false;
  }

  if (item.onClick) {
    item.onClick();
    return onClickSuccess(event);
  }
  if (!props.router || !item.path || item.path.startsWith('http')) {
    return true;
  }
  // 路由方法，并没有修改prop值
  // eslint-disable-next-line vue/no-mutating-props
  props.router.push(item.path);
  return onClickSuccess(event);
};

const createSubMenu = (key: string, el: HTMLElement, item: RxzMenuItemOption) => {
  const resKey = createPopover(
    el,
    props.direction === RXZ_MENU_DIRECTION_E.horizontal
      ? RXZ_POPOVER_POS_E.bottomleft
      : RXZ_POPOVER_POS_E.righttop,
    {
      key,
      content: RxzMenu,
      contentCntProps: {
        items: item.children,
        active: props.active,
        direction: RXZ_MENU_DIRECTION_E.vertical,
        currentStyle: childrenStyleCPT.value,
        childrenStyle: nextChildrenStyle.value,
        isFold: false,
        level: nextLevel.value,
        canFold: false,
        popoverKey: key,
        parentMouseMove: handleMouseMove,
        router: props.router,
      },
      showArrow: false,
      gap: 0,
      allowOuterClose: false,
      radius: false,
      padding: false,
      events: {
        onMouseenter: () => {
        // 它的父级菜单也应该enter
          handleMouseMove(key)('enter');
        },
        onMouseleave: () => {
          handleMouseMove(key)('leave');
        },
      },
    },
  );
  return resKey;
};

const refs = ref<{[key: string]: Element | ComponentPublicInstance | null}>({});


const openPopover = (item: RxzMenuItemOption, index: number) => {
  const el = (refs.value[`item-${index}`] as any) as HTMLElement | undefined;
  if (!el || childrenStyleCPT.value === RXZ_MENU_STYLE_E.inner || !item.children) {
    return;
  }
  const key = (item as any).popoverKey || uniqueId();
  const resKey = createSubMenu(key, el, item);
  if (!resKey) {
    return;
  }
  setTimeout(() => {
    handleMouseMove(key)('enter');
  });
  (item as any).popoverKey = resKey;
};

const closePopover = (item: RxzMenuItemOption) => {
  const key = (item as any).popoverKey;
  if (!key) {
    return;
  }
  // 不通知父菜单关闭
  handleMouseMove(key)('leave', false);
};

const getArrow = (item: RxzMenuItemOption) => {
  if (props.direction === RXZ_MENU_DIRECTION_E.vertical && childrenStyleCPT.value === RXZ_MENU_STYLE_E.popover) {
    return 'arrow-right';
  }
  if (props.direction === RXZ_MENU_DIRECTION_E.horizontal) {
    return 'arrow-down';
  }

  return item.isFold ? 'arrow-down' : 'arrow-up';
};

</script>

<style lang="scss" scoped>
@import "./RxzMenu.scss";
</style>
