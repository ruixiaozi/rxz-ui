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

<script lang="ts">
import { RxzWaveProcessCnt } from './RxzWaveProcess.component';
export default RxzWaveProcessCnt;
</script>

<style lang="scss" scoped>
@import "./RxzWaveProcess.scss";
</style>
