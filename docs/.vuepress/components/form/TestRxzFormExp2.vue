<template>
  <rxz-form :form-config="formConfig" v-model="data" :direction="RXZ_FLEX_DIRECTION_ENUM.horizontal" labelWidth="fit-content">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label1</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzForm, RXZ_FLEX_DIRECTION_ENUM } from '@/components';
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
