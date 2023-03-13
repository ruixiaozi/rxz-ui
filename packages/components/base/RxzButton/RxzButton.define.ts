/**
 * RxzButton
 * @description: RxzButton
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';
import { PropType } from 'vue';

export enum RXZ_BUTTON_TYPE_ENUM {
  default='default',
  primary='primary',
  success='success',
  information='information',
}

export enum RXZ_BUTTON_NATIVE_TYPE_ENUM {
  button='button',
  reset='reset',
  submit='submit',
}

export default {
  rxzButtonProps: definePropsUtil({
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    type: { type: String as PropType<RXZ_BUTTON_TYPE_ENUM>, default: RXZ_BUTTON_TYPE_ENUM.default },
    nativeType: { type: String as PropType<RXZ_BUTTON_NATIVE_TYPE_ENUM>, default: RXZ_BUTTON_NATIVE_TYPE_ENUM.button },
    width: { type: String, default: 'fit-content' },
    height: { type: String, default: 'auto' },
    padding: { type: String, default: '8px 16px' },
    borderRadius: { type: String, default: '5px' },
    bgColor: { type: String, default: 'unset' },
    hoverBgColor: { type: String, default: 'unset' },
    textColor: { type: String, default: 'unset' },
    hoverTextColor: { type: String, default: 'unset' },
    link: { type: Boolean, default: false },
    underline: { type: Boolean, default: true },
  }),
  rxzButtonEmits: defineEmitsUtil({

  }),
};

