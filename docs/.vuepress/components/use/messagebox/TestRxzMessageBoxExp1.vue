<template>
  <rxz-button ref="bt" @click="handleOpenSuccess()">打开Success</rxz-button>
  <rxz-button ref="bt" @click="handleOpenInfomartion()">打开Infomartion</rxz-button>
  <rxz-button ref="bt" @click="handleOpenWarning()">打开Warning</rxz-button>
  <rxz-button ref="bt" @click="handleOpenError()">打开Error</rxz-button>
</template>

<script setup lang="ts">
import { useRxzMessageBox } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpenSuccess = () => {
  useRxzMessageBox().success();
}
const handleOpenInfomartion = () => {
  useRxzMessageBox().information();
}
const handleOpenWarning = () => {
  useRxzMessageBox().warning();
}
const handleOpenError = () => {
  useRxzMessageBox().error();
}
</script>

<style lang="scss" scoped>

</style>
