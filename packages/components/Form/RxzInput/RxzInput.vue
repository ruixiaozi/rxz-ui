<template>
  <input type="text" v-bind="$attrs" @blur="handleBlur" v-model="inputValue" />
</template>

<script lang="ts">
import { RxzInputCnt } from './RxzInput.component';
export default RxzInputCnt;
</script>

<style lang="scss" scoped>
@import "./RxzInput.scss";
</style>
