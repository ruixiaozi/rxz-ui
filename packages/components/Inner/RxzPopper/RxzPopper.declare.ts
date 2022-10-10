import { Component, VNode } from 'vue';

export enum POPOVER_POS_E {
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

export interface ElementPos {
  offsetLeft: number;
  offsetTop: number;
}

export interface ElementSize {
  width: number;
  height: number;
}

export enum POPOVER_TYPE_E {
  WHITE='white',
  BLACK='black',
}

export interface RxzPopperOptions {
  // 相对于宿主元素的位置
  pos: POPOVER_POS_E;
  // 与宿主元素的距离，默认4
  gap?: number;
  // 默认为POPOVER_TYPE_E.WHITE
  type?: POPOVER_TYPE_E;
  // 是否显示箭头，默认为true
  showArrow?: boolean;
  // 是否显示圆角，默认true
  radius?: boolean;
  // 是否开启内边距，默认true
  padding?: boolean;
  // 内容，可以是字符串、组件、虚拟NODE、虚拟dom数组
  content?: string | Component | VNode | VNode[];
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 是否允许点击外部关闭，默认true
  allowOuterClose?: boolean;
  // 允许自动回收，默认false
  allowAutoRemove?: boolean;
  // 事件处理器
  events?: { [key: string]: (...args: any[]) => any };
}
