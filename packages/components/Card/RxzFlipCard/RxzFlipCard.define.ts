/**
 * RxzFlipCard
 * @description: RxzFlipCard
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';

export default {
  rxzFlipCardProps: definePropsUtil({
    width: { type: String, default: '100px' },
    height: { type: String, default: '100px' },
    borderRadius: { type: String, default: 'none' },
    isFront: { type: Boolean, default: true },
  }),
  rxzFlipCardEmits: defineEmitsUtil({

  }),
};

