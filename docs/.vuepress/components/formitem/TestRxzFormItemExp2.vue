<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="errorTips">
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
      errorTips: {
        required: '不能为空',
        max: {
          isI18N: true,
          label: 'test'
        }
      },
      formConfig: {
        test: {
          validators: [RxzValidators.required, RxzValidators.max(10)],
          default: 0,
        },
      },
      data: {
      }
    }
  },
  i18n: {
    messages: {
      zh: {
        test: '最大值为{0}'
      },
      en: {
        test: 'max value is {0}'
      },
    },
  }
}
</script>
