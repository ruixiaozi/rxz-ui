<template>
  <rxz-button ref="bt" @click="handleOpenSuccess()">打开Success</rxz-button>
  <rxz-button ref="bt" @click="handleOpenInfomartion()">打开Infomartion</rxz-button>
  <rxz-button ref="bt" @click="handleOpenWarning()">打开Warning</rxz-button>
  <rxz-button ref="bt" @click="handleOpenError()">打开Error</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpenSuccess() {
      this.$RxzMessageBox.success();
    },
    handleOpenInfomartion() {
      this.$RxzMessageBox.information();
    },
    handleOpenWarning() {
      this.$RxzMessageBox.warning();
    },
    handleOpenError() {
      this.$RxzMessageBox.error();
    },
  }
}
</script>
