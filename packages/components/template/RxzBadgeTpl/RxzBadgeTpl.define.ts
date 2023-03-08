/**
 * RxzBadgeTpl
 * @description: RxzBadgeTpl
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';

export default {
  rxzBadgeTplProps: definePropsUtil({
    value: { type: [String, Number], required: true },
    maxNum: { type: Number, default: 99 },
    minNum: { type: Number, default: -99 },
    zIndex: { type: Number },
    top: { type: Number, default: 0 },
    left: { type: Number, default: 0 },
  }),
  rxzBadgeTplEmits: defineEmitsUtil({

  }),
};

