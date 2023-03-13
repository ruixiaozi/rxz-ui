/**
 * useRxzModal
 * @description: RxzModal
 * @author: ruixiaozi
 * @since: 2.0.0
 */

import { RxzDialogTpl } from '@/components/template';
import { omit, uniqueId } from 'lodash';
import { Component, h, Ref, VNode } from 'vue';
import { useRxzPopup } from './useRxzPopup';
import { isComponent } from '@/utils';
import { useRxzSSR } from '@/use';

export interface RxzModalOptions {
  // 内容宽度
  width?: string;
  // 是否显示关闭按钮
  closable?: boolean;
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
  // 底部，可以是字符串、组件、虚拟NODE
  footer?: string | Component | VNode;
  // 组件的props（事件用onXxx）
  footerCntProps?: any;
  // 打开关闭的过度效果 (默认值为bounce，仅普通弹窗有效)
  transition?: 'opacity' | 'bounce';
  // 是否允许拖拽 (默认值为false)
  allowDrag?: boolean;
  // 是否为抽屉， (默认值为false)
  drawer?: boolean;
  // 窗口关闭回调，返回false，则不关闭
  onClose?: () => any;
}

const modalsMap: Map<string, VNode> = new Map<string, VNode>();

const { zIndexNext, removePopup, appendPopup } = useRxzPopup();

const { isSSR } = useRxzSSR();

function factorySlots(options?: RxzModalOptions) {
  const slots: any = {
    default: () => {
      if (options?.content && isComponent(options?.content)) {
        return h(options?.content, options?.contentCntProps);
      }
      return options?.content;
    },
    title: () => {
      if (options?.title && isComponent(options?.title)) {
        return h(options?.title, options?.titleCntProps);
      }
      return options?.title;
    },
    footer: () => {
      if (options?.footer && isComponent(options?.footer)) {
        return h(options?.footer, options?.footerCntProps);
      }
      return options?.footer;
    },
  };

  return slots;
}

function closeDialog(vnode: VNode) {
  const closeRes = (vnode as any).options?.onClose?.();
  // 仅返回false不关
  if (closeRes === false) {
    return;
  }
  const isShow: Ref<boolean> | undefined = vnode?.component?.exposed?.isShow;
  if (isShow) {
    isShow.value = false;
  }
}

/**
 * 关闭modal
 * @param key modal的key
 */
function close(key: string) {
  if (isSSR.value) {
    return;
  }
  const vnode = modalsMap.get(key);
  if (vnode) {
    closeDialog(vnode);
  }
}

function createModal(key: string, options?: RxzModalOptions) {
  if (isSSR.value) {
    return;
  }
  const params = omit(options, 'title', 'titleCntProps', 'content', 'contentCntProps');
  if (options?.drawer) {
    params.transition = 'move' as any;
  } else if (params.transition === ('move' as any)) {
    // 非抽屉不能使用move动画
    params.transition = 'bounce';
  }
  const vnode = h(
    RxzDialogTpl as any,
    {
      ...params,
      zIndex: zIndexNext(),
      onClose: () => {
        close(key);
      },
      onDestory: () => {
        modalsMap.delete(key);
        removePopup(key);
        if (modalsMap.size === 0) {
          document.body.style.overflow = 'auto';
        }
      },
    },
    factorySlots(options),
  );
  // 保存当前options
  (vnode as any).options = options;
  return vnode;
}

/**
 * 创建modal
 * @param options modal选项
 * @returns string modal的key
 */
function create(options?: RxzModalOptions): string | undefined {
  if (isSSR.value) {
    return;
  }
  const key = uniqueId();
  const vnode = createModal(key, options);
  if (!vnode) {
    return;
  }
  const resKey = appendPopup(vnode, key);
  if (!resKey) {
    return;
  }
  modalsMap.set(key, vnode);
  document.body.style.overflow = 'hidden';

  // 返回key
  return key;
}

/**
 * 关闭所有modal
 */
function closeAll() {
  modalsMap.forEach((item) => {
    closeDialog(item);
  });
}

export function useRxzModal() {
  return {
    create,
    close,
    closeAll,
  };
}
