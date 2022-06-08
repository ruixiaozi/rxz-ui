<template>
  <div class="rxz-theme-contaner" :data-theme="theme">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { RxzTheme } from './RxzTheme';
export default RxzTheme;
</script>

<style lang="scss" scoped>
@import "./RxzTheme.scss";
</style>

