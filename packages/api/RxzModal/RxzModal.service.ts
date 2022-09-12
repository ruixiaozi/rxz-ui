import { h, VNode, cloneVNode, isVNode } from 'vue';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzDialog } from '@/components/Inner/RxzDialog';
import { InjectService } from '@/common';
import { RxzPopupService } from '../common/RxzPopup.service';
import { RxzModalOptions } from './RxzModal.declare';
import { RxzDialogCnt } from '@/components/Inner/RxzDialog/RxzDialog.component';
import {
  uniqueId as _uniqueId,
  isString as _isString,
  omit as _omit,
  extend as _extend,
  isNil as _isNil,
} from 'lodash';

/**
 * Service: RxzModalService
 * @description: 全局模态框服务
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzModalService {

  @InjectService(RxzPopupService)
  private rxzPopupService?: RxzPopupService;

  private modalsMap: Map<string, VNode> = new Map<string, VNode>();

  /**
   * 创建modal
   * @param options modal选项
   * @returns string modal的key
   */
  create(options?: RxzModalOptions): string | undefined {
    const key = _uniqueId();
    const vnode = this.createModal(key, options);
    const resKey = this.rxzPopupService?.append(vnode, key);
    if (!resKey) {
      return;
    }
    this.modalsMap.set(key, vnode);
    document.body.style.overflow = 'hidden';

    // 返回key
    return key;
  }

  /**
   * 关闭modal
   * @param key modal的key
   */
  close(key: string) {
    const vnode = this.modalsMap.get(key);
    if (vnode) {
      this.closeDialog(vnode);
    }
  }

  /**
   * 关闭所有modal
   */
  closeAll() {
    this.modalsMap.forEach((item) => {
      this.closeDialog(item);
    });
  }

  private closeDialog(vnode: VNode) {
    const closeRes = (vnode as any).options?.onClose?.();
    // 仅返回false不关
    if (closeRes === false) {
      return;
    }
    const rxzDialogCnt = vnode.component?.proxy;
    rxzDialogCnt && ((rxzDialogCnt as RxzDialogCnt).isShow = false);
  }

  private createModal(key, options?: RxzModalOptions) {
    const params = _omit(options, 'title', 'titleCntProps', 'content', 'contentCntProps');
    if (options?.drawer) {
      params.transition = 'move' as any;
    } else if (params.transition === ('move' as any)) {
      // 非抽屉不能使用move动画
      params.transition = 'bounce';
    }
    const vnode = h(
      RxzDialog as any,
      {
        ...params,
        zIndex: this.rxzPopupService?.zIndexNext() || 3000,
        onClose: () => {
          this.close(key);
        },
        onDestory: () => {
          this.modalsMap.delete(key);
          this.rxzPopupService?.remove(key);
          if (this.modalsMap.size === 0) {
            document.body.style.overflow = 'auto';
          }
        },
      },
      this.factorySlots(options),
    );
    // 保存当前options
    (vnode as any).options = options;
    return vnode;
  }


  private factorySlots(options?: RxzModalOptions) {
    const slots: any = {};

    if (!_isNil(options?.content)) {
      _extend(slots, {
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
      });
    }

    if (!_isNil(options?.title)) {
      _extend(slots, {
        title: () => {
          if (!options?.title) {
            return '';
          }
          if (_isString(options?.title)) {
            return options?.title;
          }
          if (isVNode(options?.title)) {
            return cloneVNode(options?.title);
          }
          return h(options?.title, options?.titleCntProps);
        },
      });
    }

    if (!_isNil(options?.footer)) {
      _extend(slots, {
        footer: () => {
          if (!options?.footer) {
            return '';
          }
          if (_isString(options?.footer)) {
            return options?.footer;
          }
          if (isVNode(options?.footer)) {
            return cloneVNode(options?.footer);
          }
          return h(options?.footer, options?.footerCntProps);
        },
      });
    }

    return slots;
  }

}
