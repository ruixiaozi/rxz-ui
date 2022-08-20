<template>
  <transition name="opacity-anim" appear>
    <rxz-container
      v-show="isShow"
      class="rxz-popper"
      :position="position"
      v-bind="$attrs"
      >
        <div class="rxz-popper-content" :class="[pos]">
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
