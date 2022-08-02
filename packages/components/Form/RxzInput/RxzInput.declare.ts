export class RxzInputDeclare {

  declare name: 'RxzInput';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    placeholder?: string;
    clear?: boolean;
    disabled?: boolean;
    width?: string;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
