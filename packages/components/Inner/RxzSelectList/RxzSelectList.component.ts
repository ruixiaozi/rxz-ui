import { RxzSelectOptions } from '@/components/Form/RxzSelect/RxzSelect.declare';
import { Options, Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';


/**
 * Component: RxzSelectList
 * @description: RxzSelectList
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzSelectList',
})
export class RxzSelectListCnt extends Vue {

  // props and provide
  @Prop({ type: Array, default: () => [] })
  readonly options!: RxzSelectOptions[];

  @Model('modelValue')
  selected!: any;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods
  handleSelect(option: RxzSelectOptions) {
    this.selected = option;
  }


}
