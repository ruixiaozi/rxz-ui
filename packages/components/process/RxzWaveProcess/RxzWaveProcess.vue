<template>
  <div
    class="rxz-wave-process"
    :style="{
      width: width,
      height: height,
      'border-radius': borderRadius,
      border: border,
    }"
  >
    <div
      class="rxz-wave-process-water"
      :style="{
        'background-image': waterBackgroudImage,
      }"
    ></div>
    <div
      class="rxz-wave-process-wave"
      :style="{
        'background-color': emptyColor,
        top: waveTop,
      }"
    ></div>

    <div
      class="rxz-wave-process-info"
      :style="{
        ...infoCss,
      }"
    >
      {{ process }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import define from './RxzWaveProcess.define';
const props = defineProps(define.rxzWaveProcessProps);
defineEmits(define.rxzWaveProcessEmits);

const waterBackgroudImage = computed(() => `linear-gradient(-180deg, ${props.waterColor} 13%, ${props.waterColor} 100%)`);
const waveTop = computed(() => `${100 - props.process}%`);

</script>

<style lang="scss" scoped>
@import "./RxzWaveProcess.scss";
</style>
