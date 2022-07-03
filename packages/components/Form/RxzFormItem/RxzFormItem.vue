<template>
  <div>
    <RxzFlex
      class="rxz-form-item"
      direction="horizontal"
      gutter="5px"
      align="flex-start"
    >
      <slot :itemData="itemFormData"></slot>
    </RxzFlex>
    <span v-if="tip" class="error-tip">
      <RxzIcon name="exclamation-circle"></RxzIcon>
      {{ tip }}
    </span>
  </div>
</template>

<script lang="ts">
import { RxzFormItemCnt } from './RxzFormItem.component';
export default RxzFormItemCnt;
</script>

<style lang="scss" scoped>
@import "./RxzFormItem.scss";
</style>
