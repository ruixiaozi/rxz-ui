<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>
<script>
export default {
  methods: {
    handleOpen() {
      this.$RxzMessageBox.success({
        onConfirm: () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 2000)
          })
        }
      });
    },
  }
}
</script>
