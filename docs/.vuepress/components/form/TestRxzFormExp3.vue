<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item>
      <rxz-label>Label1</rxz-label>
      <rxz-form name="inner">
        <rxz-form-item name="innerTest" :error-tip="{'required': 'error required'}">
          <rxz-label>innerLabel</rxz-label>
          <rxz-input></rxz-input>
        </rxz-form-item>
      </rxz-form>
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
  inner: {
    innerTest: {
      validators: [useRxzValidator().required],
      default: 'test1',
    },
  }
}
const data = ref({});
</script>

<style lang="scss" scoped>

</style>
