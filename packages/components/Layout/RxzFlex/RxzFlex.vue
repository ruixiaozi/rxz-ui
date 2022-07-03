<template>
  <div class="rxz-flex"
    :class="[direction]"
    :style="{ '--gutter': gutter , '--align': align, '--justify': justify }"
    >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { RxzFlexCnt } from './RxzFlex.component';
export default RxzFlexCnt;
</script>

<style lang="scss" scoped>
@import "./RxzFlex.scss";
</style>
