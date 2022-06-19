<template>
  <input type="text" v-bind="$attrs" v-model="inputValue" />
</template>

<script lang="ts">
import { RxzInput } from './RxzInput';
export default RxzInput;
</script>

<style lang="scss" scoped>
@import "./RxzInput.scss";
</style>
