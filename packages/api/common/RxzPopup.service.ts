import { Injectable } from '@tanbo/vue-di-plugin';
import { uniqueId, debounce } from 'lodash';
import { h, render, VNode } from 'vue';

/**
 * Service: RxzPopupService
 * @description: 弹出层公共服务
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzPopupService {

  private zIndex = 3000;

  private container?: HTMLElement;

  private vnodeMap = new Map<string, VNode>();

  zIndexNext() {
    return this.zIndex++;
  }

  append(vnode: VNode, key?: string) {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'rxz-popup-wrap';
      document.body.appendChild(this.container);
    }
    // 渲染
    const vNodeKey = key || uniqueId();
    this.vnodeMap.set(vNodeKey, vnode);
    this.reRender();
    return vNodeKey;
  }

  remove(key: string) {
    this.vnodeMap.delete(key);
    this.reRender();
  }

  clear() {
    if (!this.container) {
      return;
    }
    this.vnodeMap.clear();
    render(null, this.container);
  }

  private reRender = debounce(() => {
    if (!this.container) {
      return;
    }
    render(h(
      'div',
      {
        class: ['rxz-popup-container'],
      },
      [...this.vnodeMap.values()],
    ), this.container);
  }, 0);

}
