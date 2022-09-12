<template>
  <transition :name="`${transition}-anim`" @afterLeave="handleDestory" appear>
    <div class="rxz-dialog" v-if="isShow" @click="handleBackClick"
      :style="[{ zIndex }]">
      <rxz-container
        :position="drawer ? 'TOP_RIGHT' : 'TOP_CENTER'"
        :offsetY="drawer ? 0 : offsetY"
        :offsetX="drawer ? 0 : offsetX"
        :height="drawer ? '100%' : undefined"
        :allowOverflow="false"
        @overflow="handleOverflow"
        class="rxz-dialog-container"
        >
        <div class="rxz-dialog-content"
          :style="{
            'width':width,
            'opacity': 1,
            'height': '100%'
          }"
          @click.stop="() => false"
          >
          <h4
            v-rxz-resize-observe="handleResize"
            ref="title"
            @mousedown="handleDragStart"
            v-rxz-overflow="true"
            class="rxz-dialog-content-title"
            :class="{
              allowDrag
            }"
            >
            <span class="rxz-dialog-content-title-slot" @mousedown.stop="() => {}">
              <slot name="title" >Title</slot>
            </span>
          </h4>
          <rxz-icon
            name="close"
            :size="14"
            class="rxz-dialog-content-close"
            v-show="closable"
            @click.stop="handleClose"
          ></rxz-icon>
          <div
            class="rxz-dialog-content-body"
            :style="{
              marginBottom: footerHeight ? `${footerHeight}px` : undefined,
              marginTop: titleHeight ? `${titleHeight}px` : undefined,
              maxHeight: titleHeight || footerHeight? `calc(100% - ${titleHeight + footerHeight}px)` : undefined
            }"
          >
            <slot>Content</slot>
          </div>
          <div
            v-if="$slots.footer"
            ref="footer"
            v-rxz-resize-observe="handleResize"
            class="rxz-dialog-content-footer"
          >
            <slot name="footer"></slot>
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
