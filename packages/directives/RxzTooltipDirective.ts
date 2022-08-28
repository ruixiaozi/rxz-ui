import { RxzPopperCnt } from '../components/Inner/RxzPopper/RxzPopper.component';
import { RxzPopper } from '../components/Inner/RxzPopper/index';
import { DirectiveBinding, h, ObjectDirective, VNode } from 'vue';
import { InjectService } from '@/common';
import { RxzPopupService } from '@/api/common/RxzPopup.service';
import { debounce as _debounce, uniqueId as _uniqueId } from 'lodash';
import { Injectable } from '@tanbo/vue-di-plugin';

export enum RxzToolTipPos {
  topleft='topleft',
  top='top',
  topright='topright',
  lefttop='lefttop',
  left='left',
  leftbottom='leftbottom',
  bottomleft='bottomleft',
  bottom='bottom',
  bottomright='bottomright',
  righttop='righttop',
  right='right',
  rightbottom='rightbottom',
}

interface ElementPos {
  offsetLeft: number;
  offsetTop: number;
}

interface ElementSize {
  width: number;
  height: number;
}

interface DirectiveParam {
  el: HTMLElement;
  binding: DirectiveBinding<any>;
  sourceVnode: VNode;
}

@Injectable({
  provideIn: 'root',
})
export class RxzTooltipDirective implements ObjectDirective {

  @InjectService(RxzPopupService)
  private rxzPopupService?: RxzPopupService;

  private toolTips = new Map<string, VNode>();

  private previousParam = new Map<string, DirectiveParam>();

  // tip与host元素直接的间隔
  private readonly GAP = 4;

  // 三角形箭头的大小
  private readonly TRIANGLE_W = 6;

  name = 'rxz-tooltip';

  // 值为提示的内容，如果没有，则直接将其子结点作为提示内容
  // 参数指明其位置()
  mounted = (el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) => {
    const pos: RxzToolTipPos = binding.arg as RxzToolTipPos || RxzToolTipPos.top;
    const zIndex = this.rxzPopupService?.zIndexNext() || 3000;
    const isClick = binding.modifiers?.['click'];
    const key = _uniqueId();
    const content = binding.value || sourceVnode.children || '';
    const vnode = this.createToolTip(el, pos, content, key, zIndex, isClick);
    const resKey = this.rxzPopupService?.append(vnode, key);
    if (!resKey) {
      return;
    }
    this.toolTips.set(key, vnode);
    el.dataset.tooltipKey = key;

    if (isClick) {
      el.addEventListener('click', () => this.handleClick(key));
    } else {
      el.addEventListener('mouseenter', () => this.handleMouseMove(key)('enter'), false);
      el.addEventListener('mouseleave', () => this.handleMouseMove(key)('leave'), false);
    }
  }

  updated = (el: HTMLElement, binding: DirectiveBinding<any>, sourceVnode: VNode) => {
    const key = el.dataset.tooltipKey;
    if (!key) {
      // 如果没有，重新创建一个tip
      this.mounted(el, binding, sourceVnode);
      return;
    }
    // 保存当前的参数，在下一次显示的使用用于更新提示框
    this.previousParam.set(key, { el, binding, sourceVnode });
  }

  beforeUnmount = (el: HTMLElement) => {
    const key = el.dataset.tooltipKey;
    if (!key) {
      return;
    }
    this.rxzPopupService?.remove(key);
    this.toolTips.delete(key);
    this.previousParam.delete(key);
  }

  private updateTooltip(key: string) {
    const previousParam = this.previousParam.get(key);
    if (!previousParam) {
      return;
    }
    const vnode: VNode | undefined = this.toolTips.get(key);
    if (!vnode) {
      return;
    }
    const { el, binding, sourceVnode } = previousParam;
    const zIndex = vnode.props?.style?.zIndex || this.rxzPopupService?.zIndexNext() || 3000;
    const pos: RxzToolTipPos = binding.arg as RxzToolTipPos || RxzToolTipPos.top;
    const isClick = binding.modifiers?.['click'];
    const content = binding.value || sourceVnode.children || '';
    const nVnode = this.createToolTip(el, pos, content, key, zIndex, isClick);
    const resKey = this.rxzPopupService?.append(nVnode, key);
    if (!resKey) {
      return;
    }
    this.toolTips.set(key, nVnode);
  }

  private createToolTip(
    el: HTMLElement,
    pos: RxzToolTipPos,
    content: any,
    key: string,
    zIndex: number,
    isClick: boolean,
  ) {
    return h(RxzPopper, {
      pos,
      style: {
        zIndex,
        ...this.transformPos(el, pos),
      },
      onMouseenter: () => {
        if (!isClick) {
          this.handleMouseMove(key)('enter');
        }
      },
      onMouseleave: () => {
        if (!isClick) {
          this.handleMouseMove(key)('leave');
        }
      },
    }, {
      default: content,
    });
  }

  private transformPos(el: HTMLElement, pos: RxzToolTipPos) {
    const elPos = this.getElementPagePosition(el);
    const elSize = this.getElementSize(el);
    switch (pos) {
      case RxzToolTipPos.topleft:
        return this.transformPosTopLeft(elPos);
      case RxzToolTipPos.top:
        return this.transformPosTop(elPos, elSize);
      case RxzToolTipPos.topright:
        return this.transformPosTopRight(elPos, elSize);
      case RxzToolTipPos.lefttop:
        return this.transformPosLeftTop(elPos);
      case RxzToolTipPos.left:
        return this.transformPosLeft(elPos, elSize);
      case RxzToolTipPos.leftbottom:
        return this.transformPosLeftBottom(elPos, elSize);
      case RxzToolTipPos.bottomleft:
        return this.transformPosBottomLeft(elPos, elSize);
      case RxzToolTipPos.bottom:
        return this.transformPosBottom(elPos, elSize);
      case RxzToolTipPos.bottomright:
        return this.transformPosBottomRight(elPos, elSize);
      case RxzToolTipPos.righttop:
        return this.transformPosRightTop(elPos, elSize);
      case RxzToolTipPos.right:
        return this.transformPosRight(elPos, elSize);
      case RxzToolTipPos.rightbottom:
        return this.transformPosRightBottom(elPos, elSize);
      default:
        // 保证pos的所有条件均有case处理，否则类型检查报错
        return (() => {
          const neverV: never = pos; return neverV;
        })();
    }
  }

  private transformPosTopLeft(elPos: ElementPos) {
    return {
      top: '0px',
      left: `${elPos.offsetLeft}px`,
      // -1避免滚动条
      width: `${document.body.offsetWidth - elPos.offsetLeft - 1}px`,
      height: `${elPos.offsetTop - this.TRIANGLE_W - this.GAP}px`,
    };
  }


  private transformPosTop(elPos: ElementPos, elSize: ElementSize) {
    const minW = this.getMinW(elPos, elSize);
    return {
      top: '0px',
      left: `${elPos.offsetLeft - minW}px`,
      // -1避免滚动条
      width: `${(minW * 2) + elSize.width - 1}px`,
      height: `${elPos.offsetTop - this.TRIANGLE_W - this.GAP}px`,
    };
  }

  private transformPosTopRight(elPos: ElementPos, elSize: ElementSize) {
    return {
      top: '0px',
      left: '0px',
      // -1避免滚动条
      width: `${elPos.offsetLeft + elSize.width - 1}px`,
      height: `${elPos.offsetTop - this.TRIANGLE_W - this.GAP}px`,
    };
  }

  private transformPosLeftTop(elPos: ElementPos) {
    return {
      top: `${elPos.offsetTop}px`,
      left: '0px',
      width: `${elPos.offsetLeft - this.TRIANGLE_W - this.GAP}px`,
      height: `${document.body.offsetHeight - elPos.offsetTop - 1}px`,
    };
  }

  private transformPosLeft(elPos: ElementPos, elSize: ElementSize) {
    const minH = this.getminH(elPos, elSize);
    return {
      top: `${elPos.offsetTop - minH}px`,
      left: '0px',
      width: `${elPos.offsetLeft - this.TRIANGLE_W - this.GAP}px`,
      height: `${(minH * 2) + elSize.height - 1}px`,
    };
  }

  private transformPosLeftBottom(elPos: ElementPos, elSize: ElementSize) {
    return {
      top: '0px',
      left: '0px',
      width: `${elPos.offsetLeft - this.TRIANGLE_W - this.GAP}px`,
      height: `${elPos.offsetTop + elSize.height - 1}px`,
    };
  }


  private transformPosBottomLeft(elPos: ElementPos, elSize: ElementSize) {
    return {
      top: `${elPos.offsetTop + elSize.height + this.TRIANGLE_W + this.GAP}px`,
      left: `${elPos.offsetLeft}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - 1}px`,
      height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - this.TRIANGLE_W - this.GAP}px`,
    };
  }

  private transformPosBottom(elPos: ElementPos, elSize: ElementSize) {
    const minW = this.getMinW(elPos, elSize);
    return {
      top: `${elSize.height + elPos.offsetTop + this.TRIANGLE_W + this.GAP}px`,
      left: `${elPos.offsetLeft - minW}px`,
      // -1避免滚动条
      width: `${(minW * 2) + elSize.width - 1}px`,
      height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - this.TRIANGLE_W - this.GAP}px`,
    };
  }

  private transformPosBottomRight(elPos: ElementPos, elSize: ElementSize) {
    return {
      top: `${elPos.offsetTop + elSize.height + this.TRIANGLE_W + this.GAP}px`,
      left: '0px',
      width: `${elPos.offsetLeft + elSize.width - 1}px`,
      height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - this.TRIANGLE_W - this.GAP}px`,
    };
  }

  private transformPosRightTop(elPos: ElementPos, elSize: ElementSize) {
    return {
      top: `${elPos.offsetTop}px`,
      left: `${elPos.offsetLeft + elSize.width + this.TRIANGLE_W + this.GAP}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - this.TRIANGLE_W - this.GAP - 1}px`,
      height: `${document.body.offsetHeight - elPos.offsetTop - 1}px`,
    };
  }

  private transformPosRight(elPos: ElementPos, elSize: ElementSize) {
    const minH = this.getminH(elPos, elSize);
    return {
      top: `${elPos.offsetTop - minH}px`,
      left: `${elPos.offsetLeft + elSize.width + this.TRIANGLE_W + this.GAP}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - this.TRIANGLE_W - this.GAP - 1}px`,
      height: `${(minH * 2) + elSize.height - 1}px`,
    };
  }

  private transformPosRightBottom(elPos: ElementPos, elSize: ElementSize) {
    return {
      top: '0px',
      left: `${elPos.offsetLeft + elSize.width + this.TRIANGLE_W + this.GAP}px`,
      width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - this.TRIANGLE_W - this.GAP - 1}px`,
      height: `${elPos.offsetTop + elSize.height - 1}px`,
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

  private getElementPagePosition(el: HTMLElement) {
    // 计算x坐标
    let actualLeft = el.offsetLeft;
    // 计算y坐标
    let actualTop = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
      actualLeft += (current as HTMLElement).offsetLeft + current.clientLeft;
      actualTop += (current as HTMLElement).offsetTop + current.clientTop;
      current = (current as HTMLElement).offsetParent;
    }
    // 返回结果
    return { offsetLeft: actualLeft, offsetTop: actualTop };
  }

  private getElementSize(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  }

  private keyMouseMove = {};

  // 防抖方法，颗粒度在单个指令进行防抖，防止快速从元素滑动到tooltip上，出现闪动
  private handleMouseMove = (key: string) => (this.keyMouseMove[key] = this.keyMouseMove[key] || _debounce((pos: 'enter' | 'leave') => {
    if (!this.toolTips.has(key)) {
      return;
    }
    const vnode = this.toolTips.get(key);

    if (vnode?.component?.proxy) {
      const rxzPopper = vnode.component.proxy as RxzPopperCnt;
      // 显示的时候更新
      if (!rxzPopper.isShow && pos === 'enter') {
        this.updateTooltip(key);
      }
      rxzPopper.isShow = pos === 'enter';
    }
  }, 50));

  private handleClick(key: string) {
    const vnode = this.toolTips.get(key);

    if (vnode?.component?.proxy) {
      const rxzPopper = vnode.component.proxy as RxzPopperCnt;
      const pos = rxzPopper.isShow ? 'leave' : 'enter';
      this.handleMouseMove(key)(pos);
    }
  }

}
