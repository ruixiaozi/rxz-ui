export class RxzSwitchDeclare {

  declare name: 'RxzSwitch';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    disabled?: boolean;
    onText?: string;
    offText?: string;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  };

}
