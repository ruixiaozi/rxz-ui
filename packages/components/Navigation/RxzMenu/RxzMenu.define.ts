/**
 * RxzMenu
 * @description: RxzMenu
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';
import { Router } from 'vue-router';

export interface RxzMenuItemOption {
  name: string;
  key: string;
  icon?: string;
  active?: boolean;
  path?: string;
  // 仅对path是外部链接有效
  target?: '_blank' | '_parent' | '_self' | '_top';
  // onClick的优先级高于path
  onClick?: (...args: any[]) => any;
  children?: RxzMenuItemOption[];
  isFold?: boolean;
}

export enum RXZ_MENU_DIRECTION_E {
  vertical='vertical',
  horizontal='horizontal',
}

export enum RXZ_MENU_STYLE_E {
  inner='inner',
  popover='popover',
}

export default {
  rxzMenuProps: definePropsUtil({
    router: { type: Object as PropType<Router>, required: false },
    items: { type: Array as PropType<RxzMenuItemOption[]>, default: () => [] },
    active: { type: String, default: '' },
    direction: { type: String as PropType<RXZ_MENU_DIRECTION_E>, default: RXZ_MENU_DIRECTION_E.horizontal },
    childrenStyle: { type: String as PropType<RXZ_MENU_STYLE_E> },
    currentStyle: { type: String as PropType<RXZ_MENU_STYLE_E>, default: RXZ_MENU_STYLE_E.inner },
    level: { type: Number, default: 0 },
    isFold: { type: Boolean, default: false },
    popoverKey: { type: String, required: false },
    parentMouseMove: { type: Function, required: false },
  }),
  rxzMenuEmits: defineEmitsUtil({

  }),
};

