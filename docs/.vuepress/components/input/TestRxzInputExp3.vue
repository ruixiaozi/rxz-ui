<template>
  <rxz-input v-model="data" disabled>
    <template v-slot:infront>
      <rxz-icon name="user"></rxz-icon>
    </template>
  </rxz-input>
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
