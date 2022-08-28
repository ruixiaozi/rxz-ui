<template>
  <div class="rxz-loading" :style="[{ zIndex, position: isGlobal ? 'fixed' : 'absolute' }]">
    <div
      class="rxz-loading-container"
      :style="{
        'background-color': bgColor,
        color: color,
      }"
    >
      <slot>
        <div class="default">
          <div class="loader"></div>
          <p v-if="text" class="rxz-loading-container-text">{{ text }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzLoadingTplCnt } from './RxzLoadingTpl.component';
export default RxzLoadingTplCnt;
</script>

<style lang="scss" scoped>
@import "./RxzLoadingTpl.scss";
</style>
