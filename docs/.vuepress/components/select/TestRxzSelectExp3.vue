<template>
  <div>
    <rxz-select :options="options"></rxz-select>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
  {
    label: "Option1",
    value: 1,
    key: "1",
  },
  {
    label: "Option2",
    value: 2,
    key: "2",
  },
];
const data = ref(options[0]);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>
