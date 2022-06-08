import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzTheme
 * @description: 主题容器
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzTheme',
})
export class RxzTheme extends Vue {

  @Prop({ type: String, default: 'default' })
  theme!: string;

}
