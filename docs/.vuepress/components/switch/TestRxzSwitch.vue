<template>
  <rxz-switch v-model="data"></rxz-switch>
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
