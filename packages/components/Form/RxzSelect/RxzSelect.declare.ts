export interface RxzSelectOptions {
  label: string;
  value: any;
  key: string | number;
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
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
