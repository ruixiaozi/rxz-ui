<template>
  <div class="rxz-form-item">
    <div class="rxz-form-item-body">
      <slot></slot>
    </div>
    <div v-if="tip" class="error-tip" :style="{ paddingLeft: labelWidthPx }">
      <RxzIcon class="error-tip-icon" name="exclamation" :size="16"></RxzIcon>
      <span>{{ tip }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RxzIcon } from '@/components/base';
import { useRxzBindingWithinSetup, useRxzI18n, useRxzRelativeValidatorWithinSetup } from '@/use';
import { isString } from 'lodash';
import { Subject } from 'rxjs';
import { defineProps, defineEmits, Ref, inject, ref, watch, onBeforeUnmount, computed, toRef, provide } from 'vue';
import { RxzFormConfig } from '../RxzForm/RxzForm.define';
import { RxzLabelWidth } from '../RxzForm/useRxzFormLabelWidth';
import define, { RxzFormItemConfig } from './RxzFormItem.define';
const props = defineProps(define.rxzFormItemProps);
defineEmits(define.rxzFormItemEmits);

const labelWidthPx = inject<Ref<RxzLabelWidth> | undefined>('labelWidth', undefined);


// 注入父亲表单的data
const parentFormData = inject<Ref<any> | undefined>('formData', undefined);
const formData = computed({
  get() {
    return parentFormData?.value?.[props.name];
  },
  set(newV) {
    if (parentFormData?.value && typeof parentFormData?.value === 'object') {
      if (Array.isArray(parentFormData?.value)) {
        parentFormData.value[props.name as any] = newV;
        parentFormData.value = [...parentFormData.value];
      } else {
        parentFormData.value = {
          ...parentFormData.value,
          [props.name]: newV,
        };
      }
    }
  },
});
// 注册绑定值
useRxzBindingWithinSetup().registerBindingValue(formData);

// 注入父亲表单的config
const parentFormConfig = inject<Ref<RxzFormConfig> | undefined>('formConfig', undefined);
const formItemConfig = computed<RxzFormItemConfig>(() => parentFormConfig?.value?.[props.name] as RxzFormItemConfig);

// 提供name，label组件使用
provide('name', toRef(props, 'name'));

const onCheck = new Subject();
// 当check被触发时，调用格式化tip
const tip = ref('');
const formatTip = (checkRes: any) => {
  if (!props.name || !checkRes?.tip) {
    tip.value = '';
    return;
  }
  const { tip: _tip, param } = checkRes;
  if (isString(_tip)) {
    tip.value = _tip;
  } else {
    tip.value = _tip.isI18N
      ? useRxzI18n().i18n(_tip.label, param)
      : _tip.label;
  }
};
const $subscrition = onCheck.subscribe((checkRes) => {
  formatTip(checkRes);
});
const validators = computed(() => formItemConfig?.value?.validators);
// 子校验器
const check = useRxzRelativeValidatorWithinSetup()
  .generateRelativeCheck(
    toRef(props, 'name'),
    formData,
    validators,
    toRef(props, 'errorTip'),
    onCheck,
  );


// 数据变化就触发check
watch(formData, () => {
  check();
});


onBeforeUnmount(() => {
  $subscrition.unsubscribe();
});

</script>

<style lang="scss" scoped>
@import "./RxzFormItem.scss";
</style>
