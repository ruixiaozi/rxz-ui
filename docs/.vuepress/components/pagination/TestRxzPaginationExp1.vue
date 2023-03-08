<template>
  <rxz-pagination v-model="pagination" :pageStart="1"></rxz-pagination>
</template>

<script setup lang="ts">import { RxzPaginations } from '@/components';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();

const pagination = ref<RxzPaginations>({
  page: 2,
  pageSize: 10,
  total: 100,
})

</script>

<style lang="scss" scoped>

</style>
