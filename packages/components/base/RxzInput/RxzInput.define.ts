/**
 * RxzInput
 * @description: RxzInput
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';

export default {
  rxzInputProps: definePropsUtil({
    modelValue: { type: String },
    disabled: { type: Boolean, default: false },
    clear: { type: Boolean, default: false },
    width: { type: String, default: '250px' },
    capslock: { type: Boolean, default: false },
    password: { type: Boolean, default: false },
    paste: { type: Boolean, default: true },
    copy: { type: Boolean, default: true },
  }),
  rxzInputEmits: defineEmitsUtil({
    'update:modelValue': null,
    'copy': null,
    'paste': null,
    'blur': null,
  }),
};

