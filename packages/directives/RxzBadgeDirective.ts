import { DirectiveBinding, h, ObjectDirective, render } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { isNumber as _isNumber, isString as _isString, uniqueId as _uniqueId } from 'lodash';
import { RxzBadge } from '@/components/Inner/RxzBadge';
@Injectable({
  provideIn: 'root',
})
export class RxzBadgeDirective implements ObjectDirective {


  private badges = new Map<string, HTMLElement>();

  name = 'rxz-badge';

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    if (!_isNumber(binding.value) && !_isString(binding.value)) {
      return;
    }
    this.rederBadge(el, binding.value);
  };

  updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    if ((!_isNumber(binding.value) && !_isString(binding.value))) {
      return;
    }
    this.rederBadge(el, binding.value);
  };

  beforeUnmount = (el: HTMLElement) => {
    const key = el.dataset.badgeKey;
    if (!key) {
      return;
    }
    this.badges.delete(key);
  };


  private rederBadge(el: HTMLElement, value: string | number) {
    // 如果没有设置postion，则需要设置为relative
    if (window) {
      const postion = window.getComputedStyle(el)?.position;
      if (postion === 'static') {
        el.style.position = 'relative';
      }
    }
    const elSize = this.getElementSize(el);
    let key = el.dataset.badgeKey;
    if (!key) {
      // 如果key不存在，则创建容器
      key = _uniqueId();
      el.dataset.badgeKey = key;
      const div = document.createElement('div');
      el.appendChild(div);
      this.badges.set(key, div);
    }
    // 获取容器
    const container = this.badges.get(key);
    if (!container) {
      return;
    }
    render(h(RxzBadge, {
      value,
      top: 0,
      left: elSize.width,
    }), container);
  }

  private getElementSize(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }

}
