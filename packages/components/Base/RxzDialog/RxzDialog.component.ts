import { RxzIcon } from '../RxzIcon';
import { RxzCenterLayout } from '../../Layout/RxzCenterLayout';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

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

  // props and provide
  // 是否显示（支持v-model）
  @Prop({ type: Boolean, default: true })
  readonly visible!: boolean;

  @Prop({ type: Number, default: 3000 })
  readonly zIndex!: number;

  @Prop({ type: String, default: '400px' })
  readonly width!: string;

  @Prop({ type: String, default: '50px' })
  readonly titleHeight!: string;

  @Prop({ type: Boolean, default: true })
  readonly isShowClose!: boolean;

  @Prop({ type: String, default: '#FFFFFF' })
  readonly titleBgColor!: string;

  @Prop({ type: String, default: '#000000' })
  readonly titleColor!: string;

  @Prop({ type: String, default: '#FFFFFF' })
  readonly bodyBgColor!: string;

  @Prop({ type: String, default: '10px' })
  readonly padding!: string;

  @Prop({ type: String, default: '14px' })
  readonly closeFontSize!: string;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods
  get isShow() {
    return this.visible;
  }

  set isShow(value) {
    this.$emit('update:visible', value);
  }

}
