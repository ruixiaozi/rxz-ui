<template>
  <span
    class="rxz-select"
    :class="{
      disabled,
      text: !isButton,
    }"
    :style="{
      width,
    }"
    @click="handleClick"
    :tabindex="tabIndex"
    v-bind="$attrs"
    ref="el"
  >
    <span :class="['rxz-select-text', { 'rxz-select-text-placeholder': isNil(displayValue?.value) }]" v-rxz-overflow>
      {{ isNil(displayValue?.value) ? placeholder : (displayValue?.label || '')  }}
    </span>
    <RxzIcon
      :name="iconName"
      :size="isButton ? 24 : 18"
      class="rxz-select-arrow"
      @click="handleIconClick"
    ></RxzIcon>
  </span>
</template>

<script setup lang="ts">
import { RxzSelectListTpl, RxzSelectOption, RXZ_POPOVER_POS_E } from '@/components/template';
import { useRxzBindingWithinSetup, useRxzFocus, useRxzPopover } from '@/use';
import { defineProps, defineEmits, ref, watch, computed } from 'vue';
import { RxzIcon } from '../RxzIcon';
import { vRxzOverflow } from '@/directives';
import define from './RxzSelect.define';
import { useElementHover } from '@vueuse/core';
import { cloneDeep, isNil } from 'lodash';

const props = defineProps(define.rxzSelectProps);
const emits = defineEmits(define.rxzSelectEmits);

const el = ref<HTMLSpanElement>();

const isHovered = useElementHover(el);

const defaultValue: RxzSelectOption = {
  key: '',
  label: '',
  value: undefined,
};
// 实际显示的值，
const displayValue = ref(cloneDeep(defaultValue));

// 绑定值，混入modelValue和closedBindingValue，closedBindingValue优先
const bindValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, props.bindProperty ? defaultValue[props.bindProperty] : cloneDeep(defaultValue));

watch(displayValue, (newV, oldV) => {
  if (newV === oldV) {
    return;
  }
  bindValue.value = props.bindProperty ? newV[props.bindProperty] : newV;
});

watch(bindValue, (newV, oldV) => {
  if (newV === oldV) {
    return;
  }
  if (props.bindProperty) {
    displayValue.value = props.options.find((item) => item[props.bindProperty!] === newV) || cloneDeep(defaultValue);
  } else {
    displayValue.value = newV;
  }
}, { immediate: true });

const tabIndex = useRxzFocus().tabIndexNext();
const isFold = ref(true);
const popoverKey = ref<string>();

const { openPopover, hiddenPopover } = useRxzPopover();

const iconName = computed(() => {
  if (props.clear && !isNil(displayValue.value?.value) && isHovered.value) {
    return 'clear';
  }
  if (isFold.value) {
    return 'arrow-down';
  }
  return 'arrow-up';
});

const openSelectList = () => {
  if (!el.value) {
    return;
  }
  popoverKey.value = openPopover(el.value, RXZ_POPOVER_POS_E.bottomright, {
    key: popoverKey.value,
    showArrow: false,
    radius: true,
    padding: false,
    allowAutoRemove: true,
    content: RxzSelectListTpl,
    contentCntProps: {
      'options': props.options,
      'modelValue': displayValue.value,
      'style': {
        width: props.width,
      },
      'onUpdate:modelValue': (selected: RxzSelectOption) => {
        displayValue.value = selected;
        selected.onClick?.();
        if (popoverKey.value) {
          hiddenPopover(popoverKey.value);
        }
      },
    },
    events: {
      onShowChange: (isShow: boolean) => {
        isFold.value = !isShow;
      },
    },
  });
};

const handleClick = () => {
  if (props.disabled) {
    return;
  }
  isFold.value = !isFold.value;
  if (!isFold.value) {
    openSelectList();
  } else if (popoverKey.value) {
    hiddenPopover(popoverKey.value);
  }
};

const handleIconClick = (event: Event) => {
  // 开启清除，并且有值
  if (props.clear && !isNil(displayValue.value?.value)) {
    displayValue.value = cloneDeep(defaultValue);
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  return true;
};

</script>

<style lang="scss" scoped>
@import "./RxzSelect.scss";
</style>
