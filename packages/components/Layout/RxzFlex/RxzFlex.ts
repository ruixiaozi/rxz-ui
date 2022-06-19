import { DIRECTION_ENUM, FLEX_ALIGN_ENUM } from '@/definition';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzFlex
 * @description: 弹性布局组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzFlex',
})
export class RxzFlex extends Vue {

  @Prop({ type: String, default: DIRECTION_ENUM.horizontal })
  direction!: DIRECTION_ENUM;

  @Prop({ type: String, default: '0px' })
  gutter!: string;

  // 另一方向上的对齐方式
  @Prop({ type: String, default: FLEX_ALIGN_ENUM.start })
  align!: FLEX_ALIGN_ENUM;

  // 当前方向的对齐方式
  @Prop({ type: String, default: FLEX_ALIGN_ENUM.start })
  justify!: FLEX_ALIGN_ENUM;

}
