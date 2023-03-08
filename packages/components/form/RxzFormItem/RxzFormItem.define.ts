/**
 * RxzFormItem
 * @description: RxzFormItem
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzValidator, RxzValidatorErrorTips } from '@/use';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export interface RxzFormItemConfig {
  default?: any;
  validators: RxzValidator[];
}

export default {
  rxzFormItemProps: definePropsUtil({
    errorTip: { type: Object as PropType<RxzValidatorErrorTips>, default: () => ({}) },
    name: { type: [String, Number], default: '' },
  }),
  rxzFormItemEmits: defineEmitsUtil({

  }),
};

