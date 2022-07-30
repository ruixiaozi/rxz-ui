<template>
  <div class="rxz-form-item">
    <slot :itemData="formData?.[name]"></slot>
  </div>
  <div v-if="tip" class="error-tip" :style="{ marginLeft:  labelWidthPx}">
      <RxzIcon name="exclamation-circle"></RxzIcon>
      {{ tip }}
    </div>
</template>

<script lang="ts">
import { RxzFormItemCnt } from './RxzFormItem.component';
export default RxzFormItemCnt;
</script>

<style lang="scss" scoped>
@import "./RxzFormItem.scss";
</style>
