<template>
  <div>
    <rxz-input></rxz-input>
  </div>
  <p>输入：{{ data }}</p>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>
