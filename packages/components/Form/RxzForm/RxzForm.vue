<template>
  <!-- 作为子表单时，属于formValue -->
  <form class="rxz-form" :class="{
      'rxz-form-value': name !== null && name !== undefined
    }">
    <RxzFlex :direction="direction">
      <slot :formData="formData"></slot>
    </RxzFlex>
  </form>
</template>

<script setup lang="ts">
import { RxzFlex } from '@/components/layout';
import { defaultsDeep } from 'lodash';
import { defineProps, defineEmits, defineExpose, inject, Ref, provide, computed, watch } from 'vue';
import define, { RxzFormConfig } from './RxzForm.define';
import { useRxzRelativeValidatorWithinSetup } from '@/use';
import { useRxzFormLabelWidth } from './useRxzFormLabelWidth';
const props = defineProps(define.rxzFormProps);
const emits = defineEmits(define.rxzFormEmits);

// 注入父亲表单的data
const parentFormData = inject<Ref<any>>('formData');
// 注入父亲表单的config
const parentFormConfig = inject<Ref<any>>('formConfig');

// 实际的表单值
let formData = computed({
  get() {
    // 子表单
    if (props.name) {
      return parentFormData?.value?.[props.name];
    }
    return props.modelValue;
  },
  set(newV) {
    // 子表单的话，直接修改修改父data值进行响应
    if (props.name) {
      if (parentFormData?.value && typeof parentFormData?.value === 'object') {
        parentFormData.value = {
          ...parentFormData.value,
          [props.name]: newV,
        };
      }
    } else {
      emits('update:modelValue', newV);
    }
  },
});

// 根据config递归创建初始值
const createFormData = (rxzFormConfig: RxzFormConfig): any => {
  if (!rxzFormConfig) {
    return {};
  }
  const re = Object.entries(rxzFormConfig).reduce(
    (data, [key, value]) => {
      if (Array.isArray(value)) {
        data[key] = value.map((item) => item.default ?? null);
        return data;
      }
      if (value?.validators) {
        data[key] = value.default ?? null;
        return data;
      }
      data[key] = createFormData(value as RxzFormConfig);
      return data;
    },
      {} as any,
  );
  return re;
};

// 如果是父表单，根据config，合并formData值
if (!props.name) {
  watch(() => props.formConfig, () => {
    formData.value = defaultsDeep(formData.value, createFormData(props.formConfig));
  }, { immediate: true, deep: true });
}

let formConfig = computed(() => {
  if (props.name) {
    return parentFormConfig?.value?.[props.name];
  }
  return props.formConfig;
});

provide('formConfig', formConfig);
provide('formData', formData);

// 父校验器
const check = useRxzRelativeValidatorWithinSetup()
  .generateRelativeCheck();

defineExpose({
  check,
});

const { labelWidth, registerLabelWidth } = useRxzFormLabelWidth(props);

provide('labelWidth', labelWidth);
provide('registerLabelWidth', registerLabelWidth);

</script>

<style lang="scss" scoped>
@import "./RxzForm.scss";
</style>
