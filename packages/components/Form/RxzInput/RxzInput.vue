<template>
  <input
    class="rxz-input"
    :class="{
      'rxz-form-value': formValue.isFormValue
    }"
    type="text"
    v-bind="$attrs"
    @blur="handleBlur"
    v-model="formValue.value"
  />
</template>

<script lang="ts">
import { RxzInputCnt } from './RxzInput.component';
export default RxzInputCnt;
</script>

<style lang="scss" scoped>
@import "./RxzInput.scss";
</style>
