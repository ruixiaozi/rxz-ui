import { RxzIcon } from '@/components/Base/RxzIcon';
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';
import { TIP_TYPE_ENUM } from './RxzTip.declare';

/**
 * Component: RxzTip
 * @description: RxzTip
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzTip',
  components: {
    RxzIcon,
  },
})
export class RxzTipCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: TIP_TYPE_ENUM.information })
  readonly type!: TIP_TYPE_ENUM;

  @Prop({ type: Boolean, default: false })
  readonly closable!: boolean;

  // injects

  // refs

  // injectServices

  // setup

  // entity
  display = true;

  // computes

  // watchs

  // hooks

  // methods
  @Emit('show')
  show() {
    this.display = true;
  }

  @Emit('hidden')
  hidden() {
    this.display = false;
  }

}
