import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzCenterLayout
 * @description: 居中视图
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzCenterLayout',
})
export class RxzCenterLayout extends Vue {

  @Prop({ type: Boolean, default: true })
  isScroll!: boolean;

  @Prop({ type: Boolean, default: false })
  showShadow!: boolean;

}
