/**
 * RxzLabel
 * @description: RxzLabel
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';


export default {
  rxzLabelProps: definePropsUtil({
    required: { type: Boolean, default: false },
    showColon: { type: Boolean, default: false },

  }),
  rxzLabelEmits: defineEmitsUtil({

  }),
};

