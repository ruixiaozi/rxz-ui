import { DIRECTION_ENUM, Validator } from '@/definition';
import { RxzLabelWidth } from '../RxzLabel/RxzLabel.declare';


export interface RxzFormItemConfig {
  default?: any;
  validators: Validator[];
}

export interface RxzFormConfig {
  [key: string ]: RxzFormItemConfig | RxzFormConfig;
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
    direction?: DIRECTION_ENUM;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}

