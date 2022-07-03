<template>
  <span class="rxz-label" :class="{ 'required': isRequired }" :style="{ width: realLebelWidth }">
    <i class="rxz-label-asterisk" :style="{ 'opacity': isRequired ? 1 : 0 }"></i>
    <span
      v-rxz-overflow="isFixedWidth"
      class="rxz-label-content"
      ref="labelContentSpan"
      :style="isFixedWidth ? { maxWidth: 'calc(100% - 14px)' } : {  }"
      >
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
import { RxzLabelCnt } from './RxzLabel.component';
export default RxzLabelCnt;
</script>

<style lang="scss" scoped>
@import "./RxzLabel.scss";
</style>
