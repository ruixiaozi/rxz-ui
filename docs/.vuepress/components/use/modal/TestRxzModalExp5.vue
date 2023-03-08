<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { useRxzModal } from '@/use';
import { h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSub = () => {
  useRxzModal().create({
    title: '我是子modal',
    content: h(RxzButton, {
      onClick: () => {
        useRxzModal().closeAll();
      }
    }, '关闭所有'),
    width: '300px'
  })
}
const handleOpen = () => {
  useRxzModal().create({
    title: '我是标题',
    content: h(RxzButton, {
      onClick: () => {
        handleOpenSub();
      }
    }, '打开子modal')
  })
}
</script>

<style lang="scss" scoped>

</style>
