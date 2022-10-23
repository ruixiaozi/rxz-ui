export interface RxzTabsItem {
  name: string;
  key: string;
}

export class RxzTabsDeclare {

  declare name: 'RxzTabs';

  declare $props: {
    tabs?: RxzTabsItem[];
    modelValue: any;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
