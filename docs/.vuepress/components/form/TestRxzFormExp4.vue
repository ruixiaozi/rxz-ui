<template>
  <rxz-form :form-config="formConfig" v-model="data" labelWidth="fit-content">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>testLabel</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm } from '@/components';
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
  test1: {
    validators: [useRxzValidator().required],
    default: 'test1',
  },
}
const data = ref({
  test: ''
});
</script>

<style lang="scss" scoped>

</style>
