import { InjectService } from '@/common';
import { RxzTip, TIP_TYPE_ENUM } from '@/components/Base/RxzTip';
import { Injectable } from '@tanbo/vue-di-plugin';
import { h, VNode } from 'vue';
import { RxzPopupService } from '../common/RxzPopup.service';
import { RxzTipsOptions } from './RxzTips.declare';
import { omit as _omit } from 'lodash';
import { RxzTipCnt } from '@/components/Base/RxzTip/RxzTip.component';

/**
 * Service: RxzTipsService
 * @description: RxzTips
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzTipsService {

  @InjectService(RxzPopupService)
  private rxzPopupService?: RxzPopupService;

  private currentTip?: [string, VNode];

  private timer?: any;

  private readonly DEFAULT_TIME_OUT = 1000;

  success(content: string, timeout?: number) {
    this.open({
      type: TIP_TYPE_ENUM.success,
      content,
      timeout,
    });
  }

  information(content: string, timeout?: number) {
    this.open({
      type: TIP_TYPE_ENUM.information,
      content,
      timeout,
    });
  }

  warning(content: string, timeout?: number) {
    this.open({
      type: TIP_TYPE_ENUM.warning,
      content,
      timeout,
    });
  }

  error(content: string, timeout?: number) {
    this.open({
      type: TIP_TYPE_ENUM.error,
      content,
      timeout,
    });
  }

  private open(options?: RxzTipsOptions) {
    const newVnode = this.createTip(options);
    let [key] = this.currentTip || [];
    key = this.rxzPopupService?.append(newVnode, key);
    if (!key) {
      return;
    }
    this.currentTip = [key, newVnode];
    // 先暂停已有的关闭计时器
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(() => {
      const rxzTipCnt = newVnode.component?.proxy;
      if (rxzTipCnt) {
        (rxzTipCnt as RxzTipCnt).hidden();
      }
      this.timer = null;
    }, options?.timeout || this.DEFAULT_TIME_OUT);
  }


  private createTip(options?: RxzTipsOptions) {
    const params: any = _omit(options, 'content');
    params.closable = true;
    return h(RxzTip, {
      ...params,
      style: {
        zIndex: this.rxzPopupService?.zIndexNext() || 3000,
        position: 'fixed',
        right: '16px',
        top: '16px',
        width: 'fit-content',
      },
      onHidden: () => {
        // 清除定时器
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        const [key] = this.currentTip || [];
        if (key) {
          this.rxzPopupService?.remove(key);
          this.currentTip = undefined;
        }
      },
    }, options?.content ? {
      default: () => options.content,
    } : {});
  }

}
