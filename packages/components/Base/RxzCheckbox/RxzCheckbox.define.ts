/**
 * RxzCheckbox
 * @description: RxzCheckbox
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components/layout';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export interface RxzCheckboxItem {
  label: string;
  value: any;
}

export default {
  rxzCheckboxProps: definePropsUtil({
    modelValue: { type: Array as PropType<RxzCheckboxItem[]> },
    items: { type: Array as PropType<RxzCheckboxItem[]>, default: () => ([]) },
    direction: { type: String as PropType<RXZ_FLEX_DIRECTION_ENUM>, default: RXZ_FLEX_DIRECTION_ENUM.horizontal },
    disabled: { type: Boolean, default: false },
  }),
  rxzCheckboxEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

