<template>
  <transition :name="`${transition}-anim`" @afterLeave="handleDestory" appear>
    <div class="rxz-dialog" v-if="isShow" @click="handleBackClick"
      :style="[{ zIndex }]">
      <rxz-container
        :position="drawer ? 'TOP_RIGHT' : 'TOP_CENTER'"
        :offsetY="drawer ? 0 : offsetY"
        :offsetX="drawer ? 0 : offsetX"
        :contentH="drawer ? '100%' : undefined"
        :allowOverflow="true"
        class="rxz-dialog-container"
        >
        <div class="rxz-dialog-content"
          :style="{
            'width':width,
            'opacity': 1,
            'height': drawer ? '100%' : undefined
          }"
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
