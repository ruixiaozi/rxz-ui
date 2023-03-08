/**
 * RxzFlex
 * @description: RxzFlex
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';
import { PropType } from 'vue';

export enum RXZ_FLEX_DIRECTION_ENUM {
  vertical='vertical',
  horizontal='horizontal',
}

export enum RXZ_FLEX_JUST_ALIGN_ENUM {
  start='flex-start',
  end='flex-end',
  center='center',
}


export default {
  rxzFlexProps: definePropsUtil({
    direction: { type: String as PropType<RXZ_FLEX_DIRECTION_ENUM>, default: RXZ_FLEX_DIRECTION_ENUM.horizontal },
    gutter: { type: String, default: '0px' },
    align: { type: String as PropType<RXZ_FLEX_JUST_ALIGN_ENUM>, default: RXZ_FLEX_JUST_ALIGN_ENUM.start },
    justify: { type: String as PropType<RXZ_FLEX_JUST_ALIGN_ENUM>, default: RXZ_FLEX_JUST_ALIGN_ENUM.start },
  }),
  rxzFlexEmits: defineEmitsUtil({

  }),
};

