import { Component, VNode } from 'vue';
export interface RxzLoadingOptions {
  // loading文本
  text?: string;
  // 内容，可以是字符串、组件、虚拟NODE；替换掉默认的loading
  content?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  contentCntProps?: any;
  // 遮罩背景颜色，（默认值 #00000032）
  bgColor?: string;
  // 内容文字颜色，（默认值 #ffffff）
  color?: string;
}
