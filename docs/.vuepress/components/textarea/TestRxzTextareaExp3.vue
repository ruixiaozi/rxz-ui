<template>
  <div>
    <rxz-textarea></rxz-textarea>
    <p>输入：</p>
    <pre>{{ data }}</pre>
  </div>
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
