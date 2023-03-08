/**
 * RxzSelectListTpl
 * @description: RxzSelectListTpl
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export interface RxzSelectOption {
  label: string;
  value: any;
  key: string | number;
  onClick?: (...args: any[]) => any;
}

export default {
  rxzSelectListTplProps: definePropsUtil({
    options: { type: Array as PropType<RxzSelectOption[]>, default: () => [] },
    modelValue: { type: Object as PropType<RxzSelectOption> },
  }),
  rxzSelectListTplEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

