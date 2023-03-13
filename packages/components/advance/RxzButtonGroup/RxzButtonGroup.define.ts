/**
 * RxzButtonGroup
 * @description: RxzButtonGroup
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { PropType } from 'vue';
import { RXZ_BUTTON_TYPE_ENUM } from '@/components/base/RxzButton';
import { defineEmitsUtil, definePropsUtil } from '@/utils';

export interface RxzButtonGroupItem {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  type?: RXZ_BUTTON_TYPE_ENUM;
  width?: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  onClick?: (...args: any[]) => any;
}

export default {
  rxzButtonGroupProps: definePropsUtil({
    buttons: { type: Array as PropType<RxzButtonGroupItem[]>, default: () => [] },
    max: { type: Number, default: 3 },
    link: { type: Boolean, default: false },
    data: { type: Object },
  }),
  rxzButtonGroupEmits: defineEmitsUtil({

  }),
};

