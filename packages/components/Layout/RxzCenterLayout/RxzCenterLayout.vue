<template>
  <div class="rxz-center-layout">
    <div
      class="rxz-center-layout-content"
      :class="[{ 'no-scroll': !isScroll }, { 'show-shadow': showShadow }]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzCenterLayoutCnt } from './RxzCenterLayout.component';
export default RxzCenterLayoutCnt;
</script>

<style lang="scss" scoped>
@import "./RxzCenterLayout.scss";
</style>
