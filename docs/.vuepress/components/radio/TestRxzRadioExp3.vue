<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-radio :items="items"></rxz-radio>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from '@/definition';
export default {
  data () {
    return {
      items: [
        {
          label: '选项A',
          value: 1,
        },
        {
          label: '选项B',
          value: 2,
        }
      ],
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: {
            label: '选项A',
            value: 1,
          },
        },
      },
      data: {}
    }
  },
}
</script>
