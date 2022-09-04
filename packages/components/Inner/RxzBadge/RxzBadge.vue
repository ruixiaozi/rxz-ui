<template>
  <span class="rxz-badge" :style="{
    zIndex,
    top: `${top}px`,
    left: `${left}px`,
  }">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { RxzBadgeCnt } from './RxzBadge.component';
export default RxzBadgeCnt;
</script>

<style lang="scss" scoped>
@import "./RxzBadge.scss";
</style>
