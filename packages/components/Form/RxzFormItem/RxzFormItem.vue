<template>
  <div class="rxz-form-item">
    <div class="rxz-form-item-body">
      <slot :itemData="formData?.[name]"></slot>
    </div>
    <div v-if="tip" class="error-tip" :style="{ paddingLeft: labelWidthPx }">
      <rxz-icon class="error-tip-icon" name="exclamation" :size="16"></rxz-icon>
      <span>{{ tip }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzFormItemCnt } from './RxzFormItem.component';
export default RxzFormItemCnt;
</script>

<style lang="scss" scoped>
@import "./RxzFormItem.scss";
</style>
