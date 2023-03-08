/**
 * RxzBreadcrumb
 * @description: RxzBreadcrumb
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';
import { Router } from 'vue-router';

export interface RxzBreadcrumbItem {
  text: string;
  path?: string;
}

export default {
  rxzBreadcrumbProps: definePropsUtil({
    breadcrumbs: { type: Array as PropType<RxzBreadcrumbItem[]>, default: () => [] },
    // 路由实例，如果不传入，则走a连接跳转
    router: { type: Object as PropType<Router>, required: false },
  }),
  rxzBreadcrumbEmits: defineEmitsUtil({

  }),
};

