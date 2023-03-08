<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items"></rxz-checkbox>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const items = [
  {
    label: '选项A',
    value: 1,
  },
  {
    label: '选项B',
    value: 2,
  }
];
const data = ref([]);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>
