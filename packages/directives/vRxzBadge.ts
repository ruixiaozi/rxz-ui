/**
 * vRxzBadge
 * @description: RxzBadge
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { h, ObjectDirective, render } from 'vue';
import { useRxzSSR } from '@/use';
import { isNumber, isString, uniqueId } from 'lodash';
import { RxzBadgeTpl } from '@/components/template';

const badges = new Map<string, HTMLElement>();

const { isSSR } = useRxzSSR();

function getElementSize(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return { width: rect.width, height: rect.height };
}

function rederBadge(el: HTMLElement, value: string | number) {
  if (isSSR.value) {
    return;
  }
  // 如果没有设置postion，则需要设置为relative
  const postion = window.getComputedStyle(el)?.position;
  if (postion === 'static') {
    el.style.position = 'relative';
  }
  const elSize = getElementSize(el);
  let key = el.dataset.badgeKey;
  if (!key) {
    // 如果key不存在，则创建容器
    key = uniqueId();
    el.dataset.badgeKey = key;
    const div = document.createElement('div');
    el.appendChild(div);
    badges.set(key, div);
  }
  // 获取容器
  const container = badges.get(key);
  if (!container) {
    return;
  }
  render(h(RxzBadgeTpl, {
    value,
    top: 0,
    left: elSize.width,
  }), container);
}


export const vRxzBadge: ObjectDirective<HTMLElement, any> = {
  mounted(el, binding) {
    if (!isNumber(binding.value) && !isString(binding.value)) {
      return;
    }
    rederBadge(el, binding.value);
  },
  updated(el, binding) {
    if (!isNumber(binding.value) && !isString(binding.value)) {
      return;
    }
    rederBadge(el, binding.value);
  },
  beforeUnmount(el) {
    const key = el.dataset.badgeKey;
    if (!key) {
      return;
    }
    badges.delete(key);
  },
};
