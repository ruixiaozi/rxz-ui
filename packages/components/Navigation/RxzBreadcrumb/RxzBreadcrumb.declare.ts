export interface RxzBreadcrumbItem {
  text: string;
  path?: string;
}

export class RxzBreadcrumbDeclare {

  declare name: 'RxzBreadcrumb';

  declare $props: {
    breadcrumbs?: RxzBreadcrumbItem[];
  };

  declare $emit: {
  }

}
