<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
import { RxzButton } from '@/components';
import { h } from '@vue/runtime-core';
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create({
        title: '我是标题',
        content: h(RxzButton, {
          onClick: () => {
            this.handleOpenSub();
          }
        }, '打开子modal')
      });
    },
    handleOpenSub() {
      this.$RxzModal.create({
        title: '我是子modal',
        content: h(RxzButton, {
          onClick: () => {
            this.$RxzModal.closeAll();
          }
        }, '关闭所有'),
        width: '300px'
      });
    }
  }
}
</script>
