<template>
  <transition :name="`${transition}-anim`" @afterLeave="handleDestory" appear>
    <div class="rxz-dialog" v-if="isShow" @click="handleBackClick"
      :style="[{ zIndex }]">
      <RxzContainer
        :position="drawer ? RXZ_CONTAINER_POSITION_E.TOP_RIGHT : RXZ_CONTAINER_POSITION_E.TOP_CENTER"
        :offsetY="drawer ? 0 : offsetY"
        :offsetX="drawer ? 0 : offsetX"
        :height="drawer ? '100%' : undefined"
        :allowOverflow="false"
        @overflow="handleOverflow"
        class="rxz-dialog-container"
        >
        <div class="rxz-dialog-content"
          :style="{
            'width':width,
            'opacity': 1,
            'height': '100%'
          }"
          @click.stop="() => false"
          >
          <h4
            v-rxz-resize-observe="handleResize"
            ref="title"
            @mousedown="handleDragStart"
            v-rxz-overflow="true"
            class="rxz-dialog-content-title"
            :class="{
              allowDrag
            }"
            >
            <span class="rxz-dialog-content-title-slot" @mousedown.stop="() => {}">
              <slot name="title" >Title</slot>
            </span>
          </h4>
          <RxzIcon
            name="close"
            :size="14"
            class="rxz-dialog-content-close"
            v-show="closable"
            @click.stop="handleClose"
          ></RxzIcon>
          <div
            class="rxz-dialog-content-body"
            :style="{
              marginBottom: footerHeight ? `${footerHeight}px` : undefined,
              marginTop: titleHeight ? `${titleHeight}px` : undefined,
              maxHeight: titleHeight || footerHeight? `calc(100% - ${titleHeight + footerHeight}px)` : undefined
            }"
          >
            <slot>Content</slot>
          </div>
          <div
            v-if="$slots.footer"
            ref="footer"
            v-rxz-resize-observe="handleResize"
            class="rxz-dialog-content-footer"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </RxzContainer>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { RxzIcon } from '@/components/base';
import { RxzContainer, RXZ_CONTAINER_POSITION_E } from '@/components/layout';
import { vRxzOverflow, vRxzResizeObserve } from '@/directives';
import { useRxzSSR } from '@/use';
import { defineProps, defineEmits, defineExpose, ref, onMounted, onBeforeUnmount } from 'vue';
import define from './RxzDialogTpl.define';
const props = defineProps(define.rxzDialogTplProps);
const emits = defineEmits(define.rxzDialogTplEmits);

const title = ref<HTMLElement>();
const footer = ref<HTMLElement>();

const isShow = ref(true);
const offsetY = ref(150);
const offsetX = ref(0);
const startX = ref(0);
const startY = ref(0);
const isDrag = ref(false);
const diffInfo = ref<any>(null);
const titleHeight = ref(0);
const footerHeight = ref(0);

const handleResize = () => {
  // 都减去16.是为了去除padding的16px
  titleHeight.value = title.value?.clientHeight ? (title.value.clientHeight - 16) : 0;
  footerHeight.value = footer.value?.clientHeight ? (footer.value.clientHeight - 16) : 0;
};

const handleOverflow = (_diffInfo: any) => {
  diffInfo.value = _diffInfo;
};

const handleDrag = (event: MouseEvent) => {
  if (!isDrag.value || !props.allowDrag) {
    return;
  }
  offsetX.value += event.clientX - startX.value;
  offsetY.value += event.clientY - startY.value;
  startX.value = event.clientX;
  startY.value = event.clientY;
};

const handleDragEnd = (event: MouseEvent) => {
  if (!props.allowDrag) {
    return;
  }
  handleDrag(event);
  isDrag.value = false;
  // 如果存储overflow出去的差异数据，则需要处理
  if (diffInfo.value?.diffX) {
    offsetX.value -= diffInfo.value?.diffX;
  }
  if (diffInfo.value?.diffY) {
    offsetY.value -= diffInfo.value?.diffY;
  }
  diffInfo.value = null;
};

const handleDragStart = (event: MouseEvent) => {
  if (!props.allowDrag) {
    return;
  }
  startX.value = event.clientX;
  startY.value = event.clientY;
  isDrag.value = true;
};

const handleClose = (event: MouseEvent) => {
  emits('close', event);
};

const handleBackClick = (event: MouseEvent) => {
  if (props.allowOuterClose) {
    handleClose(event);
  }
};

const handleDestory = (event: Event) => {
  emits('destory', event);
};

onMounted(() => {
  if (!useRxzSSR().isSSR.value) {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  }
});

onBeforeUnmount(() => {
  if (!useRxzSSR().isSSR.value) {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  }
});

defineExpose({
  isShow,
});

</script>

<style lang="scss" scoped>
@import "./RxzDialogTpl.scss";
</style>
