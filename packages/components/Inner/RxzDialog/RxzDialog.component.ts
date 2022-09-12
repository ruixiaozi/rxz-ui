import { RxzContainer } from '../../Layout/RxzContainer/index';
import { RxzIcon } from '../../Base/RxzIcon';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop, Ref } from 'vue-property-decorator';
import { RxzOverflowDirective } from '@/directives/RxzOverflowDirective';
import { getService } from '@/common';
import { RxzResizeObserveDirective } from '@/directives/RxzResizeObserveDirective';

const rxzOverflowDirective = getService(RxzOverflowDirective);
const rxzResizeObserveDirective = getService(RxzResizeObserveDirective);

/**
 * Component: RxzDialog
 * @description: 弹窗组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzDialog',
  components: {
    RxzIcon,
    RxzContainer,
  },
  directives: {
    [rxzOverflowDirective.name]: rxzOverflowDirective,
    [rxzResizeObserveDirective.name]: rxzResizeObserveDirective,
  },
})
export class RxzDialogCnt extends Vue {

  // props and provide;
  @Prop({ type: Number, default: 3000 })
  readonly zIndex!: number;

  @Prop({ type: String, default: '400px' })
  readonly width!: string;

  @Prop({ type: Boolean, default: true })
  readonly closable!: boolean;

  @Prop({ type: Boolean, default: true })
  readonly allowOuterClose!: boolean;

  @Prop({ type: String, default: 'bounce' })
  readonly transition!: 'opacity' | 'bounce' | 'move';

  @Prop({ type: Boolean, default: false })
  readonly allowDrag!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly drawer!: boolean;

  // injects

  // refs
  @Ref('title')
  readonly title?: HTMLElement;

  @Ref('footer')
  readonly footer?: HTMLElement;

  // injectServices

  // setup

  // entity
  isShow = true;

  offsetY = 150;

  offsetX = 0;

  startX = 0;

  startY = 0;

  isDrag = false;

  diffInfo: any = null;

  titleHeight = 0;

  footerHeight = 0;

  // computes

  // watchs

  // hooks
  mounted() {
    if (document) {
      document.addEventListener('mousemove', this.handleDrag);
      document.addEventListener('mouseup', this.handleDragEnd);
    }
  }

  beforeUnmount() {
    if (document) {
      document.removeEventListener('mousemove', this.handleDrag);
      document.removeEventListener('mouseup', this.handleDragEnd);
    }
  }

  // methods
  @Emit('close')
  handleClose(event: MouseEvent) {
    return event;
  }

  @Emit('destory')
  handleDestory(event: Event) {
    return event;
  }

  handleBackClick(event: MouseEvent) {
    if (this.allowOuterClose) {
      this.handleClose(event);
    }
  }

  handleDragStart(event: MouseEvent) {
    if (!this.allowDrag) {
      return;
    }
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.isDrag = true;
  }

  handleDragEnd = (event: MouseEvent) => {
    if (!this.allowDrag) {
      return;
    }
    this.handleDrag(event);
    this.isDrag = false;
    // 如果存储overflow出去的差异数据，则需要处理
    if (this.diffInfo?.diffX) {
      this.offsetX -= this.diffInfo?.diffX;
    }
    if (this.diffInfo?.diffY) {
      this.offsetY -= this.diffInfo?.diffY;
    }
    this.diffInfo = null;
  }

  handleDrag = (event: MouseEvent) => {
    if (!this.isDrag || !this.allowDrag) {
      return;
    }
    this.offsetX += event.clientX - this.startX;
    this.offsetY += event.clientY - this.startY;
    this.startX = event.clientX;
    this.startY = event.clientY;
  }

  handleOverflow(diffInfo: any) {
    this.diffInfo = diffInfo;
  }

  handleResize() {
    // 都减去16.是为了去除padding的16px
    this.titleHeight = this.title?.clientHeight ? (this.title.clientHeight - 16) : 0;
    this.footerHeight = this.footer?.clientHeight ? (this.footer.clientHeight - 16) : 0;
  }

}
