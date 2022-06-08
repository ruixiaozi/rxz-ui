<template>
  <form class="rxz-form" >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { RxzForm } from './RxzForm';
export default RxzForm;
</script>

<style lang="scss" scoped>
@import "./RxzForm.scss";
</style>
