import { ICON_SIZE_ENUM, StringMap } from '@/definition';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzIcon
 * @description: 图标
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzIcon',
})
export class RxzIconCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: 'info-circle' })
  readonly name!: string;

  @Prop({ type: Number, default: ICON_SIZE_ENUM.normal })
  readonly size!: ICON_SIZE_ENUM;

  // 是否固定宽度
  @Prop({ type: Boolean, default: false })
  readonly isFixedWidth!: boolean;

  // 是否旋转
  @Prop({ type: Boolean, default: false })
  readonly spinner!: boolean;

  // 翻转角度
  @Prop({ type: String, default: '0' })
  readonly rotate!: string;

  // class列表
  @Prop({ type: Array, default: () => [] })
  readonly cls!: Array<string>;

  // style对象
  @Prop({ type: Object, default: () => ({}) })
  readonly css!: StringMap;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes
  get sizeCPT(): string {
    switch (this.size) {
      case ICON_SIZE_ENUM.normal:
        return '';
      case ICON_SIZE_ENUM.big:
        return 'fa-2x';
      case ICON_SIZE_ENUM.big2:
        return 'fa-3x';
      case ICON_SIZE_ENUM.big3:
        return 'fa-4x';
      case ICON_SIZE_ENUM.big4:
        return 'fa-5x';
      default:
        return '';
    }
  }

  // watchs

  // hooks

  // methods

}
