<template>
  <rxz-button ref="bt" @click="handleOpen('opacity')">过度效果opacity</rxz-button>
  <rxz-button ref="bt" @click="handleOpen('bounce')">过度效果bounce</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = (transition: 'opacity' | 'bounce') => {
  useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    transition
  })
}
</script>

<style lang="scss" scoped>

</style>
