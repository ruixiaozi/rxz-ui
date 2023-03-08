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
  useRxzMessageBox().success({
    onConfirm: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(null);
        }, 1000)
      })
    }
  });
}
</script>

<style lang="scss" scoped>

</style>
