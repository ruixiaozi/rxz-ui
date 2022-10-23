<template>
  <span
    class="rxz-label"
    :class="{ required: isRequired }"
    :style="{ width: formLabelWidth }"
  >
    <i class="rxz-label-asterisk" :style="{ opacity: isRequired ? 1 : 0 }"></i>
    <span
      class="rxz-label-content"
      ref="labelContentSpan"
      v-rxz-overflow="true"
    >
      <slot></slot>

    </span>
    <span class="rxz-label-colon" :style="{ opacity: showColon ? 1 : 0 }">
      {{ colon }}
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
