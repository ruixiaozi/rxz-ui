<template>
  <rxz-tip ref="tip" type='success'>success</rxz-tip>
  <br />
  <div>
    <rxz-button @click="handleShow">显示</rxz-button>
    <rxz-button @click="handleHidden">隐藏</rxz-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleShow() {
        this.$refs.tip.show();
      },
      handleHidden() {
        this.$refs.tip.hidden();
      }
    }
  };
</script>
