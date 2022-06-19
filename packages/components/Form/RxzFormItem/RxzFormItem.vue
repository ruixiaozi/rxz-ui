<template>
  <RxzFlex class="rxz-form-item" direction="horizontal" gutter="5px" align="flex-start">
    <slot :itemData="itemFormData"></slot>
  </RxzFlex>
</template>

<script lang="ts">
import { RxzFormItem } from './RxzFormItem';
export default RxzFormItem;
</script>

<style lang="scss" scoped>
@import "./RxzFormItem.scss";
</style>
