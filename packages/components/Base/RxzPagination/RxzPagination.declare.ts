export interface RxzPaginations {
  page: number;
  pageSize: number;
  total: number;
}

export enum PAGE_E {
  FAST_FORWARD='FAST_FORWARD',
  FAST_BACK='FAST_BACK',
}

export class RxzPaginationDeclare {

  declare name: 'RxzPagination';

  declare $props: {
    pageStart?: number;
    displayStart?: number;
    // v-model绑定的值
    modelValue: RxzPaginations;
  };

  declare $emit: {
    (e: 'update:modelValue', ...args: any[]): any;
  }

}
