<template>
  <transition :name="`${transition}-anim`" @afterLeave="handleDestory" appear>
    <div class="rxz-dialog" v-if="isShow" @click="handleBackClick"
      :style="[{ zIndex }]">
      <rxz-container
        position="TOP_CENTER"
        :offsetY="offsetY"
        :offsetX="offsetX"
        :allowOverflow="true"
        class="rxz-dialog-container"
        >
        <div class="rxz-dialog-content"
          :style="[
            {'width':width, 'opacity': 1}
          ]"
          @click.stop="() => false"
          >
          <h4
            @mousedown="handleDragStart"
            v-rxz-overflow="true"
            class="rxz-dialog-content-title"
            :class="{
              allowDrag
            }"
            >
            <span @click.stop="handleClose" >
              <i class="rxz-dialog-content-title-close"  v-show="isShowClose"></i>
            </span>
            <span class="rxz-dialog-content-title-slot" @mousedown.stop="() => {}">
              <slot name="title" ></slot>
            </span>
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
