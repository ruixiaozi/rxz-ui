export interface RxzMenuItemOption {
  name: string;
  key: string;
  icon?: string;
  active?: boolean;
  path?: string;
  // 仅对path是外部链接有效
  target?: '_blank' | '_parent' | '_self' | '_top';
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
    // vueRouter实例；如果当前组件需要在弹出层中渲染，弹出层不会挂载vue-router，需要传入
    router?: any;
  };

  declare $emit: {
  }

}
