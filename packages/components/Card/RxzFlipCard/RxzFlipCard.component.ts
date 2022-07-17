import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzFlipCard
 * @description: 反转卡片
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzFlipCard',
})
export class RxzFlipCardCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: '100px' })
  width!: string;

  @Prop({ type: String, default: '100px' })
  height!: string;

  @Prop({ type: String, default: 'none' })
  borderRadius!: string;

  @Prop({ type: Boolean, default: true })
  isFront!: boolean;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods

}
