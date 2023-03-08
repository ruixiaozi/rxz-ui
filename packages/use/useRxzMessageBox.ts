/**
 * useRxzMessageBox
 * @description: RxzMessageBox
 * @author: ruixiaozi
 * @since: 2.0.0
 */

import { RxzButton } from '@/components/base/RxzButton';
import { RxzIcon } from '@/components/base/RxzIcon';
import { RxzFlex } from '@/components/layout/RxzFlex';
import { isBoolean, omit } from 'lodash';
import { Component, h, Ref, VNode } from 'vue';
import { useRxzI18n } from './useRxzI18n';
import { RxzModalOptions, useRxzModal } from './useRxzModal';
import { useRxzSSR } from './useRxzSSR';

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

const MODEL_CONFIG: RxzModalOptions = {
  closable: true,
  allowOuterClose: true,
};

const modalMap = new Map<string, number>();

const { close, create } = useRxzModal();

const { i18n } = useRxzI18n();

const { isSSR } = useRxzSSR();

function createButton(type: string, text: string, modalKey?: string, onClick?: () => void) {
  const buttonVnode = h(RxzButton as any, {
    type,
    onClick: () => {
      const isLoading: Ref<boolean> | undefined = buttonVnode.component?.exposed?.isLoading;
      if (isLoading) {
        isLoading.value = true;
      }
      // 设置当前modal为加载状态
      if (modalKey) {
        modalMap.set(modalKey, (modalMap.get(modalKey) || 0) + 1);
      }
      const clickRes = onClick?.();
      Promise.resolve(clickRes)
        .then(() => {
          if (modalKey) {
            // 下一次宏任务时，执行关闭，主要是为了finally能够执行
            setTimeout(() => close(modalKey));
          }
        })
        .catch(() => {
          // 异常状态不处理
        })
        .finally(() => {
          if (isLoading) {
            isLoading.value = false;
          }
          if (modalKey) {
            modalMap.set(modalKey, (modalMap.get(modalKey) || 1) - 1);
          }
        });
    },
  }, () => text);
  return buttonVnode;
}

function createFooter(modalKey?: string, options?: RxzMessageBoxOptions) {
  const footer: any[] = [];

  // undefined 或者 为false
  if (!isBoolean(options?.hiddenConfirm) || !options?.hiddenConfirm) {
    footer.push(createButton('primary', options?.confirmText || i18n('button_confirm'), modalKey, options?.onConfirm));
  }

  // undefined 或者 为false
  if (!isBoolean(options?.hiddenCancel) || !options?.hiddenCancel) {
    footer.push(createButton('default', options?.cancelText || i18n('button_cancel'), modalKey, options?.onCancel));
  }

  return footer;
}

function createTitle(
  type: 'success' | 'information' | 'warning' | 'error',
  options?: RxzMessageBoxOptions,
) {
  const title = [
    h(RxzIcon as any, {
      name: options?.icon || type,
      size: 28,
      type,
      style: {
        color: options?.iconColor || undefined,
        position: 'relative',
        left: '-5px',
      },
    }),
    h('span', {
      style: {
        letterSpacing: '1px',
      },
    }, options?.title || i18n(`messagebox_${type}`)),
  ];

  if (options?.hiddenIcon) {
    title.splice(0, 1);
  }

  return title;
}

function createMessageBox(
  type: 'success' | 'information' | 'warning' | 'error',
  options?: RxzMessageBoxOptions,
) {
  if (isSSR.value) {
    return;
  }
  const params = omit(
    options,
    'title', 'onClose',
    'hiddenIcon', 'icon', 'iconColor',
    'hiddenConfirm', 'onConfirm', 'confirmText',
    'hiddenCancel', 'onCancel', 'cancelText',
  );
  const key = create({
    ...MODEL_CONFIG,
    ...params,
    title: h(RxzFlex as any, {
      align: 'center',
      gutter: '0px',
    }, () => createTitle(type, options)),
    footer: h(RxzFlex as any, {
      justify: 'flex-end',
      gutter: '8px',
    }, () => createFooter(key, options)),
    onClose: () => {
      if (key && modalMap.get(key)) {
        // 还有在加载的状态， 返回false，不关闭弹窗
        return false;
      }
      // 只有真正要关闭，才调用onclose的回调
      return options?.onClose?.();
    },
  });

  return key;
}

function success(options?: RxzMessageBoxOptions) {
  return createMessageBox('success', options);
}

function information(options?: RxzMessageBoxOptions) {
  return createMessageBox('information', options);
}

function warning(options?: RxzMessageBoxOptions) {
  return createMessageBox('warning', options);
}

function error(options?: RxzMessageBoxOptions) {
  return createMessageBox('error', options);
}

export function useRxzMessageBox() {
  return {
    success,
    information,
    warning,
    error,
  };
}
