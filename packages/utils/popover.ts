/**
 * 对弹出框位置进行计算的工具
 * 存在bug：document获取的问题
 */
import { RXZ_POPOVER_POS_E } from '@/components/template/RxzPopoverTpl';
import { useRxzSSR } from '@/use/useRxzSSR';

interface ElementPos {
  offsetLeft: number;
  offsetTop: number;
}

interface ElementSize {
  width: number;
  height: number;
}


// popover与host元素直接的间隔
const GAP = 4;
// 三角形箭头的大小
const TRIANGLE_W = 4;

function getElementPagePosition(el: HTMLElement) {
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

function getElementSize(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return { width: rect.width, height: rect.height };
}

function transformPosTopLeft(elPos: ElementPos, gap: number, triangleW: number) {
  return {
    top: '0px',
    left: `${elPos.offsetLeft}px`,
    // -1避免滚动条
    width: `${document.body.offsetWidth - elPos.offsetLeft - 1}px`,
    height: `${elPos.offsetTop - triangleW - gap}px`,
  };
}

function getMinW(elPos: ElementPos, elSize: ElementSize) {
  const leftW = elPos.offsetLeft;
  const rightW = document.body.offsetWidth - elSize.width - elPos.offsetLeft;
  return Math.min(leftW, rightW);
}

function getminH(elPos: ElementPos, elSize: ElementSize) {
  const topH = elPos.offsetTop;
  const bottomH = document.body.offsetHeight - elSize.height - elPos.offsetTop;
  return Math.min(topH, bottomH);
}

function transformPosTop(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  const minW = getMinW(elPos, elSize);
  return {
    top: '0px',
    left: `${elPos.offsetLeft - minW}px`,
    // -1避免滚动条
    width: `${(minW * 2) + elSize.width - 1}px`,
    height: `${elPos.offsetTop - triangleW - gap}px`,
  };
}

function transformPosTopRight(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  return {
    top: '0px',
    left: '0px',
    // -1避免滚动条
    width: `${elPos.offsetLeft + elSize.width - 1}px`,
    height: `${elPos.offsetTop - triangleW - gap}px`,
  };
}

function transformPosLeftTop(elPos: ElementPos, gap: number, triangleW: number) {
  return {
    top: `${elPos.offsetTop}px`,
    left: '0px',
    width: `${elPos.offsetLeft - triangleW - gap}px`,
    height: `${document.body.offsetHeight - elPos.offsetTop - 1}px`,
  };
}

function transformPosLeft(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  const minH = getminH(elPos, elSize);
  return {
    top: `${elPos.offsetTop - minH}px`,
    left: '0px',
    width: `${elPos.offsetLeft - triangleW - gap}px`,
    height: `${(minH * 2) + elSize.height - 1}px`,
  };
}

function transformPosLeftBottom(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  return {
    top: '0px',
    left: '0px',
    width: `${elPos.offsetLeft - triangleW - gap}px`,
    height: `${elPos.offsetTop + elSize.height - 1}px`,
  };
}


function transformPosBottomLeft(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  return {
    top: `${elPos.offsetTop + elSize.height + triangleW + gap}px`,
    left: `${elPos.offsetLeft}px`,
    width: `${document.body.offsetWidth - elPos.offsetLeft - 1}px`,
    height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - triangleW - gap}px`,
  };
}

function transformPosBottom(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  const minW = getMinW(elPos, elSize);
  return {
    top: `${elSize.height + elPos.offsetTop + triangleW + gap}px`,
    left: `${elPos.offsetLeft - minW}px`,
    // -1避免滚动条
    width: `${(minW * 2) + elSize.width - 1}px`,
    height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - triangleW - gap}px`,
  };
}

function transformPosBottomRight(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  return {
    top: `${elPos.offsetTop + elSize.height + triangleW + gap}px`,
    left: '0px',
    width: `${elPos.offsetLeft + elSize.width - 1}px`,
    height: `${document.body.offsetHeight - elSize.height - elPos.offsetTop - triangleW - gap}px`,
  };
}

function transformPosRightTop(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  return {
    top: `${elPos.offsetTop}px`,
    left: `${elPos.offsetLeft + elSize.width + triangleW + gap}px`,
    width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - triangleW - gap - 1}px`,
    height: `${document.body.offsetHeight - elPos.offsetTop - 1}px`,
  };
}

function transformPosRight(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  const minH = getminH(elPos, elSize);
  return {
    top: `${elPos.offsetTop - minH}px`,
    left: `${elPos.offsetLeft + elSize.width + triangleW + gap}px`,
    width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - triangleW - gap - 1}px`,
    height: `${(minH * 2) + elSize.height - 1}px`,
  };
}

function transformPosRightBottom(elPos: ElementPos, elSize: ElementSize, gap: number, triangleW: number) {
  return {
    top: '0px',
    left: `${elPos.offsetLeft + elSize.width + triangleW + gap}px`,
    width: `${document.body.offsetWidth - elPos.offsetLeft - elSize.width - triangleW - gap - 1}px`,
    height: `${elPos.offsetTop + elSize.height - 1}px`,
  };
}

const { isSSR } = useRxzSSR();

/**
 * 转换相对位置
 * @param el 宿主元素
 * @param pos 相对位置
 * @param showArrow 是否显示箭头
 * @param gap 间距
 * @returns
 */
export function transformPos(el: HTMLElement, pos: RXZ_POPOVER_POS_E, showArrow?: boolean, gap = GAP) {
  if (isSSR.value) {
    return {};
  }
  const triangleW = showArrow === false ? 0 : TRIANGLE_W;
  const elPos = getElementPagePosition(el);
  const elSize = getElementSize(el);
  let res = {};
  switch (pos) {
    case RXZ_POPOVER_POS_E.topleft:
      res = transformPosTopLeft(elPos, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.top:
      res = transformPosTop(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.topright:
      res = transformPosTopRight(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.lefttop:
      res = transformPosLeftTop(elPos, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.left:
      res = transformPosLeft(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.leftbottom:
      res = transformPosLeftBottom(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.bottomleft:
      res = transformPosBottomLeft(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.bottom:
      res = transformPosBottom(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.bottomright:
      res = transformPosBottomRight(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.righttop:
      res = transformPosRightTop(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.right:
      res = transformPosRight(elPos, elSize, gap, triangleW);
      break;
    case RXZ_POPOVER_POS_E.rightbottom:
      res = transformPosRightBottom(elPos, elSize, gap, triangleW);
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
