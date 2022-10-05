import { InjectService, isComponent } from '@/common';
import { POPOVER_TYPE_E, RxzPopperService } from '@/components/Inner/RxzPopper';
import { Injectable } from '@tanbo/vue-di-plugin';
import { RxzPopoverOptions } from './RxzPopover.declare';
import { uniqueId as _uniqueId } from 'lodash';

/**
 * Service: RxzPopoverService
 * 对rxzPopperService进一步封装，固定一些默认值
 * @description: RxzPopover
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzPopoverService {

  @InjectService(RxzPopperService)
  private rxzPopperService?: RxzPopperService;


  /**
   * 打开弹出层
   * @param options 弹出层参数
   * @returns key 弹出层的唯一标识
   */
  open(options: RxzPopoverOptions): string | undefined {
    const popperKey = options.key || _uniqueId();
    const el = isComponent(options.sourceEl) ? options.sourceEl.$el : options.sourceEl;
    const resKey = this.rxzPopperService?.createPopper(popperKey, el, {
      pos: options.pos,
      gap: options.gap,
      type: options.type ?? POPOVER_TYPE_E.WHITE,
      showArrow: options.showArrow ?? false,
      radius: options.radius ?? false,
      content: options.content,
      contentCntProps: options.contentCntProps,
      allowOuterClose: options.allowOuterClose,
      // 允许自动回收
      allowAutoRemove: true,
    });

    // 更新后显示弹出层
    if (resKey) {
      setTimeout(() => {
        this.rxzPopperService?.showPopper(resKey);
      });
    }
    return resKey;
  }

  // 关闭弹出层
  close(key?: string) {
    if (!key) {
      return;
    }
    this.rxzPopperService?.hiddenPopper(key);
  }

}
