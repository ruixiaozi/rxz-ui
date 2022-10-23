<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-select :options="options"></rxz-select>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from '@/definition';
export default {
  data () {
    return {
      options: [
        {
          label: "Option1",
          value: 1,
          key: "1",
        },
        {
          label: "Option2",
          value: 2,
          key: "2",
        },
      ],
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: {
            label: "Option2",
            value: 2,
            key: "2",
          },
        },
      },
      data: {}
    }
  },
}
</script>
