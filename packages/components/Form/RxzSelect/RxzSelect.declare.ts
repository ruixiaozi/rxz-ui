export interface RxzSelectOptions {
  label: string;
  value: any;
  key: string | number;
  onClick?: (...args: any[]) => any;
}

export class RxzSelectDeclare {

  declare name: 'RxzSelect';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    // 宽度，默认值120px
    width?: string;
    // 选项
    options?: RxzSelectOptions[];
    disabled?: boolean;
    // 是否为按钮，默认true
    isButton?: boolean;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
