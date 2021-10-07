<template>
  <div>
    <rxz-button type="primary" @click="visible = true">打开对话框</rxz-button>
    <rxz-dialog :visible.sync="visible">
      <template v-slot:title>
        消息
      </template>
      我是一个对话框
    </rxz-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible:false
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
