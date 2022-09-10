<template>
  <rxz-button ref="bt" @click="showInfomationTip()">打开信息Tips</rxz-button>
  <rxz-button ref="bt" @click="showSuccessTip()">打开成功Tips</rxz-button>
  <rxz-button ref="bt" @click="showWarningTip()">打开警告Tips</rxz-button>
  <rxz-button ref="bt" @click="showErrorTip()">打开失败Tips</rxz-button>
</template>
<script>
export default {
  methods: {
    showInfomationTip() {
      this.$RxzTips.information('信息');
    },
    showSuccessTip() {
      this.$RxzTips.success('成功');
    },
    showWarningTip() {
      this.$RxzTips.warning('警告');
    },
    showErrorTip() {
      this.$RxzTips.error('失败');
    },
  }
}
</script>
