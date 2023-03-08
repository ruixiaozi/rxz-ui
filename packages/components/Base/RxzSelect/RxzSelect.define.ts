/**
 * RxzSelect
 * @description: RxzSelect
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzSelectOption } from '@/components/template/RxzSelectListTpl';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';


export default {
  rxzSelectProps: definePropsUtil({
    modelValue: { type: Object as PropType<RxzSelectOption> },
    width: { type: String, default: '120px' },
    options: { type: Array as PropType<RxzSelectOption[]>, default: () => [] },
    disabled: { type: Boolean, default: false },
    isButton: { type: Boolean, default: true },
  }),
  rxzSelectEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

