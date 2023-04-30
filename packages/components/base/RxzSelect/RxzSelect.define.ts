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
    modelValue: { },
    width: { type: String, default: '120px' },
    options: { type: Array as PropType<RxzSelectOption[]>, default: () => [] },
    disabled: { type: Boolean, default: false },
    isButton: { type: Boolean, default: true },
    placeholder: { type: String, default: '' },
    // 值绑定的属性，默认绑定整个选项对象
    bindProperty: { type: String as PropType<keyof RxzSelectOption> },
    clear: { type: Boolean, default: false },
  }),
  rxzSelectEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

