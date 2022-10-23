export interface RxzMenuItemOption {
  name: string;
  key: string;
  icon?: string;
  // 当前项的宽度，默认是fit-content
  width?: string;
  active?: boolean;
  path?: string;
  // onClick的优先级高于path
  onClick?: (...args: any[]) => any;
  children?: RxzMenuItemOption[];
  isFold?: boolean;
}


export class RxzMenuDeclare {

  declare name: 'RxzMenu';

  declare $props: {
    items?: RxzMenuItemOption[];
    active?: string;
    // 默认horizontal
    direction?: 'vertical' | 'horizontal';
    // 默认false
    isFold?: boolean;
  };

  declare $emit: {
  }

}
