<template>
  <div>
    <slot :itemData="itemFormData"></slot>
  </div>
</template>

<script lang="ts">
import { RxzFormItem } from './RxzFormItem';
export default RxzFormItem;
</script>

<style lang="scss" scoped>
@import "./RxzFormItem.scss";
</style>
