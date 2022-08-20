<template>
  <transition :name="`${transition}-anim`" @afterLeave="handleDestory" appear>
    <div class="rxz-dialog" v-if="isShow" @click="handleBackClick"
      :style="[{ zIndex }]">
      <rxz-container position="TOP_CENTER" :offsetY="150" class="rxz-dialog-container">
        <div class="rxz-dialog-content"
          :style="[
            {'width':width}
          ]"
          @click.stop="() => false"
          >
          <h4 v-rxz-overflow="true" class="rxz-dialog-content-title">
            <span @click="handleClose">
              <i class="rxz-dialog-content-title-close"  v-show="isShowClose"></i>
            </span>
            <slot name="title"></slot>
          </h4>
          <div class="rxz-dialog-content-body">
            <slot></slot>
          </div>
        </div>
      </rxz-container>
    </div>
  </transition>
</template>

<script lang="ts">
import { RxzDialogCnt } from './RxzDialog.component';
export default RxzDialogCnt;
</script>

<style lang="scss" scoped>
@import "./RxzDialog.scss";
</style>
