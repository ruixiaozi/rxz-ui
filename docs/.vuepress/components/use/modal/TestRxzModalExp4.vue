<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSub = () => {
  useRxzModal().create({
    title: '我是子modal',
    content: '我是子modal内容',
    width: '300px'
  })
}
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: RxzButton,
    contentCntProps: {
      onClick: () => {
        handleOpenSub();
      }
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
