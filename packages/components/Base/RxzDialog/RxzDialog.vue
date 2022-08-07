<template>
  <!-- 全屏遮罩 -->
  <div class="rxz-dialog" v-if="isShow"
    :style="[{ zIndex }]">
    <rxz-center-layout :isScroll="false" :showShadow="true">
      <div class="rxz-dialog-content"
        :style="[
          {'width':width}
        ]"
        >
        <div class="rxz-dialog-content-title">
          <span @click="handleClose">
            <rxz-icon v-show="isShowClose" name="close" class="rxz-dialog-content-title-close" />
          </span>
          <slot name="title"></slot>
        </div>
        <div class="rxz-dialog-content-body">
          <slot >222</slot>
        </div>
      </div>
    </rxz-center-layout>
  </div>
</template>

<script lang="ts">
import { RxzDialogCnt } from './RxzDialog.component';
export default RxzDialogCnt;
</script>

<style lang="scss" scoped>
@import "./RxzDialog.scss";
</style>
