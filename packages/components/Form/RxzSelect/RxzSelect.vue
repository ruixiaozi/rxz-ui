<template>
  <span
    class="rxz-select"
    :class="{
      disabled,
    }"
    :style="{
      width,
    }"
    @click="handleClick"
    :tabindex="tabIndex"
    v-bind="$attrs"
  >
    <span>
      {{ formValue.value?.label || "" }}</span>
    <rxz-icon
      :name="isFold ? 'arrow-down' : 'arrow-up'"
      class="rxz-select-arrow"
    ></rxz-icon>
  </span>
</template>

<script lang="ts">
import { RxzSelectCnt } from './RxzSelect.component';
export default RxzSelectCnt;
</script>

<style lang="scss" scoped>
@import "./RxzSelect.scss";
</style>
