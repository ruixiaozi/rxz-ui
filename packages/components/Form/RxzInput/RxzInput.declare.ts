export class RxzInputDeclare {

  declare name: 'RxzInput';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
