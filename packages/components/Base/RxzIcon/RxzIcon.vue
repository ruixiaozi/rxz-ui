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
import { RxzIconCnt } from './RxzIcon.component';
export default RxzIconCnt;
</script>

<style lang="scss" scoped>
@import "./RxzIcon.scss";
</style>
