<template>
  <rxz-button ref="bt" @click="showTip()">打开Tips</rxz-button>
</template>
<script>
export default {
  methods: {
    showTip() {
      this.$RxzTips.error('参数错误');
    },
  }
}
</script>
