import { getService } from '@/common';
import { RxzResizeObserveDirective } from '@/directives/RxzResizeObserveDirective';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop, Ref } from 'vue-property-decorator';
import { RxzContainerPosition, RxzContainerSlotEnum } from './RxzContainer.declare';

const rxzResizeObserveDirective = getService(RxzResizeObserveDirective);

/**
 * Component: RxzContainer
 * @description: RxzContainer
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzContainer',
  directives: {
    [rxzResizeObserveDirective.name]: rxzResizeObserveDirective,
  },
})
export class RxzContainerCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: RxzContainerPosition.CENTER })
  position!: RxzContainerPosition;

  @Prop({ type: Number, default: 0 })
  offsetX!: number;

  @Prop({ type: Number, default: 0 })
  offsetY!: number;

  // 是否允许内容溢出边界
  @Prop({ type: Boolean, default: false })
  allowOverflow!: boolean;

  @Prop({ type: String })
  width?: string;

  @Prop({ type: String })
  height?: string;

  // injects

  // refs
  @Ref('content')
  content?: HTMLDivElement;

  @Ref('container')
  container?: HTMLDivElement;

  // injectServices

  // setup

  // entity
  containerWidth = 0;

  containerHeight = 0;

  contentWidth = 0;

  contentHeight = 0;

  slotNames = Object.values(RxzContainerSlotEnum);

  // computes
  get contentX() {
    if (!this.containerWidth || !this.contentWidth) {
      return null;
    }
    const [, hPos] = this.position.split('_');
    let resX = 0;
    switch (hPos) {
      case 'LEFT':
        resX = this.offsetX;
        break;
      case 'CENTER':
        resX = (this.containerWidth / 2) - (this.contentWidth / 2) + this.offsetX;
        break;
      case 'RIGHT':
        resX = this.containerWidth - this.contentWidth + this.offsetX;
        break;
      // no default
    }
    // 允许超出边界，则直接返回
    if (this.allowOverflow) {
      return resX;
    }

    if (resX < 0) {
      this.overflow(resX);
      return 0;
    }

    if (resX + this.contentWidth > this.containerWidth) {
      this.overflow(resX + this.contentWidth - this.containerWidth);
      return this.containerWidth - this.contentWidth;
    }
    return resX;
  }

  get contentY() {
    if (!this.containerHeight || !this.contentHeight) {
      return null;
    }
    const [vPos] = this.position.split('_');
    let resY = 0;
    switch (vPos) {
      case 'TOP':
        resY = this.offsetY;
        break;
      case 'CENTER':
        resY = (this.containerHeight / 2) - (this.contentHeight / 2) + this.offsetY;
        break;
      case 'BOTTOM':
        resY = this.containerHeight - this.contentHeight + this.offsetY;
        break;
      // no default
    }
    // 允许超出边界，则直接返回
    if (this.allowOverflow) {
      return resY;
    }

    if (resY < 0) {
      this.overflow(0, resY);
      return 0;
    }

    if (resY + this.contentHeight > this.containerHeight) {
      this.overflow(0, resY + this.contentHeight - this.containerHeight);
      return this.containerHeight - this.contentHeight;
    }
    return resY;
  }

  get contentW() {
    // 如果内容大于容器，则强制内容宽度为容器宽度，内容自己处理overflow
    if (this.containerWidth <= this.contentWidth) {
      return `${this.containerWidth}px`;
    }
    return this.width;
  }

  get contentH() {
    // 如果内容大于容器，则强制内容高度为容器高度，内容自己处理overflow
    if (this.containerHeight <= this.contentHeight) {
      return `${this.containerHeight}px`;
    }
    return this.height;
  }

  // watchs

  // hooks

  // methods
  @Emit('resize')
  resize(event: Event) {
    if (!this.container || !this.content) {
      return event;
    }
    this.containerWidth = this.container.clientWidth;
    this.containerHeight = this.container.clientHeight;
    this.contentWidth = this.content.clientWidth;
    this.contentHeight = this.content.clientHeight;
    return event;
  }

  @Emit('overflow')
  overflow(diffX = 0, diffY = 0) {
    return {
      diffX,
      diffY,
    };
  }

}
