/**
 * RxzTip
 * @description: RxzTip
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';
import { PropType } from 'vue';

export enum RXZ_TIP_TYPE_ENUM {
  success='success',
  information='information',
  warning='warning',
  error='error',
}

export default {
  rxzTipProps: definePropsUtil({
    type: { type: String as PropType<RXZ_TIP_TYPE_ENUM>, default: RXZ_TIP_TYPE_ENUM.information },
    closable: { type: Boolean, default: false },
  }),
  rxzTipEmits: defineEmitsUtil({
    'show': null,
    'hidden': null,
  }),
};

