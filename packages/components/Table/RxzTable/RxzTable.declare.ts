import { RxzPaginations } from '@/components/Base/RxzPagination';

export enum COLUMN_DIRECTION_ENUM {
  DESC='desc',
  ASC='asc',
}

export interface RxzTableFilter {
  sorts: {[key: string]: COLUMN_DIRECTION_ENUM};
  // 分页信息，见RxzPagination组件
  paginations?: RxzPaginations;
}

export interface RxzColumn {
  key: string;
  label: string;
  // 启用排序
  sort?: boolean;
}

export interface RxzTableData {
  total: number;
  datas: any[];
}

export interface RxzTableConfig {
  columns: RxzColumn[];
  // 启用内部过滤、分页，常用于前端过滤
  innerFilter?: boolean;
  // 禁用自带loading
  disableLoading?: boolean;
  // 如果不存在该属性则不开启分页
  paginations?: {
    pageSize: number;
  };
  // 如果启用内部过滤，过滤条件变化，不会触发getData
  getData: (filter: RxzTableFilter) => Promise<RxzTableData> | RxzTableData;
}

export class RxzTableDeclare {

  declare name: 'RxzTable';

  declare $props: {
    tableConfig: RxzTableConfig;
  };

  declare $emit: {
  };

}
