<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { useRxzLoading } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const { showLoading, hideLoading } = useRxzLoading();
const handleClick = () => {
  showLoading({
    bgColor: '#40e0d032',
    color: '#ff1493'
  });
  setTimeout(() => {
    hideLoading();
  }, 1000);
}
</script>

<style lang="scss" scoped>

</style>
