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

  // 弹出层不会挂载vue-router，需要传入
  @Prop({ type: Object, required: false })
    router?: any;


  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes
  // 弹出层不会挂载vue-router，需要传入
  get vueRouter() {
    return this.router || this.$router;
  }

  // watchs

  // hooks

  // methods
  handleClick(event: Event, path?: string) {
    if (!this.vueRouter || !path) {
      return true;
    }
    this.vueRouter.push(path);
    event.preventDefault();
    return false;
  }

}
