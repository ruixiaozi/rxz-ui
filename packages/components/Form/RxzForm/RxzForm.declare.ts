import { RxzFormConfig, RxzLabelWidth } from './RxzFormInterFace';

export class RxzFormDeclare {

  declare name: 'RxzForm';

  declare $props: {
    // 表格配置
    formConfig: RxzFormConfig,
    // v-model绑定的值
    modelValue: any,
    labelWidth?: RxzLabelWidth;
  };

  // vscode error ignore
  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
