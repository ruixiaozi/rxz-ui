export interface RxzCheckboxItem {
  label: string;
  value: any;
}

export class RxzCheckboxDeclare {

  declare name: 'RxzCheckbox';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    items?: RxzCheckboxItem[];
    direction?: string;
    disabled?: boolean;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  };

}
