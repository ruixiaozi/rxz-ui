<template>
  <rxz-breadcrumb :breadcrumbs="breadcrumbs" :router="router"></rxz-breadcrumb>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{

}>();
defineEmits<{

}>();
const breadcrumbs = [
  {
    text: '首页',
    path: '/'
  },
  {
    text: '组件',
    path: '/components/'
  },
  {
    text: '面包屑',
  },
];
const router = useRouter();
</script>

<style lang="scss" scoped>

</style>
