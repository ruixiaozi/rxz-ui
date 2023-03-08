/**
 * vRxzLoading
 * @description: RxzLoading
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { h, ObjectDirective, render } from 'vue';
import { useRxzSSR } from '@/use';
import { uniqueId } from 'lodash';
import { RxzLoadingTpl } from '@/components/template';

const loadingMap = new Map<string, HTMLElement>();

const { isSSR } = useRxzSSR();

function createLoading(el: HTMLElement, isShow: boolean) {
  if (isSSR.value) {
    return;
  }
  // 如果没有设置postion，则需要设置为relative
  const postion = window.getComputedStyle(el)?.position;
  if (postion === 'static') {
    el.style.position = 'relative';
  }
  let key = el.dataset.loadingKey;
  if (!key) {
    // 如果key不存在，则创建容器
    key = uniqueId();
    el.dataset.loadingKey = key;
    const div = document.createElement('div');
    el.appendChild(div);
    loadingMap.set(key, div);
  }
  // 获取容器
  const container = loadingMap.get(key);
  if (!container) {
    return;
  }
  if (isShow) {
    render(h(RxzLoadingTpl, {
      isGlobal: false,
    }), container);
    return;
  }
  render(null, container);
}

export const vRxzLoading: ObjectDirective<HTMLElement, boolean> = {
  mounted(el, binding) {
    createLoading(el, binding.value ?? true);
  },
  updated(el, binding) {
    createLoading(el, binding.value ?? true);
  },
  beforeUnmount(el) {
    const key = el.dataset.loadingKey;
    if (!key) {
      return;
    }
    loadingMap.delete(key);
  },
};
