/**
 * RxzPopoverTpl
 * @description: RxzPopoverTpl
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RXZ_CONTAINER_POSITION_E } from '@/components/layout/RxzContainer';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { uniqueId } from 'lodash';
import { PropType } from 'vue';

export enum RXZ_POPOVER_POS_E {
  topleft='topleft',
  top='top',
  topright='topright',
  lefttop='lefttop',
  left='left',
  leftbottom='leftbottom',
  bottomleft='bottomleft',
  bottom='bottom',
  bottomright='bottomright',
  righttop='righttop',
  right='right',
  rightbottom='rightbottom',
}

export enum RXZ_POPOVER_TYPE_E {
  WHITE='white',
  BLACK='black',
}

export const rxzPopoverPosMap = {
  [RXZ_POPOVER_POS_E.top]: RXZ_CONTAINER_POSITION_E.BOTTOM_CENTER,
  [RXZ_POPOVER_POS_E.topleft]: RXZ_CONTAINER_POSITION_E.BOTTOM_LEFT,
  [RXZ_POPOVER_POS_E.topright]: RXZ_CONTAINER_POSITION_E.BOTTOM_RIGHT,
  [RXZ_POPOVER_POS_E.left]: RXZ_CONTAINER_POSITION_E.CENTER_RIGHT,
  [RXZ_POPOVER_POS_E.lefttop]: RXZ_CONTAINER_POSITION_E.TOP_RIGHT,
  [RXZ_POPOVER_POS_E.leftbottom]: RXZ_CONTAINER_POSITION_E.BOTTOM_RIGHT,
  [RXZ_POPOVER_POS_E.bottom]: RXZ_CONTAINER_POSITION_E.TOP_CENTER,
  [RXZ_POPOVER_POS_E.bottomleft]: RXZ_CONTAINER_POSITION_E.TOP_LEFT,
  [RXZ_POPOVER_POS_E.bottomright]: RXZ_CONTAINER_POSITION_E.TOP_RIGHT,
  [RXZ_POPOVER_POS_E.right]: RXZ_CONTAINER_POSITION_E.CENTER_LEFT,
  [RXZ_POPOVER_POS_E.righttop]: RXZ_CONTAINER_POSITION_E.TOP_LEFT,
  [RXZ_POPOVER_POS_E.rightbottom]: RXZ_CONTAINER_POSITION_E.BOTTOM_LEFT,
};

export default {
  rxzPopoverTplProps: definePropsUtil({
    pos: { type: String as PropType<RXZ_POPOVER_POS_E>, default: () => RXZ_POPOVER_POS_E.top },
    type: { type: String as PropType<RXZ_POPOVER_TYPE_E>, default: () => RXZ_POPOVER_TYPE_E.WHITE },
    showArrow: { type: Boolean, default: () => true },
    radius: { type: Boolean, default: () => true },
    padding: { type: Boolean, default: () => true },
    popoverKey: { type: String, default: () => uniqueId() },
    isShow: { type: Boolean, default: () => false },
  }),
  rxzPopoverTplEmits: defineEmitsUtil({
    'showChange': null,
  }),
};

