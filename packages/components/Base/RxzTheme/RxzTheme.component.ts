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
export class RxzThemeCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: 'default' })
  theme!: string;

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
