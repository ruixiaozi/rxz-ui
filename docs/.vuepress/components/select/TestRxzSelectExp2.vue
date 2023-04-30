<template>
  <rxz-select v-model="data" :options="options" width="fit-content" :isButton="false"></rxz-select>
  <p>{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const options = [
  {
    label: "Option1",
    value: 1,
    key: "1",
  },
  {
    label: "Option2",
    value: 2,
    key: "2",
  },
];
const data = ref(options[0]);
</script>

<style lang="scss" scoped>

</style>
