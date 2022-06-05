<template>
  <i
    class="fa"
    :class="[
      'fa-' + name,
      'fa-rotate-' + rotate,
      sizeCPT,
      { 'fa-fw': isFixedWidth },
      { 'fa-spin': spinner },
      ...cls,
    ]"
    :style="[css]"
  ></i>
</template>

<script lang="ts">
import { RxzIcon } from './RxzIcon';
export default RxzIcon;
</script>

<style lang="scss" scoped>
@import "./RxzIcon.scss";
</style>
