<template>
  <form class="rxz-form" >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { RxzForm } from './RxzForm';
console.log(JSON.stringify(RxzForm));
export default RxzForm;
</script>

<style lang="scss" scoped>
@import "./RxzForm.scss";
</style>
