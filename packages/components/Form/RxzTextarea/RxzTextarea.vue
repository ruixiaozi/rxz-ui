<template>
  <div class="rxz-textarea"
    :class="{
      'is-disabled': disabled
    }"
  >
    <textarea
      :style="{
        minHeight,
        maxHeight,
        height,
        width,
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      v-model="formValue.value"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { RxzTextareaCnt } from './RxzTextarea.component';
export default RxzTextareaCnt;
</script>

<style lang="scss" scoped>
@import "./RxzTextarea.scss";
</style>
