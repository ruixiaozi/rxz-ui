<template>
  <span
    class="rxz-select"
    :class="{
      disabled,
      text: !isButton,
    }"
    :style="{
      width,
    }"
    @click="handleClick"
    :tabindex="tabIndex"
    v-bind="$attrs"
  >
    <span class="rxz-select-text" v-rxz-overflow>
      {{ formValue.value?.label || "" }}
    </span>
    <rxz-icon
      :name="isFold ? 'arrow-down' : 'arrow-up'"
      :size="isButton ? 24 : 18"
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
