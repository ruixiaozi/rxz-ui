import { isString as _isString, isEqual as _isEqual } from 'lodash';
import { Injectable } from '@tanbo/vue-di-plugin';
import { h, isVNode, cloneVNode, VNode } from 'vue';
import { RxzPopper } from './index';
import { ElementPos, ElementSize, RxzPopperOptions, POPOVER_POS_E } from './RxzPopper.declare';
import { debounceByKey, InjectService } from '@/common';
import { RxzPopupService } from '@/api/common/RxzPopup.service';
import { RxzPopperCnt } from './RxzPopper.component';

/**
 * Service: RxzPopperService
 * @description: RxzPopper
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzPopperService {

  // popper与host元素直接的间隔
  private readonly GAP = 4;

  // 三角形箭头的大小
  private readonly TRIANGLE_W = 4;

  // 回收超过30秒没有显示的popper
  private readonly AUTO_REMOVE_TIMEOUT = 30000;

  @InjectService(RxzPopupService)
  private rxzPopupService?: RxzPopupService;

  private popperMap = new Map<string, VNode>();

  constructor() {
    // 点击其他位置，关闭所有的弹出层
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      const popperKey = this.getPopperKey(target);
      [...this.popperMap.entries()].forEach(([key, vnode]) => {
        if (key !== popperKey && (vnode as any).allowOuterClose) {
          this.hiddenPopper(key);
        }
      });
    }, true);
    // 启动自动回收
    this.autoRemove();
  }

  createPopper(popperKey: string, el: HTMLElement, options: RxzPopperOptions) {
    let vnode: any = this.popperMap.get(popperKey);
    if (vnode) {
      // 判断参数是否相同，如果相同则直接返回对应的key
      if (_isEqual(vnode.popperHostEl, el) && _isEqual(vnode.popperOptions, options)) {
        // this.showPopper(popperKey);
        return popperKey;
      }
    }
    vnode = h(
      RxzPopper as any,
      {
        radius: options.radius,
        padding: options.padding,
        type: options.type,
        showArrow: options.showArrow,
        pos: options.pos,
        popperKey,
        style: {
          zIndex: this.rxzPopupService?.zIndexNext() || 3000,
          ...(this.transformPos(el, options.pos, options.showArrow, options.gap) || {}),
        },
        ...options.events,
      },
      {
        default: () => {
          if (!options.content) {
            return '';
          }
          if (_isString(options.content)) {
            return options.content;
          }
          if (isVNode(options.content)) {
            return cloneVNode(options.content);
          }
          if (Array.isArray(options.content) && options.content.every((item) => isVNode(item))) {
            return options.content.map((item) => cloneVNode(item));
          }
          return h(options.content, options.contentCntProps);
        },
      },
    );
    vnode.popperHostEl = el;
    vnode.popperOptions = options;
    vnode.allowOuterClose = options.allowOuterClose ?? true;
    vnode.allowAutoRemove = options.allowAutoRemove;
    vnode.lastUpdateTime = new Date().getTime();
    const resKey = this.rxzPopupService?.append(vnode, popperKey);
    if (!resKey) {
      return;
    }
    this.popperMap.set(resKey, vnode);

    return resKey;
  }

  showPopper(key: string) {
    this.changePopperState(key)(true);
  }

  hiddenPopper(key: string) {
    this.changePopperState(key)(false);
  }

  getComponent(key: string) {
    const vnode = this.popperMap.get(key);
    if (vnode?.component?.proxy) {
      return vnode.component.proxy as RxzPopperCnt;
    }
  }

  removePopper(key: string) {
    this.rxzPopupService?.remove(key);
    this.popperMap.delete(key);
  }

  private autoRemove() {
    // 每隔5秒，回收一次超过30秒未打开的弹出层
    setInterval(() => {
      const nowDate = new Date().getTime();
      [...this.popperMap.entries()].forEach(([key, vnode]) => {
        const rxzPopper = this.getComponent(key);
        if (rxzPopper) {
          const { lastUpdateTime, allowAutoRemove } = vnode as any;
          if (!rxzPopper.isShow && allowAutoRemove && lastUpdateTime && nowDate - lastUpdateTime > this.AUTO_REMOVE_TIMEOUT) {
            this.removePopper(key);
          }
        }
      });
    }, 5000);
  }

  // 防抖方法，颗粒度在单个指令进行防抖，防止快速改变popper的状态，出现闪动
  private changePopperState = debounceByKey((key: string, isShow: boolean) => {
    const vnode = this.popperMap.get(key);
    const rxzPopper = this.getComponent(key);
    if (rxzPopper) {
      if (rxzPopper.isShow !== isShow) {
        // 记录上次改变的时间
        (vnode as any).lastUpdateTime = new Date().getTime();
        rxzPopper.isShow = isShow;
      }
    }
  }, 10);

  getPopperKey(el: HTMLElement) {
    let key;
    let current: any = el;
    while (current) {
      if (current.dataset.rxzPopper) {
        key = current.dataset.rxzPopper;
      }
      current = current.parentElement;
    }
    return key;
  }

  transformPos(el: HTMLElement, pos: POPOVER_POS_E, showArrow?: boolean, gap = this.GAP) {
    const triangleW = showArrow === false ? 0 : this.TRIANGLE_W;
    const elPos = this.getElementPagePosition(el);
    const elSize = this.getElementSize(el);
    let res = {};
    switch (pos) {
      case POPOVER_POS_E.topleft:
        res = this.transformPosTopLeft(elPos, gap, triangleW);
        break;
      case POPOVER_POS_E.top:
        res = this.transformPosTop(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.topright:
        res = this.transformPosTopRight(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.lefttop:
        res = this.transformPosLeftTop(elPos, gap, triangleW);
        break;
      case POPOVER_POS_E.left:
        res = this.transformPosLeft(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.leftbottom:
        res = this.transformPosLeftBottom(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.bottomleft:
        res = this.transformPosBottomLeft(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.bottom:
        res = this.transformPosBottom(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.bottomright:
        res = this.transformPosBottomRight(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.righttop:
        res = this.transformPosRightTop(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.right:
        res = this.transformPosRight(elPos, elSize, gap, triangleW);
        break;
      case POPOVER_POS_E.rightbottom:
        res = this.transformPosRightBottom(elPos, elSize, gap, triangleW);
        break;
      default:
        // 保证pos的所有条件均有case处理，否则类型检查报错
        res = (() => {
          const neverV: never = pos; return neverV;
        })();
    }
    res = {
      ...res,
      position: elPos.position,
    };
    return res;
  }

  private getElementPagePosition(el: HTMLElement) {
    // position默认为绝对定位，当宿主元素的dom树结构中找到fixed定位，应该也跟随fixed定位
    let position = 'absolute';
    // 计算x坐标
    let actualLeft = el.offsetLeft;
    // 计算y坐标
    let actualTop = el.offsetTop;
    if (window.getComputedStyle(el)?.position === 'fixed') {
      position = 'fixed';
    }
    let current = el.offsetParent;
    while (current !== null) {
      if (window.getComputedStyle(current)?.position === 'fixed') {
        position = 'fixed';
      }
      actualLeft += (current as HTMLElement).offsetLeft + current.clientLeft;
      actualTop += (current as HTMLElement).offsetTop + current.clientTop;
      current = (current as HTMLElement).offsetParent;
    }
    // 返回结果
    return { offsetLeft: actualLeft, offsetTop: actualTop, position };
  }

  private getElementSize(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }

  private transformPosTopLeft(elPos: ElementPos, gap: number, triangleW: number) {
    return {
      top: '0px',
      left: `${elPos.offsetLeft}px`,
      // -1避免滚动条
      width: `${document.body.offsetWidth - elPos.offsetLeft - 1}px`,
      height: `${elPos.offsetTop - triangleW - gap}px`,
    };
  }

  private getMinW(elPos: ElementPos, elSize: ElementSize) {
    const leftW = elPos.offsetLeft;
    const rightW = document.body.offsetWidth - elSize.width - elPos.offsetLeft;
    return Math.min(leftW, rightW);
  }

  private getminH(elPos: ElementPos, elSize: ElementSize) {
    const topH = elPos.offsetTop;
    const bottomH = document.body.offsetHeight - elSize.height - elPos.offsetTop;
    return Math.min(topH, bottomH);
  }

  private transformPosTop(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    const minW = this.getMinW(elPos, elSize);
    return {
      top: '0px',
      left: `${elPos.offsetLeft - minW}px`,
      // -1避免滚动条
      width: `${(minW * 2) + elSize.width - 1}px`,
      height: `${elPos.offsetTop - triangleW - gap}px`,
    };
  }

  private transformPosTopRight(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    return {
      top: '0px',
      left: '0px',
      // -1避免滚动条
      width: `${elPos.offsetLeft + elSize.width - 1}px`,
      height: `${elPos.offsetTop - triangleW - gap}px`,
    };
  }

  private transformPosLeftTop(elPos: ElementPos, gap: number, triangleW: number) {
    return {
      top: `${elPos.offsetTop}px`,
      left: '0px',
      width: `${elPos.offsetLeft - triangleW - gap}px`,
      height: `${document.body.offsetHeight - elPos.offsetTop - 1}px`,
    };
  }

  private transformPosLeft(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    const minH = this.getminH(elPos, elSize);
    return {
      top: `${elPos.offsetTop - minH}px`,
      left: '0px',
      width: `${elPos.offsetLeft - triangleW - gap}px`,
      height: `${(minH * 2) + elSize.height - 1}px`,
    };
  }

  private transformPosLeftBottom(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    return {
      top: '0px',
      left: '0px',
      width: `${elPos.offsetLeft - triangleW - gap}px`,
      height: `${elPos.offsetTop + elSize.height - 1}px`,
    };
  }


  private transformPosBottomLeft(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    return {
      top: `${elPos.offsetTop + elSize.height + triangleW + gap}px`,
      left: `${elPos.offsetLeft}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - 1}px`,
      height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - triangleW - gap}px`,
    };
  }

  private transformPosBottom(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    const minW = this.getMinW(elPos, elSize);
    return {
      top: `${elSize.height + elPos.offsetTop + triangleW + gap}px`,
      left: `${elPos.offsetLeft - minW}px`,
      // -1避免滚动条
      width: `${(minW * 2) + elSize.width - 1}px`,
      height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - triangleW - gap}px`,
    };
  }

  private transformPosBottomRight(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    return {
      top: `${elPos.offsetTop + elSize.height + triangleW + gap}px`,
      left: '0px',
      width: `${elPos.offsetLeft + elSize.width - 1}px`,
      height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - triangleW - gap}px`,
    };
  }

  private transformPosRightTop(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    return {
      top: `${elPos.offsetTop}px`,
      left: `${elPos.offsetLeft + elSize.width + triangleW + gap}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - triangleW - gap - 1}px`,
      height: `${document.body.offsetHeight - elPos.offsetTop - 1}px`,
    };
  }

  private transformPosRight(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    const minH = this.getminH(elPos, elSize);
    return {
      top: `${elPos.offsetTop - minH}px`,
      left: `${elPos.offsetLeft + elSize.width + triangleW + gap}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - triangleW - gap - 1}px`,
      height: `${(minH * 2) + elSize.height - 1}px`,
    };
  }

  private transformPosRightBottom(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
    return {
      top: '0px',
      left: `${elPos.offsetLeft + elSize.width + triangleW + gap}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - triangleW - gap - 1}px`,
      height: `${elPos.offsetTop + elSize.height - 1}px`,
    };
  }

}
