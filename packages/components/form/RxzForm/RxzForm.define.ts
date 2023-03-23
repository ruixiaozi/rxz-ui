/**
 * RxzForm
 * @description: RxzForm
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';
import { RXZ_FLEX_DIRECTION_ENUM } from '@/components/layout';
import { RxzFormItemConfig } from '../RxzFormItem/RxzFormItem.define';
import { RxzLabelWidth } from './useRxzFormLabelWidth';


export interface RxzFormConfig {
  [key: string ]: RxzFormItemConfig | RxzFormItemConfig[] | RxzFormConfig | RxzFormConfig[];
}


export default {
  rxzFormProps: definePropsUtil({
    // default是auto，但是先继承父亲表单的labelwidth，具体见setup
    labelWidth: { type: String as PropType<RxzLabelWidth>, default: 'auto' },
    // 子表单对应的字段名称
    name: { type: [String, Number], default: '' },
    // 子表单formConfig无效
    formConfig: { type: Object as PropType<RxzFormConfig>, default: () => ({}) },
    // 表单数据，v-model绑定，绑定的值可以覆盖formConfig中初始默认值，子表单modelValue无效
    modelValue: { type: Object as PropType<any>, default: () => ({}) },
    direction: { type: String as PropType<RXZ_FLEX_DIRECTION_ENUM>, default: RXZ_FLEX_DIRECTION_ENUM.vertical },
  }),
  rxzFormEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

