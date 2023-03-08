<template>
   <rxz-button ref="bt" @click="handleOpen()">打开Modal</rxz-button>
</template>

<script setup lang="ts">
import { useRxzModal } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const handleOpen = () => {
  useRxzModal().create()
}
</script>

<style lang="scss" scoped>

</style>
