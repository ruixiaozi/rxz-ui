<template>
  <!-- 作为子表单时，属于formValue -->
  <form class="rxz-form" :class="{
      'rxz-form-value': name !== null && name !== undefined
    }">
    <RxzFlex :direction="direction">
      <slot :formData="formData"></slot>
    </RxzFlex>
  </form>
</template>

<script lang="ts">
import { RxzFormCnt } from './RxzForm.component';
export default RxzFormCnt;
</script>

<style lang="scss" scoped>
@import "./RxzForm.scss";
</style>
