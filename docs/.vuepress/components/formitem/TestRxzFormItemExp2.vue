<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="errorTips">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
  <p>表单值：{{ data }}</p>
</template>

<script setup lang="ts">
import { RxzValidator, useRxzValidator } from '@/use';
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const customValidator = (min: number): RxzValidator => {
  return (value: any) => {
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

const formConfig = {
  test: {
    validators: [useRxzValidator().required, useRxzValidator().max(10), customValidator(1)],
    default: '',
  },
};
const data = ref({
  test: ''
});
const errorTips = {
  required: '不能为空',
  max: {
    isI18N: true,
    label: 'max_custom'
  },
  customValidator: {
    isI18N: true,
    label: 'custom_validator'
  }
}
</script>

<style lang="scss" scoped>

</style>
