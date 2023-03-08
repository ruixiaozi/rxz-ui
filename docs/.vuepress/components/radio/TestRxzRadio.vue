<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
</template>

<script setup lang="ts">
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
const data = ref(items[0]);
</script>

<style lang="scss" scoped>

</style>
