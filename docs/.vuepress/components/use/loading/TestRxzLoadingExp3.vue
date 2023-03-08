<template>
  <div>
    <rxz-button @click="handleClick">进入loading</rxz-button>
  </div>
</template>

<script setup lang="ts">
import { useRxzLoading } from '@/use';
import { h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const { showLoading, hideLoading } = useRxzLoading();
const handleClick = () => {
  showLoading({
    content: h('div', 'vnode Loading...')
  });
  setTimeout(() => {
    hideLoading();
  }, 1000);
}
</script>

<style lang="scss" scoped>

</style>
