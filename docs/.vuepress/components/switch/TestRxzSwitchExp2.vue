<template>
  <rxz-switch v-model="data" on-text="开启" off-text="关闭" disabled></rxz-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref(true);
</script>

<style lang="scss" scoped>

</style>
