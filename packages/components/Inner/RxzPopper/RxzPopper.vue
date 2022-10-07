<template>
  <transition name="opacity-anim" appear>
    <rxz-container
      v-show="isShow"
      class="rxz-popper"
      :class="[type]"
      :position="position"
      v-bind="$attrs"
      :data-rxz-popper="popperKey"
      >
        <div class="rxz-popper-content" :style="{
          padding: padding ? '8px' : '0'
        }" :class="{radius}">
          <span v-if="showArrow" class="rxz-popper-content-arrow" :class="[pos]"></span>
          <slot></slot>
        </div>
      </rxz-container>
  </transition>
</template>

<script lang="ts">
import { RxzPopperCnt } from './RxzPopper.component';
export default RxzPopperCnt;
</script>

<style lang="scss" scoped>
@import "./RxzPopper.scss";
</style>
