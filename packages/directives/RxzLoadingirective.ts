import { DirectiveBinding, h, ObjectDirective, render } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzLoadingTpl } from '@/components/Inner/RxzLoadingTpl';
import { uniqueId as _uniqueId } from 'lodash';

@Injectable({
  provideIn: 'root',
})
export class RxzLoadingirective implements ObjectDirective {

  private loadingMap = new Map<string, HTMLElement>();

  name = 'rxz-loading';

  mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.createLoading(el, binding.value ?? true);
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>) => {
    this.createLoading(el, binding.value ?? true);
  }

  beforeUnmount = (el: HTMLElement) => {
    const key = el.dataset.loadingKey;
    if (!key) {
      return;
    }
    this.loadingMap.delete(key);
  }

  private createLoading(el: HTMLElement, isShow: boolean) {
    // 如果没有设置postion，则需要设置为relative
    if (window) {
      const postion = window.getComputedStyle(el)?.position;
      if (postion === 'static') {
        el.style.position = 'relative';
      }
    }
    let key = el.dataset.loadingKey;
    if (!key) {
      // 如果key不存在，则创建容器
      key = _uniqueId();
      el.dataset.loadingKey = key;
      const div = document.createElement('div');
      el.appendChild(div);
      this.loadingMap.set(key, div);
    }
    // 获取容器
    const container = this.loadingMap.get(key);
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

}
