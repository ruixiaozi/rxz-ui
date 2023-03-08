import { PropType } from 'vue';

/**
 * RxzDialogTpl
 * @description: RxzDialogTpl
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';

export type RxzDialogTransition = 'opacity' | 'bounce' | 'move';

export default {
  rxzDialogTplProps: definePropsUtil({
    zIndex: { type: Number, default: 3000 },
    width: { type: String, default: '400px' },
    closable: { type: Boolean, default: true },
    allowOuterClose: { type: Boolean, default: true },
    transition: { type: String as PropType<RxzDialogTransition>, default: 'bounce' },
    allowDrag: { type: Boolean, default: false },
    drawer: { type: Boolean, default: false },
  }),
  rxzDialogTplEmits: defineEmitsUtil({
    'close': null,
    'destory': null,
  }),
};

