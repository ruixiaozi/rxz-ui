<template>
  <rxz-countdown-button v-model="isStart" :seconds="10" @click="handleClick">
    <template v-slot:countdownValue>等待中</template>
    按钮
  </rxz-countdown-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const isStart = ref(true);
const handleClick = () => {
  console.log('click');
}
</script>

<style lang="scss" scoped>

</style>
