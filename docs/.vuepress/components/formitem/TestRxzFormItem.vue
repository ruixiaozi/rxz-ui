<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { useRxzValidator } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const formConfig = {
  test: {
    validators: [useRxzValidator().required],
    default: '',
  },
};
const data = ref({
  test: ''
})
</script>

<style lang="scss" scoped>

</style>
