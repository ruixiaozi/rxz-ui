<template>
  <rxz-button ref="bt" @click="handleAdd('opacity')">过度效果opacity</rxz-button>
  <rxz-button ref="bt" @click="handleAdd('bounce')">过度效果bounce</rxz-button>
</template>
<script>
export default {
  methods: {
    handleAdd(transition) {
      this.$RxzModal.create({
        title: '我是标题',
        content: '我是内容',
        transition
      });
    },
  }
}
</script>
