export class RxzInputDeclare {

  declare name: 'RxzInput';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    placeholder?: string;
    clear?: boolean;
    disabled?: boolean;
    width?: string;
    capslock?: boolean;
    password?: boolean;
    paste?: boolean;
    copy?: boolean;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  };

}
