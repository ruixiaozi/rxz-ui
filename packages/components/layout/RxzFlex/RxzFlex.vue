<template>
  <div class="rxz-flex"
    :class="[direction]"
    :style="{ '--gutter': gutter , '--align': align, '--justify': justify }"
    >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define from './RxzFlex.define';
defineProps(define.rxzFlexProps);
defineEmits(define.rxzFlexEmits);

</script>

<style lang="scss" scoped>
@import "./RxzFlex.scss";
</style>
