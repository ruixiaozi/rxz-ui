<template>
  <div class="rxz-select-list" v-bind="$attrs">
    <div
      v-for="option in options" :key="option.key"
      class="rxz-select-list-option"
      :class="{selected: option.value === modelValue?.value}"
      @click="handleSelect(option)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define, { RxzSelectOption } from './RxzSelectListTpl.define';
defineProps(define.rxzSelectListTplProps);
const emits = defineEmits(define.rxzSelectListTplEmits);
const handleSelect = (option: RxzSelectOption) => {
  emits('update:modelValue', option);
};
</script>

<style lang="scss" scoped>
@import "./RxzSelectListTpl.scss";
</style>
