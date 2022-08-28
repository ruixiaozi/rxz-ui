import { RxzIcon } from '@/components/Base/RxzIcon';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzLoadingTpl
 * @description: RxzLoadingTpl
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzLoadingTpl',
  components: {
    RxzIcon,
  },
})
export class RxzLoadingTplCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: '' })
  text!: string;

  @Prop({ type: String, default: '#00000032' })
  bgColor!: string;

  @Prop({ type: String, default: '#ffffff' })
  color!: string;

  @Prop({ type: Number, default: 3000 })
  readonly zIndex!: number;

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
