<template>
  <div>
    <rxz-button type="primary" @click="visible = true">打开对话框</rxz-button>
    <rxz-dialog v-model:visible="visible">
      <template v-slot:title>
        消息
      </template>
      我是一个对话框
    </rxz-dialog>
  </div>
</template>
<script lang="ts">
export default {
  name: 'TestRxzDialog',
  data () {
    return {
      visible: false
    }
  },
};
</script>
