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
          label: 'max_custom'
        },
        customValidator: {
          isI18N: true,
          label: 'custom_validator'
        }
      },
      formConfig: {
        test: {
          validators: [RxzValidators.required, RxzValidators.max(10), this.customValidator(1)],
          default: 0,
        },
      },
      data: {
      }
    }
  },
  methods: {
    customValidator(min) {
      return (value) => {
        if (value < min) {
          return {
            customValidator: {
              min: min
            }
          }
        }
        return null;
      };
    }
  }
}
</script>
