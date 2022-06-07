import { BUTTON_TYPE_ENUM, NATIVE_BUTTON_TYPE_ENUM, StringMap } from '@/definition';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import RxzIcon from '../RxzIcon';

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
export class RxzButton extends Vue {

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly loading!: boolean;

  @Prop({ type: String, default: BUTTON_TYPE_ENUM.default })
  readonly type!: BUTTON_TYPE_ENUM;

  @Prop({ type: String, default: NATIVE_BUTTON_TYPE_ENUM.button })
  readonly nativeType!: NATIVE_BUTTON_TYPE_ENUM;

  @Prop({
    type: Array,
    default: () => [],
  })
  readonly cls!: Array<string>;

  @Prop({
    type: Object,
    default: () => ({}),
  })
  readonly css!: StringMap;

  @Prop({ type: String, default: 'fit-content' })
  readonly width!: string;

  @Prop({ type: String, default: 'auto' })
  readonly height!: string;

  @Prop({ type: String, default: '10px 20px' })
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

  isHover = false;

  get bgColorCPT(): string | undefined {
    return (this.bgColor && this.bgColor !== 'unset')
      ? this.bgColor : undefined;
  }

  get hoverBgColorCPT(): string | undefined {
    return this.hoverBgColor === 'unset' ? this.bgColorCPT : this.hoverBgColor;
  }

  get textColorCTP(): string | undefined {
    return (this.textColor && this.textColor !== 'unset')
      ? this.textColor : undefined;
  }

  get hoverTextColorCPT(): string | undefined {
    return this.hoverTextColor === 'unset' ? this.textColorCTP : this.hoverTextColor;
  }

  @Emit('click')
  handleClick(event: Event): Event {
    return event;
  }

}
