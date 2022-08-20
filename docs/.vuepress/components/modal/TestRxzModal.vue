<template>
  <rxz-button ref="bt" @click="handleAdd()">打开Modal</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd() {
      this.$RxzModal.create({
        title: '我是标题111111111111111111111',
        content: '我是内容'
      });
    },
  }
}
</script>
