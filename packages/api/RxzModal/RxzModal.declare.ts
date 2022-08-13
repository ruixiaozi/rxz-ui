import { Component, VNode } from 'vue';

export interface RxzModalOptions {
  width?: string;
  isShowClose?: boolean;
  allowOuterClose?: boolean;
  title?: string | Component | VNode;
  titleCntProps?: any;
  content?: string | Component | VNode;
  contentCntProps?: any;
  transition?: 'opacity' | 'bounce';
  onClose?: () => void;
}
