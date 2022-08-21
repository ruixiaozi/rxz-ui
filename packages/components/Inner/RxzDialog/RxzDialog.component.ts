import { RxzContainer } from '../../Layout/RxzContainer/index';
import { RxzIcon } from '../../Base/RxzIcon';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import { RxzOverflow } from '@/directives/RxzOverflow';
import { getService } from '@/common';

const rxzOverflowDirective = getService(RxzOverflow);

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
  },
})
export class RxzDialogCnt extends Vue {

  // props and provide;
  @Prop({ type: Number, default: 3000 })
  readonly zIndex!: number;

  @Prop({ type: String, default: '400px' })
  readonly width!: string;

  @Prop({ type: Boolean, default: true })
  readonly isShowClose!: boolean;

  @Prop({ type: Boolean, default: true })
  readonly allowOuterClose!: boolean;

  @Prop({ type: String, default: 'opacity' })
  readonly transition!: 'opacity' | 'bounce';

  @Prop({ type: Boolean, default: false })
  readonly allowDrag!: boolean;


  // injects

  // refs

  // injectServices

  // setup

  // entity
  isShow = true;

  offsetY = 150;

  offsetX = 0;

  startX = 0;

  startY = 0;

  isDrag = false;

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


}
