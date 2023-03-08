<template>
  <div>{{ i18n('custom_message') }}</div>
  <div>{{ i18n('max_custom', [10]) }}</div>
  <div>{{ i18n('custom_validator', { min: 0 }) }}</div>
</template>

<script setup lang="ts">
import { useRxzI18n } from '@/use';

defineProps<{

}>();
defineEmits<{

}>();
const { i18n } = useRxzI18n();
console.log(i18n('custom_message'));
</script>

<style lang="scss" scoped>

</style>
