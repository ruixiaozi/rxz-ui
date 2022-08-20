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


  // injects

  // refs

  // injectServices

  // setup

  // entity
  isShow = true;

  // computes

  // watchs

  // hooks

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

}
