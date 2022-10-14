import { RxzSelect } from './../../Form/RxzSelect/index';
import { RxzButton } from '@/components/Base/RxzButton/index';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RxzButtonGroupItem } from './RxzButtonGroup.declare';

/**
 * Component: RxzButtonGroup
 * @description: RxzButtonGroup
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzButtonGroup',
  components: {
    RxzButton,
    RxzSelect,
  },
})
export class RxzButtonGroupCnt extends Vue {

  // props and provide
  @Prop({ type: Array, default: () => [] })
  readonly buttons!: RxzButtonGroupItem[];

  @Prop({ type: Number, default: 3 })
  readonly max!: number;

  @Prop({ type: Boolean, default: false })
  readonly link!: boolean;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes
  get hasMore() {
    return this.buttons.length > this.max;
  }

  get displayButtons() {
    if (this.hasMore) {
      return this.buttons.slice(0, 2);
    }
    return this.buttons;
  }

  get moreOptions() {
    if (this.hasMore) {
      return this.buttons.slice(2).map((item) => ({
        label: item.text,
        value: item.text,
        key: item.text,
        onClick: item.onClick,
      }));
    }
    return [];
  }

  // watchs

  // hooks

  // methods

}
