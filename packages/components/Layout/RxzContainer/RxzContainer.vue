<template>
  <div
    class="rxz-container"
    v-bind="$attrs"
    ref="container"
    v-rxz-resize-observe="resize"
  >
    <div
      class="rxz-container-content"
      ref="content"
      :style="{
        left: `${contentX}px`,
        top: `${contentY}px`,
        width: contentW,
        height: contentH,
        opacity: contentX === null || contentY === null ? 0 : 1
      }"
      v-rxz-resize-observe="resize"
    >
      <slot></slot>
    </div>
    <template v-for="(slotName, inx) in slotNames">
      <div v-if="$slots[slotName]" class="rxz-container-content" :class="[slotName]" :key="inx">
        <slot :name="slotName"></slot>
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">
import { vRxzResizeObserve } from '@/directives';
import { defineProps, defineEmits, ref, computed } from 'vue';
import define, { RXZ_CONTAINER_SLOT_E } from './RxzContainer.define';
const props = defineProps(define.rxzContainerProps);
const emits = defineEmits(define.rxzContainerEmits);

const content = ref<HTMLDivElement>();
const container = ref<HTMLDivElement>();
const containerWidth = ref(0);
const containerHeight = ref(0);
const contentWidth = ref(0);
const contentHeight = ref(0);

const slotNames = Object.values(RXZ_CONTAINER_SLOT_E);

const overflow = (diffX = 0, diffY = 0) => {
  emits('overflow', {
    diffX,
    diffY,
  });
};

const resize = (event: Event) => {
  if (!container.value || !content.value) {
    return event;
  }
  containerWidth.value = container.value.clientWidth;
  containerHeight.value = container.value.clientHeight;
  contentWidth.value = content.value.clientWidth;
  contentHeight.value = content.value.clientHeight;
  return event;
};

const contentX = computed(() => {
  if (!containerWidth.value || !contentWidth.value) {
    return null;
  }
  const [, hPos] = props.position.split('_');
  let resX = 0;
  switch (hPos) {
    case 'LEFT':
      resX = props.offsetX;
      break;
    case 'CENTER':
      resX = (containerWidth.value / 2) - (contentWidth.value / 2) + props.offsetX;
      break;
    case 'RIGHT':
      resX = containerWidth.value - contentWidth.value + props.offsetX;
      break;
      // no default
  }
  // 允许超出边界，则直接返回
  if (props.allowOverflow) {
    return resX;
  }

  if (resX < 0) {
    overflow(resX);
    return 0;
  }

  if (resX + contentWidth.value > containerWidth.value) {
    overflow(resX + contentWidth.value - containerWidth.value);
    return containerWidth.value - contentWidth.value;
  }
  return resX;
});

const contentY = computed(() => {
  if (!containerHeight.value || !contentHeight.value) {
    return null;
  }
  const [vPos] = props.position.split('_');
  let resY = 0;
  switch (vPos) {
    case 'TOP':
      resY = props.offsetY;
      break;
    case 'CENTER':
      resY = (containerHeight.value / 2) - (contentHeight.value / 2) + props.offsetY;
      break;
    case 'BOTTOM':
      resY = containerHeight.value - contentHeight.value + props.offsetY;
      break;
      // no default
  }
  // 允许超出边界，则直接返回
  if (props.allowOverflow) {
    return resY;
  }

  if (resY < 0) {
    overflow(0, resY);
    return 0;
  }

  if (resY + contentHeight.value > containerHeight.value) {
    overflow(0, resY + contentHeight.value - containerHeight.value);
    return containerHeight.value - contentHeight.value;
  }
  return resY;
});

const contentW = computed(() => {
  // 如果内容大于容器，则强制内容宽度为容器宽度，内容自己处理overflow
  if (containerWidth.value <= contentWidth.value) {
    return `${containerWidth.value}px`;
  }
  return props.width;
});

const contentH = computed(() => {
  // 如果内容大于容器，则强制内容高度为容器高度，内容自己处理overflow
  if (containerHeight.value <= contentHeight.value) {
    return `${containerHeight.value}px`;
  }
  return props.height;
});

</script>

<style lang="scss" scoped>
@import "./RxzContainer.scss";
</style>
