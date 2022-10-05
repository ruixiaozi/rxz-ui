import { POPOVER_TYPE_E, POPOVER_POS_E } from '@/components/Inner/RxzPopper';
import { Component, ComponentPublicInstance, VNode } from 'vue';

export { POPOVER_TYPE_E, POPOVER_POS_E } from '@/components/Inner/RxzPopper';

export interface RxzPopoverOptions {
  // 宿主元素，用于确定弹出层位置
  sourceEl: Element | ComponentPublicInstance;
  // 相对于宿主元素的位置
  pos: POPOVER_POS_E;
  // 唯一标识（建议用UUID，或者第一次创建不传入），相同的key，显示和隐藏复用
  key?: string;
  // 是否显示箭头
  showArrow?: boolean;
  // 弹出层与宿主元素的距离，默认为0
  gap?: number;
  // 弹出层类型，默认POPOVER_TYPE_E.WHITE
  type?: POPOVER_TYPE_E;
  // 是否开启圆角，默认false
  radius?: boolean;
  // 内容，可以是字符串、组件、虚拟NODE、虚拟dom数组
  content?: string | Component | VNode | VNode[];
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 是否允许点击外部关闭，默认true
  allowOuterClose?: boolean;
}
