/**
 * RxzPagination
 * @description: RxzPagination
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export interface RxzPaginations {
  page: number;
  pageSize: number;
  total: number;
}

export enum RXZ_PAGINATION_PAGE_E {
  FAST_FORWARD='FAST_FORWARD',
  FAST_BACK='FAST_BACK',
}

export default {
  rxzPaginationProps: definePropsUtil({
    modelValue: { type: Object as PropType<RxzPaginations>, required: true },
    pageStart: { type: Number, default: 0 },
    displayStart: { type: Number, default: 1 },
  }),
  rxzPaginationEmits: defineEmitsUtil({
    'update:modelValue': null,
    'change': null,
  }),
};

