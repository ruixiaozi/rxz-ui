<template>
  <rxz-button ref="bt" @click="showInfo()">打开信息Alert</rxz-button>
  <rxz-button ref="bt" @click="showSuccess()">打开成功Alert</rxz-button>
  <rxz-button ref="bt" @click="showWarn()">打开警告Alert</rxz-button>
  <rxz-button ref="bt" @click="showError()">打开错误Alert</rxz-button>
</template>

<script setup lang="ts">
import { useRxzAlert } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const showInfo = () => {
  useRxzAlert().information('信息');
}
const showSuccess = () => {
  useRxzAlert().success('成功');
}
const showWarn = () => {
  useRxzAlert().warning('警告');
}
const showError = () => {
  useRxzAlert().error('错误');
}
</script>

<style lang="scss" scoped>

</style>
