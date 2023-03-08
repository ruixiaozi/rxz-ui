<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
  <p>--垂直排列--</p>
  <rxz-radio :items="items" v-model="data" :direction="RXZ_FLEX_DIRECTION_ENUM.vertical"></rxz-radio>
</template>

<script setup lang="ts">
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components/layout/RxzFlex';
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
