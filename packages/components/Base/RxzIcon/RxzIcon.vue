<template>
  <span
    class="rxz-icon"
    :class="[
      'rxz-icon-type-' + type,
    ]"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      transform: `rotate(${realRotate}deg)`
    }"
    v-bind="$attrs"
  >
    <svg>
      <use :href="`#${name}`"></use>
    </svg>
  </span>
</template>

<script lang="ts">
import { RxzIconCnt } from './RxzIcon.component';
export default RxzIconCnt;
</script>

<style lang="scss" scoped>
@import "./RxzIcon.scss";
</style>
