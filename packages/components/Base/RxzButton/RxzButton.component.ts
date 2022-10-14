import { BUTTON_TYPE_ENUM, NATIVE_BUTTON_TYPE_ENUM } from './RxzButton.declare';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { RxzIcon } from '../RxzIcon';
import chroma from 'chroma-js';

/**
 * Component: RxzButton
 * @description: 按钮
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzButton',
  components: {
    RxzIcon,
  },
})
export class RxzButtonCnt extends Vue {

  // props and provide
  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly loading!: boolean;

  @Prop({ type: String, default: BUTTON_TYPE_ENUM.default })
  readonly type!: BUTTON_TYPE_ENUM;

  @Prop({ type: String, default: NATIVE_BUTTON_TYPE_ENUM.button })
  readonly nativeType!: NATIVE_BUTTON_TYPE_ENUM;

  @Prop({ type: String, default: 'fit-content' })
  readonly width!: string;

  @Prop({ type: String, default: 'auto' })
  readonly height!: string;

  @Prop({ type: String, default: '8px 16px' })
  readonly padding!: string;

  @Prop({ type: String, default: '5px' })
  readonly borderRadius!: string;

  @Prop({ type: String, default: 'unset' })
  readonly bgColor!: string;

  @Prop({ type: String, default: 'unset' })
  readonly hoverBgColor!: string;

  @Prop({ type: String, default: 'unset' })
  readonly textColor!: string;

  @Prop({ type: String, default: 'unset' })
  readonly hoverTextColor!: string;

  @Prop({ type: Boolean, default: false })
  readonly link!: boolean;

  @Prop({ type: Boolean, default: true })
  readonly underline!: boolean;

  // injects

  // refs

  // injectServices

  // setup

  // entity
  isHover = false;

  isLoading = false;

  // computes
  get bgColorCPT(): string | undefined {
    return (this.bgColor && this.bgColor !== 'unset')
      ? this.bgColor : undefined;
  }

  get hoverBgColorCPT(): string | undefined {
    // 如果设置了hover颜色，则直接返回
    if (this.hoverBgColor !== 'unset') {
      return this.hoverBgColor;
    }

    // 如果背景色未设置，hover也返回undefined
    if (!chroma.valid(this.bgColor)) {
      return undefined;
    }

    // 根据背景色来设置hover颜色，亮色降低亮度，暗色增加亮度
    const colorObj = chroma(this.bgColor);
    if (colorObj.luminance() >= 0.5) {
      return colorObj.darken(1).hex();
    }
    return colorObj.brighten(1).hex();
  }

  get textColorCTP(): string | undefined {
    return (this.textColor && this.textColor !== 'unset')
      ? this.textColor : undefined;
  }

  get hoverTextColorCPT(): string | undefined {
    return this.hoverTextColor === 'unset' ? this.textColorCTP : this.hoverTextColor;
  }

  // watchs
  @Watch('loading')
  onLoadingChange() {
    this.isLoading = this.loading;
  }

  // hooks
  created() {
    this.isLoading = this.loading;
  }

  // methods

}
