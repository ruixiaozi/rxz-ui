<template>
  <p>当前选择：{{ data }}</p>
  <rxz-checkbox :items="items" v-model="data"></rxz-checkbox>
  <p>--垂直排列--</p>
  <rxz-checkbox :items="items" v-model="data" :direction="RXZ_FLEX_DIRECTION_ENUM.vertical"></rxz-checkbox>
</template>

<script setup lang="ts">
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components';
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
</script>

<style lang="scss" scoped>

</style>
