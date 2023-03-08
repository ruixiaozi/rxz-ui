/**
 * RxzIcon
 * @description: RxzIcon
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';
import { PropType } from 'vue';

export enum RXZ_ICON_TYPE_ENUM {
  default='default',
  success='success',
  information='information',
  warning='warning',
  error='error',
}

export default {
  rxzIconProps: definePropsUtil({
    name: { type: String, default: 'search' },
    size: { type: Number, default: 24 },
    spinner: { type: Boolean, default: false },
    step: { type: Number, default: 1 },
    rotate: { type: Number, default: 0 },
    type: { type: String as PropType<RXZ_ICON_TYPE_ENUM>, default: RXZ_ICON_TYPE_ENUM.default },
  }),
  rxzIconEmits: defineEmitsUtil({

  }),
};

