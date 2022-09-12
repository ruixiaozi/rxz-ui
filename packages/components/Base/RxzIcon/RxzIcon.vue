<template>
  <i
    class="rxz-icon"
    :class="[
      'rxz-icon-' + name,
      'rxz-icon-type-' + type,
    ]"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      fontSize: `${size}px`,
      transform: `rotate(${realRotate}deg)`
    }"
    v-bind="$attrs"
  ></i>
</template>

<script lang="ts">
import { RxzIconCnt } from './RxzIcon.component';
export default RxzIconCnt;
</script>

<style lang="scss" scoped>
@import "./RxzIcon.scss";
</style>
