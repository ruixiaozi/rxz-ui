/**
 * RxzRadio
 * @description: RxzRadio
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components/layout/RxzFlex';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export interface RxzRadioItem {
  label: string;
  value: any;
}

export default {
  rxzRadioProps: definePropsUtil({
    modelValue: { type: Object as PropType<RxzRadioItem> },
    items: { type: Array as PropType<RxzRadioItem[]>, default: () => ([]) },
    direction: { type: String as PropType<RXZ_FLEX_DIRECTION_ENUM>, default: RXZ_FLEX_DIRECTION_ENUM.horizontal },
    disabled: { type: Boolean, default: false },
  }),
  rxzRadioEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

