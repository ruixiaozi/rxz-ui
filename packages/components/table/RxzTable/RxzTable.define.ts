/**
 * RxzTable
 * @description: RxzTable
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzPaginations } from '@/components/advance/RxzPagination';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';
import { RxzTableCellRenderConfig } from '../RxzTableCellRender';

export enum RXZ_TABLE_COLUMN_DIRECTION_ENUM {
  DESC='desc',
  ASC='asc',
}

export interface RxzTableFilter {
  sorts: {[key: string]: RXZ_TABLE_COLUMN_DIRECTION_ENUM};
  // 分页信息，见RxzPagination组件
  paginations?: RxzPaginations;
  // 过滤条件
  conditions: any;
}

export interface RxzColumn {
  key: string;
  label: string;
  // 启用排序
  sort?: boolean;
  // 单元渲染
  cellRender?: RxzTableCellRenderConfig;
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
  // 初始化过滤信息
  initFilter?: Partial<RxzTableFilter>;
  // 如果启用内部过滤，过滤条件变化，不会触发getData
  getData: (filter: RxzTableFilter) => Promise<RxzTableData> | RxzTableData;
}


export default {
  rxzTableProps: definePropsUtil({
    tableConfig: { type: Object as PropType<RxzTableConfig>, required: true },
  }),
  rxzTableEmits: defineEmitsUtil({

  }),
};

