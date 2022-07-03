<template>
  <form class="rxz-form" >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { RxzFormCnt } from './RxzForm.component';
export default RxzFormCnt;
</script>

<style lang="scss" scoped>
@import "./RxzForm.scss";
</style>
