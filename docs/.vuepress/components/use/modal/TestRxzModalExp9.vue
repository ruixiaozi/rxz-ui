<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
  <rxz-button ref="bt" @click="handleOpenDrawer()">打开抽屉</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base';
import { RxzFlex } from '@/components/layout';
import { useRxzModal } from '@/use';
import { h } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenDrawer = () => {
  const key = useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    drawer: true,
    footer: h(RxzFlex as any, {
      justify: 'center',
      gutter: '8px',
    }, [h(RxzButton, {
      onClick: () => {
        if (key) {
          useRxzModal().close(key);
        }
      }
    }, {
      default: '关闭'
    })]),
  })
}
const handleOpen = () => {
  const key = useRxzModal().create({
    title: '我是标题',
    content: '我是内容',
    footer: h(RxzFlex as any, {
      justify: 'center',
      gutter: '8px',
    }, [h(RxzButton, {
      onClick: () => {
        if (key) {
          useRxzModal().close(key);
        }
      }
    }, {
      default: '关闭'
    })]),
  })
}
</script>

<style lang="scss" scoped>

</style>
