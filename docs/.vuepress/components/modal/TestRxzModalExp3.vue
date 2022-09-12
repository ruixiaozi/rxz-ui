<template>
  <rxz-button ref="bt" @click="handleOpen('opacity')">过度效果opacity</rxz-button>
  <rxz-button ref="bt" @click="handleOpen('bounce')">过度效果bounce</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen(transition) {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        transition
      });
    },
  }
}
</script>
