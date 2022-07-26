<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
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
      },
      data: {
        test: ''
      }
    }
  },
}
</script>
