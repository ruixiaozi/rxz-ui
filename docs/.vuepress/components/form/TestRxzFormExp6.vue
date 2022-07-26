<template>
  <rxz-form :form-config="formConfig" v-model="data" labelWidth="100px">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>testLabel1111：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
    <rxz-form-item name="test1" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from '@/definition';
export default {
  data () {
    return {
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: '',
        },
        test1: {
          validators: [RxzValidators.required],
          default: 'test1',
        },
      },
      data: {}
    }
  },
}
</script>
