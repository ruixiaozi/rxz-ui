<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    allowDrag: true,
  })
}
</script>

<style lang="scss" scoped>

</style>
