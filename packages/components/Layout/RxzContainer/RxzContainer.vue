<template>
  <div
    class="rxz-container"
    v-bind="$attrs"
    ref="container"
    v-rxz-resize-observe="(event) => resize(event)"
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
      v-rxz-resize-observe="(event) => resize(event)"
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

<script lang="ts">
import { RxzContainerCnt } from './RxzContainer.component';
export default RxzContainerCnt;
</script>

<style lang="scss" scoped>
@import "./RxzContainer.scss";
</style>
