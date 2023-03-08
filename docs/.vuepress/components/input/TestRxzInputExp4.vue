<template>
  <rxz-input v-model="data">
    <template v-slot:infront>
      <rxz-icon name="user"></rxz-icon>
    </template>
    <template v-slot:inrear>
      <rxz-icon name="edit"></rxz-icon>
    </template>
  </rxz-input>
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
