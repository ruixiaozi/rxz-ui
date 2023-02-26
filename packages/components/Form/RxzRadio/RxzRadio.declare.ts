export interface RxzRadioItem {
  label: string;
  value: any;
}
export class RxzRadioDeclare {

  declare name: 'RxzRadio';

  declare $props: {
    // v-model绑定的值，如果在表单下，则无效
    modelValue?: any;
    items?: RxzRadioItem[];
    direction?: string;
    disabled?: boolean;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  };

}
