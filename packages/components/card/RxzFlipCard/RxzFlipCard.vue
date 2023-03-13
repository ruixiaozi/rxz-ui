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

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define from './RxzFlipCard.define';
defineProps(define.rxzFlipCardProps);
defineEmits(define.rxzFlipCardEmits);

</script>

<style lang="scss" scoped>
@import "./RxzFlipCard.scss";
</style>
