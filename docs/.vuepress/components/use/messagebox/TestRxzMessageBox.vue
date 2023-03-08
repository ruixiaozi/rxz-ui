<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>

<script setup lang="ts">
import { useRxzMessageBox } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzMessageBox().success();
}
</script>

<style lang="scss" scoped>

</style>
