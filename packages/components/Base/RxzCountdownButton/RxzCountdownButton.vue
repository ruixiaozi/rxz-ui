<template>
  <RxzButton :disabled="isStart" :type="type" @click="handleClick">
    <!-- 倒计时显示的文字 -->
    <slot name="countdownValue" v-if="isStart"></slot>
    <span v-if="isStart">({{ sec }}s)</span>
    <!-- 普通显示的文字(默认插槽) -->
    <slot v-if="!isStart"></slot>
  </RxzButton>
</template>

<script lang="ts">
import { RxzCountdownButtonCnt } from './RxzCountdownButton.component';
export default RxzCountdownButtonCnt;
</script>

<style lang="scss" scoped>
@import "./RxzCountdownButton.scss";
</style>
