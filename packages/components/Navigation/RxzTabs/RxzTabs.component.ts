import { RxzTabsItem } from './RxzTabs.declare';
import { Options, Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';

/**
 * Component: RxzTabs
 * @description: RxzTabs
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzTabs',
})
export class RxzTabsCnt extends Vue {

  // props and provide
  @Prop({ type: Array, default: () => [] })
  readonly tabs!: RxzTabsItem[];

  @Model('modelValue', { type: Object })
  value!: RxzTabsItem;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods
  handleClick(item: RxzTabsItem) {
    this.value = item;
  }

}
