/**
 * RxzTabs
 * @description: RxzTabs
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export interface RxzTabsItem {
  name: string;
  key: string;
}

export default {
  rxzTabsProps: definePropsUtil({
    tabs: { type: Array as PropType<RxzTabsItem[]>, default: () => [] },
    modelValue: { type: Object as PropType<RxzTabsItem> },
  }),
  rxzTabsEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

