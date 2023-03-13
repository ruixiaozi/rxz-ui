<template>
  <div class="rxz-textarea"
    :class="{
      'is-disabled': disabled
    }"
  >
    <textarea
      :style="{
        minHeight,
        maxHeight,
        height,
        width,
      }"
      :disabled="disabled"
      :placeholder="placeholder"
      v-model="displayValue"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { defineProps, defineEmits, computed } from 'vue';
import define from './RxzTextarea.define';
const props = defineProps(define.rxzTextareaProps);
const emits = defineEmits(define.rxzTextareaEmits);

// 实际显示的值，混入modelValue和closedBindingValue，modelValue优先
const displayValue = useRxzBindingWithinSetup()
  .mixinModelValueClosedBindingValue(props, emits, '');

const minHeight = computed(() => `calc(${props.minRow * 1.15}em + 16px)`);
const maxHeight = computed(() => `calc(${props.maxRow * 1.15}em + 16px)`);
const height = computed(() => `calc(${props.row * 1.15}em + 16px)`);

</script>

<style lang="scss" scoped>
@import "./RxzTextarea.scss";
</style>
