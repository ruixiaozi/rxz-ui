<template>
  <form class="rxz-form" >
    <RxzFlex :direction="direction">
      <slot></slot>
    </RxzFlex>
  </form>
</template>

<script lang="ts">
import { RxzFormCnt } from './RxzForm.component';
export default RxzFormCnt;
</script>

<style lang="scss" scoped>
@import "./RxzForm.scss";
</style>
