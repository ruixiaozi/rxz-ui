/**
 * RxzSwitch
 * @description: RxzSwitch
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
export default {
  rxzSwitchProps: definePropsUtil({
    modelValue: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: false },
    onText: { type: String, default: '' },
    offText: { type: String, default: '' },
  }),
  rxzSwitchEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

