import { RxzBreadcrumbItem } from './RxzBreadcrumb.declare';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzBreadcrumb
 * @description: RxzBreadcrumb
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzBreadcrumb',
})
export class RxzBreadcrumbCnt extends Vue {

  // props and provide
  @Prop({ type: Array, default: () => [] })
  readonly breadcrumbs!: RxzBreadcrumbItem[];


  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods
  handleClick(event: Event, path?: string) {
    if (!this.$router || !path) {
      return true;
    }
    this.$router.push(path);
    event.preventDefault();
    return false;
  }

}
