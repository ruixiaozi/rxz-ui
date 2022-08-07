import { RxzIcon } from '../RxzIcon';
import { RxzCenterLayout } from '../../Layout/RxzCenterLayout';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

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
    RxzCenterLayout,
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

}
