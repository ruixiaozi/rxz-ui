<template>
  <rxz-textarea v-model="data" :minRow="3" :maxRow="5" :row="3"></rxz-textarea>
  <p>输入：</p>
  <pre>{{ data }}</pre>
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
