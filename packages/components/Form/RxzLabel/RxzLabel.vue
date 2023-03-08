<template>
  <span
    class="rxz-label"
    :class="{ required: isRequired }"
    :style="{ width: labelWidthPx }"
  >
    <RxzIcon class="rxz-label-asterisk" :size="14" name="asterisk" :style="{ opacity: isRequired ? 1 : 0 }"></RxzIcon>
    <span
      class="rxz-label-content"
      ref="labelContentSpan"
      v-rxz-overflow="true"
    >
      <slot></slot>

    </span>
    <span class="rxz-label-colon" :style="{ opacity: showColon ? 1 : 0 }">
      {{ colon }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { RxzIcon } from '@/components/base';
import { vRxzOverflow } from '@/directives';
import { useRxzI18n, useRxzValidator } from '@/use';
import { uniqueId } from 'lodash';
import { defineProps, defineEmits, inject, ref, computed, Ref, onMounted, onUpdated } from 'vue';
import { RxzFormConfig } from '../RxzForm';
import { RxzLabelWidth, RxzRegisterLabelWidth } from '../RxzForm/useRxzFormLabelWidth';
import { RxzFormItemConfig } from '../RxzFormItem';
import define from './RxzLabel.define';
const props = defineProps(define.rxzLabelProps);
defineEmits(define.rxzLabelEmits);

// const formLabelWidth = '100px';
const labelWidthPx = inject<Ref<RxzLabelWidth>>('labelWidth');
const labelKey = uniqueId('__labelkey');

const parentFormConfig = inject<Ref<RxzFormConfig>>('formConfig');
const name = inject<Ref<string>>('name');
const formItemConfig = computed<RxzFormItemConfig>(() => parentFormConfig?.value?.[name?.value || ''] as RxzFormItemConfig);

const labelContentSpan = ref<HTMLSpanElement>();

const isRequired = computed(() => {
  if (props.required) {
    return true;
  }
  if (!formItemConfig?.value || !formItemConfig.value.validators) {
    return false;
  }

  const { validators } = formItemConfig.value;
  return validators.some((item) => item === useRxzValidator().required);
});

const colon = useRxzI18n().i18n('rxz_colon');

const registerLabelWidth = inject<RxzRegisterLabelWidth>('registerLabelWidth');

const updateWidth = () => {
  const currentWidht = `${(labelContentSpan.value?.offsetWidth || 0) + 35}px`;
  registerLabelWidth?.(labelKey, currentWidht);
};

onMounted(() => {
  updateWidth();
});

onUpdated(() => {
  updateWidth();
});

</script>

<style lang="scss" scoped>
@import "./RxzLabel.scss";
</style>
