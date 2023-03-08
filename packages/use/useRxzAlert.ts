/**
 * useRxzAlert
 * @description: RxzAlert
 * @author: ruixiaozi
 * @since: 2.0.0
 */

import { RxzTip, RXZ_TIP_TYPE_ENUM } from '@/components/base/RxzTip';
import { omit } from 'lodash';
import { h, VNode } from 'vue';
import { useRxzPopup } from './useRxzPopup';

export interface RxzAlertOptions {
  type?: RXZ_TIP_TYPE_ENUM;
  content?: string;
  timeout?: number;
}

const { appendPopup, zIndexNext, removePopup } = useRxzPopup();

let currentAlert: [string, VNode] | undefined;

let timer: any;

const DEFAULT_TIME_OUT = 1000;

function createAlert(options?: RxzAlertOptions) {
  const params: any = omit(options, 'content');
  params.closable = true;
  return h(RxzTip as any, {
    ...params,
    style: {
      zIndex: zIndexNext(),
      position: 'fixed',
      right: '16px',
      top: '16px',
      width: 'fit-content',
    },
    onHidden: () => {
      // 清除定时器
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      const [key] = currentAlert || [];
      if (key) {
        removePopup(key);
        currentAlert = undefined;
      }
    },
  }, options?.content ? {
    default: () => options.content,
  } : {});
}

function open(options?: RxzAlertOptions) {
  const newVnode = createAlert(options);
  let [key] = currentAlert || [];
  key = appendPopup(newVnode, key);
  if (!key) {
    return;
  }
  currentAlert = [key, newVnode];
  // 先暂停已有的关闭计时器
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  timer = setTimeout(() => {
    const hidden: (() => void) | undefined = newVnode.component?.exposed?.hidden;
    if (hidden) {
      hidden();
    }
    timer = null;
  }, options?.timeout || DEFAULT_TIME_OUT);
}

/**
 * 成功提示
 * @param content 内容
 * @param timeout 延迟时间
 */
function success(content: string, timeout?: number) {
  open({
    type: RXZ_TIP_TYPE_ENUM.success,
    content,
    timeout,
  });
}

/**
 * 通知提示
 * @param content 内容
 * @param timeout 延迟时间
 */
function information(content: string, timeout?: number) {
  open({
    type: RXZ_TIP_TYPE_ENUM.information,
    content,
    timeout,
  });
}

/**
 * 警告提示
 * @param content 内容
 * @param timeout 延迟时间
 */
function warning(content: string, timeout?: number) {
  open({
    type: RXZ_TIP_TYPE_ENUM.warning,
    content,
    timeout,
  });
}

/**
 * 错误提示
 * @param content 内容
 * @param timeout 延迟时间
 */
function error(content: string, timeout?: number) {
  open({
    type: RXZ_TIP_TYPE_ENUM.error,
    content,
    timeout,
  });
}


export function useRxzAlert() {
  return {
    success,
    warning,
    error,
    information,
  };
}
