<template>
  <div>
    <rxz-switch></rxz-switch>
  </div>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref(true);
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>
