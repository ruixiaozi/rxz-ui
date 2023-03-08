/**
 * RxzLoadingTpl
 * @description: RxzLoadingTpl
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';

export default {
  rxzLoadingTplProps: definePropsUtil({
    text: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: '#00000032',
    },
    color: {
      type: String,
      default: '#ffffff',
    },
    zIndex: {
      type: Number,
    },
    isGlobal: {
      type: Boolean,
      default: true,
    },
  }),
  rxzLoadingTplEmits: defineEmitsUtil({

  }),
};
