<template>
  <span class="rxz-badge" :style="{
    zIndex,
    top: `${top}px`,
    left: `${left}px`,
  }">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { isString } from 'lodash';
import { defineProps, defineEmits, computed } from 'vue';
import define from './RxzBadgeTpl.define';
const props = defineProps(define.rxzBadgeTplProps);
defineEmits(define.rxzBadgeTplEmits);

const text = computed(() => {
  if (isString(props.value)) {
    return props.value;
  }
  if (props.value >= props.minNum && props.value <= props.maxNum) {
    return Math.trunc(props.value);
  }

  if (props.value < props.minNum) {
    return `${props.minNum}+`;
  }

  return `${props.maxNum}+`;
});
</script>

<style lang="scss" scoped>
@import "./RxzBadgeTpl.scss";
</style>
