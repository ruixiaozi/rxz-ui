<template>
  <rxz-pagination v-model="pagination"></rxz-pagination>
</template>

<script setup lang="ts">import { RxzPaginations } from '@/components';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();

const pagination = ref<RxzPaginations>({
  page: 6,
  pageSize: 10,
  total: 101,
})

</script>

<style lang="scss" scoped>

</style>
