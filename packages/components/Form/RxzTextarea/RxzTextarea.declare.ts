export class RxzTextareaDeclare {

  declare name: 'RxzTextarea';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    disabled?: boolean;
    minRow?: number;
    maxRow?: number;
    row?: number;
    width?: string;
    placeholder?: string;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  };

}
