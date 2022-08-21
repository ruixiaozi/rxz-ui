import { Component, VNode } from 'vue';

export interface RxzModalOptions {
  // 内容宽度
  width?: string;
  // 是否显示关闭按钮
  isShowClose?: boolean;
  // 是否允许点击遮罩关闭
  allowOuterClose?: boolean;
  // 标题，可以是字符串、组件、虚拟NODE
  title?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  titleCntProps?: any;
  // 内容，可以是字符串、组件、虚拟NODE
  content?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 打开关闭的过度效果
  transition?: 'opacity' | 'bounce';
  // 是否允许拖拽 (默认值为false)
  allowDrag?: boolean;
  // 窗口关闭回调
  onClose?: () => void;
}
