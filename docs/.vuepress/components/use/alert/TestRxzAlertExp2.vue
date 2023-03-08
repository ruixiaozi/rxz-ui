<template>
  <rxz-button ref="bt" @click="show()">打开Alert</rxz-button>
</template>

<script setup lang="ts">
import { useRxzAlert } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const show = () => {
  useRxzAlert().error('参数错误', 3000);
}
</script>

<style lang="scss" scoped>

</style>
