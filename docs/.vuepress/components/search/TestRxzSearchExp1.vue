<template>
  <rxz-search @search="handleSearch" ref="search"></rxz-search>
  <rxz-button @click="handleClick">搜索</rxz-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RxzSearch } from '@/components/advance'

defineProps<{

}>();
defineEmits<{

}>();
const handleSearch = (value: string) => {
  console.log(value);
}

const search = ref<InstanceType<typeof RxzSearch>>();

const handleClick = () => {
  search.value?.search();
}
</script>

<style lang="scss" scoped>

</style>
