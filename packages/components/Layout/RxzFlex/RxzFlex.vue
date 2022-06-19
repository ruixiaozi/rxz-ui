<template>
  <div class="rxz-flex"
    :class="[direction]"
    :style="{ '--gutter': gutter , '--align': align, '--justify': justify }"
    >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { RxzFlex } from './RxzFlex';
export default RxzFlex;
</script>

<style lang="scss" scoped>
@import "./RxzFlex.scss";
</style>
