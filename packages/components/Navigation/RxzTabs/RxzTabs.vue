<template>
  <div class="rxz-tabs">
    <div class="rxz-tabs-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="{
          select: item.key === modelValue?.key,
        }"
        @click="handleClick(item)"
      >
        {{ item.name }}
      </span>
    </div>
    <div class="rxz-tabs-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define, { RxzTabsItem } from './RxzTabs.define';
defineProps(define.rxzTabsProps);
const emits = defineEmits(define.rxzTabsEmits);

const handleClick = (item: RxzTabsItem) => {
  emits('update:modelValue', item);
};

</script>

<style lang="scss" scoped>
@import "./RxzTabs.scss";
</style>
