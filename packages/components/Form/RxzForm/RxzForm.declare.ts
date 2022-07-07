import { RxzFormConfig, RxzLabelWidth } from './RxzFormInterFace';

export class RxzFormDeclare {

  declare name: 'RxzForm';

  declare $props: {
    // 表格配置
    formConfig?: RxzFormConfig,
    // v-model绑定的值
    modelValue?: any,
    name?: string,
    labelWidth?: RxzLabelWidth;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
