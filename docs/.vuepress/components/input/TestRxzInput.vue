<template>
  <rxz-input v-model="data"></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
