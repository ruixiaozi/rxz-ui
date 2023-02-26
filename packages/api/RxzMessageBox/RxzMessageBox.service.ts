import { RxzButton } from '@/components/Base/RxzButton/index';
import { RxzIcon } from '@/components/Base/RxzIcon';
import { InjectService } from '@/common';
import { Injectable } from '@tanbo/vue-di-plugin';
import { h } from 'vue';
import { RxzModalOptions } from '../RxzModal/RxzModal.declare';
import { RxzModalService } from '../RxzModal/RxzModal.service';
import { RxzMessageBoxOptions } from './RxzMessageBox.declare';
import { isBoolean as _isBoolean, omit as _omit } from 'lodash';
import { RxzFlex } from '@/components';
import { RxzButtonCnt } from '@/components/Base/RxzButton/RxzButton.component';
import { getI18n } from '@/i18n';

/**
 * Service: RxzMessageBoxService
 * @description: RxzMessageBox
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzMessageBoxService {

  @InjectService(RxzModalService)
  private rxzModalService?: RxzModalService;

  private readonly MODEL_CONFIG: RxzModalOptions = {
    closable: true,
    allowOuterClose: true,
  };

  // 记录对应的modal在加载过程中的个数
  private modalMap = new Map<string, number>();

  success(options?: RxzMessageBoxOptions) {
    return this.createMessageBox('success', options);
  }

  information(options?: RxzMessageBoxOptions) {
    return this.createMessageBox('information', options);
  }

  warning(options?: RxzMessageBoxOptions) {
    return this.createMessageBox('warning', options);
  }

  error(options?: RxzMessageBoxOptions) {
    return this.createMessageBox('error', options);
  }

  private createMessageBox(
    type: 'success' | 'information' | 'warning' | 'error',
    options?: RxzMessageBoxOptions,
  ) {
    let key: any = null;
    const params = _omit(
      options,
      'title', 'onClose',
      'hiddenIcon', 'icon', 'iconColor',
      'hiddenConfirm', 'onConfirm', 'confirmText',
      'hiddenCancel', 'onCancel', 'cancelText',
    );
    key = this.rxzModalService?.create({
      ...this.MODEL_CONFIG,
      ...params,
      title: h(RxzFlex as any, {
        align: 'center',
        gutter: '0px',
      }, () => this.createTitle(type, options)),
      footer: h(RxzFlex as any, {
        justify: 'flex-end',
        gutter: '8px',
      }, () => this.createFooter(key, options)),
      onClose: () => {
        if (key && this.modalMap.get(key)) {
          // 还有在加载的状态， 返回false，不关闭弹窗
          return false;
        }
        // 只有真正要关闭，才调用onclose的回调
        return options?.onClose?.();
      },
    });

    return key;
  }

  private createTitle(
    type: 'success' | 'information' | 'warning' | 'error',
    options?: RxzMessageBoxOptions,
  ) {
    const title = [
      h(RxzIcon as any, {
        name: options?.icon || type,
        size: 28,
        type,
        style: {
          color: options?.iconColor || undefined,
          position: 'relative',
          left: '-5px',
        },
      }),
      h('span', {
        style: {
          letterSpacing: '1px',
        },
      }, options?.title || getI18n(`messagebox_${type}`)),
    ];

    if (options?.hiddenIcon) {
      title.splice(0, 1);
    }

    return title;
  }

  private createFooter(modalKey?: string, options?: RxzMessageBoxOptions) {
    const footer: any[] = [];

    // undefined 或者 为false
    if (!_isBoolean(options?.hiddenConfirm) || !options?.hiddenConfirm) {
      footer.push(this.createButton('primary', options?.confirmText || getI18n('button_confirm'), modalKey, options?.onConfirm));
    }

    // undefined 或者 为false
    if (!_isBoolean(options?.hiddenCancel) || !options?.hiddenCancel) {
      footer.push(this.createButton('default', options?.cancelText || getI18n('button_cancel'), modalKey, options?.onCancel));
    }

    return footer;
  }

  private createButton(type: string, text: string, modalKey?: string, onClick?: () => void) {
    const buttonVnode = h(RxzButton as any, {
      type,
      onClick: () => {
        let rxzButtonCnt: RxzButtonCnt;
        if (buttonVnode.component?.proxy) {
          rxzButtonCnt = buttonVnode.component?.proxy as RxzButtonCnt;
          rxzButtonCnt.isLoading = true;
        }
        // 设置当前modal为加载状态
        if (modalKey) {
          this.modalMap.set(modalKey, (this.modalMap.get(modalKey) || 0) + 1);
        }
        const clickRes = onClick?.();
        Promise.resolve(clickRes)
          .then(() => {
            if (modalKey) {
              // 下一次宏任务时，执行关闭，主要是为了finally能够执行
              setTimeout(() => this.rxzModalService?.close(modalKey));
            }
          })
          .catch(() => {
            // 异常状态不处理
          })
          .finally(() => {
            if (rxzButtonCnt) {
              rxzButtonCnt.isLoading = false;
            }
            if (modalKey) {
              this.modalMap.set(modalKey, (this.modalMap.get(modalKey) || 1) - 1);
            }
          });
      },
    }, () => text);
    return buttonVnode;
  }


}
