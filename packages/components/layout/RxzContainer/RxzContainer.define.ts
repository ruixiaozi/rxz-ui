/**
 * RxzContainer
 * @description: RxzContainer
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { defineEmitsUtil, definePropsUtil } from '@/utils';
import { PropType } from 'vue';

export enum RXZ_CONTAINER_POSITION_E {
  TOP_LEFT='TOP_LEFT',
  TOP_CENTER='TOP_CENTER',
  TOP_RIGHT='TOP_RIGHT',
  CENTER_LEFT='CENTER_LEFT',
  CENTER='CENTER_CENTER',
  CENTER_RIGHT='CENTER_RIGHT',
  BOTTOM_LEFT='BOTTOM_LEFT',
  BOTTOM_CENTER='BOTTOM_CENTER',
  BOTTOM_RIGHT='BOTTOM_RIGHT',
}

export enum RXZ_CONTAINER_SLOT_E {
  topleft='topleft',
  topcenter='topcenter',
  topright='topright',
  centerleft='centerleft',
  center='center',
  centerright='centerright',
  bottomleft='bottomleft',
  bottomcenter='bottomcenter',
  bottomright='bottomright',
}

export default {
  rxzContainerProps: definePropsUtil({
    position: { type: String as PropType<RXZ_CONTAINER_POSITION_E>, default: RXZ_CONTAINER_POSITION_E.CENTER },
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: 0 },
    // 是否允许内容溢出边界
    allowOverflow: { type: Boolean, default: false },
    width: { type: String },
    height: { type: String },

  }),
  rxzContainerEmits: defineEmitsUtil({
    'overflow': null,
    'resize': null,
  }),
};

