<template>
  <rxz-button ref="bt" @click="handleOpen()">打开MessageBox</rxz-button>
</template>

<script setup lang="ts">
import { RxzButton } from '@/components/base/RxzButton';
import { useRxzMessageBox } from '@/use';
import { isVNode } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzMessageBox().success({
    content: RxzButton,
    contentCntProps: {
      onClick: () => {
        console.log(123);
      }
    },
    onConfirm: (content) => {
      if (isVNode(content)) {
        console.log(content);
      }
    }
  });
}
</script>

<style lang="scss" scoped>

</style>
