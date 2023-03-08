/**
 * RxzCountdownButton
 * @description: RxzCountdownButton
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RXZ_BUTTON_TYPE_ENUM } from '@/components/base/RxzButton';
import { defineEmitsUtil, definePropsUtil } from '@/utils';
import { PropType } from 'vue';

export default {
  rxzCountdownButtonProps: definePropsUtil({
    modelValue: { type: Boolean, default: false },
    seconds: { type: Number, default: 60 },
    type: { type: String as PropType<RXZ_BUTTON_TYPE_ENUM>, default: RXZ_BUTTON_TYPE_ENUM.primary },
  }),
  rxzCountdownButtonEmits: defineEmitsUtil({
    'update:modelValue': null,
  }),
};

