/**
 * RxzTableForm
 * @description: RxzTableForm
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzFormItemConfig } from '@/components/form';
import { RxzValidatorErrorTips } from '@/use';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { Component, PropType } from 'vue';


export interface RxzTableFormColumnConfig extends RxzFormItemConfig {
  // 表格列名称
  label: string;
  // formItem的默认插槽使用一个组件，如果为空，则默认显示当前formitem的值
  slotCnt?: Component,
  props?: any,
  errorTip?: RxzValidatorErrorTips,
}

export interface RxzTableFormRowConfig {
  [key: string]: RxzTableFormColumnConfig,
}

export default {
  rxzTableFormProps: definePropsUtil({
    modelValue: { type: Array, required: true },
    rowConfig: { type: Object as PropType<RxzTableFormRowConfig>, required: true },
    pageSize: { type: Number, default: 5 },
  }),
  rxzTableFormEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

