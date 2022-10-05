<template>
  <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzModal.create({
        title: '我是标题11111111111111111111111111111111111111111111111111',
        content: '我是内容',
        allowDrag: true,
      });
    },
  }
}
</script>
