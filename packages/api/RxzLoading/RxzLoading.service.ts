import { InjectService } from '@/common';
import { RxzLoadingTpl } from '@/components/Inner/RxzLoadingTpl';
import { Injectable } from '@tanbo/vue-di-plugin';
import { h, isVNode, cloneVNode } from 'vue';
import { RxzPopupService } from '../common/RxzPopup.service';
import { RxzLoadingOptions } from './RxzLoading.declare';
import { omit as _omit, isString as _isString } from 'lodash';

/**
 * Service: RxzLoadingService
 * @description: RxzLoading
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzLoadingService {

  @InjectService(RxzPopupService)
  private rxzPopupService?: RxzPopupService;

  private loadingInstanceKey?: string;

  show(options?: RxzLoadingOptions) {
    if (this.loadingInstanceKey) {
      // 已经显示loading，则直接返回
      return;
    }
    const vnode = this.createLoading(options);
    const key = this.rxzPopupService?.append(vnode);
    if (!key) {
      return;
    }
    this.loadingInstanceKey = key;
    document.body.style.overflow = 'hidden';
  }

  hide() {
    if (!this.loadingInstanceKey) {
      return;
    }
    this.rxzPopupService?.remove(this.loadingInstanceKey);
    this.loadingInstanceKey = undefined;
    document.body.style.overflow = 'auto';
  }

  private createLoading(options?: RxzLoadingOptions) {
    return h(
      RxzLoadingTpl as any,
      {
        ..._omit(options, 'content', 'contentCntProps'),
        zIndex: this.rxzPopupService?.zIndexNext() || 3000,
      },
      options?.content
        ? {
          default: () => {
            if (!options?.content) {
              return '';
            }
            if (_isString(options?.content)) {
              return options?.content;
            }
            if (isVNode(options?.content)) {
              return cloneVNode(options?.content);
            }
            return h(options?.content, options?.contentCntProps);
          },
        } : {},
    );
  }

}
