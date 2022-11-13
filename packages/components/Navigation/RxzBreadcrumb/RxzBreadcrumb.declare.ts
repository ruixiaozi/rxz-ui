export interface RxzBreadcrumbItem {
  text: string;
  path?: string;
}

export class RxzBreadcrumbDeclare {

  declare name: 'RxzBreadcrumb';

  declare $props: {
    breadcrumbs?: RxzBreadcrumbItem[];
    // vueRouter实例；如果当前组件需要在弹出层中渲染，弹出层不会挂载vue-router，需要传入
    router?: any;
  };

  declare $emit: {
  }

}
