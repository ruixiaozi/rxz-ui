/**
 * RxzTextarea
 * @description: RxzTextarea
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';

export default {
  rxzTextareaProps: definePropsUtil({
    modelValue: { type: String },
    disabled: { type: Boolean, default: false },
    minRow: { type: Number, default: 1 },
    maxRow: { type: Number, default: 10 },
    row: { type: Number, default: 2 },
    width: { type: String, default: '250px' },
    placeholder: { type: String, default: '' },
  }),
  rxzTextareaEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

