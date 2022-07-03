<template>
  <div class="rxz-theme-contaner" :data-theme="theme">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { RxzThemeCnt } from './RxzTheme.component';
export default RxzThemeCnt;
</script>

<style lang="scss" scoped>
@import "./RxzTheme.scss";
</style>

