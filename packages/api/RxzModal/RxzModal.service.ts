import { h, render, VNode, cloneVNode, isVNode } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzDialog } from '@/components/Inner/RxzDialog';
import { InjectService } from '@/common';
import { RxzPopupService } from '../common/RxzPopup.service';
import { RxzModalOptions } from './RxzModal.declare';
import { RxzDialogCnt } from '@/components/Inner/RxzDialog/RxzDialog.component';
import { uniqueId as _uniqueId, isString as _isString, omit as _omit } from 'lodash';

@Injectable({
  provideIn: 'root',
})
export class RxzModalService {

  @InjectService(RxzPopupService)
  private rxzPopupService?: RxzPopupService;

  private modalsMap: Map<string, VNode> = new Map<string, VNode>();

  create(options?: RxzModalOptions) {
    const modalContainer = document.createElement('div');
    const key = _uniqueId();
    const vnode = h(
      RxzDialog as any,
      {
        ..._omit(options, 'title', 'titleCntProps', 'content', 'contentCntProps'),
        zIndex: this.rxzPopupService?.zIndexNext() || 3000,
        onClose: () => {
          options?.onClose?.();
          this.close(key);
        },
      },
      {
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
        title: () => {
          if (!options?.title) {
            return 'Modal';
          }
          if (_isString(options?.title)) {
            return options?.title;
          }
          if (isVNode(options?.title)) {
            return cloneVNode(options?.title);
          }
          return h(options?.title, options?.titleCntProps);
        },
      },
    );
    this.modalsMap.set(key, vnode);
    render(vnode, modalContainer);
    if (modalContainer.firstElementChild) {
      // 将dialog放入body
      document.body.appendChild(modalContainer.firstElementChild);
      document.body.style.overflow = 'hidden';
    }

    // 返回key
    return key;
  }

  close(key: string) {
    if (this.modalsMap.has(key)) {
      // 关闭dialog，并删除modalsMap中的引用
      const rxzDialogCnt = this.modalsMap.get(key)?.component?.proxy;
      rxzDialogCnt && ((rxzDialogCnt as RxzDialogCnt).isShow = false);
      this.modalsMap.delete(key);
    }
    if (this.modalsMap.size === 0) {
      document.body.style.overflow = 'auto';
    }
  }

  closeAll() {
    this.modalsMap.forEach((item) => {
      const rxzDialogCnt = item.component?.proxy;
      rxzDialogCnt && ((rxzDialogCnt as RxzDialogCnt).isShow = false);
    });
    this.modalsMap = new Map<string, VNode>();
  }


}
