import { Component, VNode } from 'vue';

export interface RxzMessageBoxOptions {
  // 内容宽度
  width?: string;
  // 是否显示关闭按钮
  closable?: boolean;
  // 是否允许点击遮罩关闭 （默认true）
  allowOuterClose?: boolean;
  // 标题，字符串
  title?: string ;
  // 是否隐藏标题图标（默认false）
  hiddenIcon?: boolean;
  // 自定义icon名称
  icon?: string;
  iconColor?: string;
  // 内容，可以是字符串、组件、虚拟NODE
  content?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 打开关闭的过度效果 (默认值为bounce)
  transition?: 'opacity' | 'bounce';
  // 是否允许拖拽 (默认值为false)
  allowDrag?: boolean;
  // 窗口关闭回调，返回false，则不关闭
  onClose?: () => any;
  // 确认按钮
  hiddenConfirm?: boolean;
  onConfirm?: () => void;
  confirmText?: string;
  // 取消按钮
  hiddenCancel?: boolean;
  onCancel?: () => void;
  cancelText?: string;
}
