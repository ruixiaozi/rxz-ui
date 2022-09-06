<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
import { RxzButton } from '@/components';
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create({
        title: '我是标题',
        content: RxzButton,
        drawer: true,
        contentCntProps: {
          onClick: () => {
            this.handleOpenSub();
          }
        }
      });
    },
    handleOpenSub() {
      this.$RxzModal.create({
        title: '我是子modal',
        content: '我是子modal内容',
        width: '300px',
        drawer: true,
      });
    }
  }
}
</script>
