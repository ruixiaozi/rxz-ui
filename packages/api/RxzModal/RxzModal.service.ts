import { h, render, VNode } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzDialog } from '@/components/Base/RxzDialog';
import { InjectService } from '@/common';
import { RxzPopupService } from '../common/RxzPopup.service';
import { RxzModalOptions } from './RxzModal.declare';
import { RxzDialogCnt } from '@/components/Base/RxzDialog/RxzDialog.component';
import { uniqueId as _uniqueId } from 'lodash';

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
    const vnode = h(RxzDialog as any, {
      ...options,
      zIndex: this.rxzPopupService?.zIndexNext() || 3000,
      onClose: () => {
        options?.onClose?.();
        this.close(key);
      },
    });
    this.modalsMap.set(key, vnode);
    render(vnode, modalContainer);
    if (modalContainer.firstElementChild) {
      // 将dialog放入body
      document.body.appendChild(modalContainer.firstElementChild);
    }

    // 返回key
    return key;
  }

  close(key: string) {
    if (this.modalsMap.has(key)) {
      // 关闭dialog，并删除modalsMap中的引用
      (this.modalsMap.get(key)?.component?.proxy as RxzDialogCnt).isShow = false;
      this.modalsMap.delete(key);
    }
  }

  closeAll() {
    this.modalsMap.forEach((item) => {
      (item.component?.proxy as RxzDialogCnt).isShow = false;
    });
    this.modalsMap = new Map<string, VNode>();
  }

}
