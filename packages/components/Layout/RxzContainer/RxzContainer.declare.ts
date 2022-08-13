export enum RxzContainerPosition {
  TOP_LEFT='TOP_LEFT',
  TOP_CENTER='TOP_CENTER',
  TOP_RIGHT='TOP_RIGHT',
  CENTER_LEFT='CENTER_LEFT',
  CENTER='CENTER_CENTER',
  CENTER_RIGHT='CENTER_RIGHT',
  BOTTOM_LEFT='BOTTOM_LEFT',
  BOTTOM_CENTER='BOTTOM_CENTER',
  BOTTOM_RIGHT='BOTTOM_RIGHT',
}

export class RxzContainerDeclare {

  declare name: 'RxzContainer';

  declare $props: {
    position?: string;
    offsetX?: number;
    offsetY?: number;
    // 是否允许内容溢出边界
    allowOverflow?: boolean;
  };

  declare $emit: {
    (e: 'resize', event: Event): any;
  }

}
