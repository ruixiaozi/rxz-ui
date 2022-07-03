<template>
  <div
    class="rxz-flip-card"
    :style="{
      width: width,
      height: height,
      'border-radius': borderRadius,
      transform: isFront ? 'rotateY(0deg)' : 'rotateY(180deg)',
    }"
    v-bind="$attrs"
  >
    <div class="rxz-flip-card-front">
      <slot name="front"></slot>
    </div>
    <div class="rxz-flip-card-back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { RxzFlipCardCnt } from './RxzFlipCard.component';
export default RxzFlipCardCnt;
</script>

<style lang="scss" scoped>
@import "./RxzFlipCard.scss";
</style>
