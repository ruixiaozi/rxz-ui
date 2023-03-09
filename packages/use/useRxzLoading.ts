/**
 * useRxzLoading
 * @description: RxzLoading
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { omit } from 'lodash';
import { Component, h, VNode } from 'vue';
import { RxzLoadingTpl } from '../components/template';
import { useRxzPopup } from './useRxzPopup';
import { useRxzSSR } from './useRxzSSR';
import { isComponent } from '@/utils';

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

// 保存loading弹出层的唯一标识
let loadingInstanceKey: string | undefined;

const { zIndexNext, appendPopup, removePopup } = useRxzPopup();
const { isSSR } = useRxzSSR();

/**
 * 创建loading
 * @param options loading选项
 * @returns 虚拟node
 */
function createLoading(options?: RxzLoadingOptions) {
  if (isSSR.value) {
    return;
  }
  return h(
    RxzLoadingTpl,
    {
      ...omit(options, 'content', 'contentCntProps'),
      zIndex: zIndexNext(),
    },
    {
      default: () => {
        if (options?.content && isComponent(options?.content)) {
          return h(options.content, options?.contentCntProps);
        }
        return options?.content;
      },
    },
  );
}

/**
 * 显示loading
 * @param options loading选项
 */
function showLoading(options?: RxzLoadingOptions): void {
  if (isSSR.value || loadingInstanceKey) {
    // 已经显示loading，则直接返回
    return;
  }
  const vnode = createLoading(options);
  if (!vnode) {
    return;
  }
  const key = appendPopup(vnode);
  if (!key) {
    return;
  }
  loadingInstanceKey = key;
  document.body.style.overflow = 'hidden';
}

/**
 * 隐藏loading
 */
function hideLoading() {
  if (isSSR.value || !loadingInstanceKey) {
    return;
  }
  removePopup(loadingInstanceKey);
  loadingInstanceKey = undefined;
  document.body.style.overflow = 'auto';
}


export function useRxzLoading() {
  return {
    showLoading,
    hideLoading,
  };
}
