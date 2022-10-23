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
        inner: {
          innerTest:  {
            validators: [RxzValidators.required],
            default: 'test1',
          },
        }
      },
      data: {}
    }
  },
}
</script>
