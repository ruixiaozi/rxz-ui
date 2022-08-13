<template>
  <div
    class="rxz-container"
    v-bind="$attrs"
    ref="container"
    v-rxz-resize-observe="() => resize()"
    :style="{
      opacity: contentX === null || contentY === null ? 0 : 1
    }"
  >
    <div
      class="rxz-container-content"
      ref="content"
      :style="{
        left: `${contentX}px`,
        top: `${contentY}px`,
      }"
      v-rxz-resize-observe="() => resize()"
    >
      <slot>Content</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzContainerCnt } from './RxzContainer.component';
export default RxzContainerCnt;
</script>

<style lang="scss" scoped>
@import "./RxzContainer.scss";
</style>
