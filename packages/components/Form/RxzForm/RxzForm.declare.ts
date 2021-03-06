import { RxzErrorTip, Validator } from '@/definition';
import { RxzLabelWidth } from '../RxzLabel/RxzLabel.declare';


export interface RxzFormItemConfig {
  default?: any;
  validators: Validator[];
}

export interface RxzFormConfig {
  [key: string ]: RxzFormItemConfig | RxzFormConfig;
}

export type RxzCheckRes = {
  tip: RxzErrorTip;
  param: any;
} | null | { [key: string]: RxzCheckRes };

export type RxzCheck = () => RxzCheckRes;
export interface RxzChecks {
  [key: string]: RxzCheck;
}

export class RxzFormDeclare {

  declare name: 'RxzForm';

  declare $props: {
    // 表格配置
    formConfig?: RxzFormConfig,
    // v-model绑定的值
    modelValue?: any,
    // 子表单name
    name?: string,
    // 表单下labelWidht
    labelWidth?: RxzLabelWidth;
    // 表单下item的排列方式
    direction?: string;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}

