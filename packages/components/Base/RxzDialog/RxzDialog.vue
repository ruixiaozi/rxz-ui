<template>
  <div class="rxz-loading">
    <div
      class="rxz-loading-loading"
      v-if="loading"
      :style="{
        'background-color': bgColor,
        color: color,
      }"
    >
      <span class="rxz-loading-loading-text">{{ text || $t("loading") }}</span>
      <RxzIcon name="spinner" spinner></RxzIcon>
    </div>
    <div class="rxz-loading-body" v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzDialogCnt } from './RxzDialog.component';
export default RxzDialogCnt;
</script>

<style lang="scss" scoped>
@import "./RxzDialog.scss";
</style>
