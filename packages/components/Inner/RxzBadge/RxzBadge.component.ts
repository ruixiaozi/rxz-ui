import { isString } from 'lodash';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzBadge
 * @description: RxzBadge
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzBadge',
})
export class RxzBadgeCnt extends Vue {

  // props and provide
  @Prop({ type: [String, Number], required: true })
  readonly value!: string | number;

  @Prop({ type: Number, default: 99 })
  readonly maxNum!: number;

  @Prop({ type: Number, default: -99 })
  readonly minNum!: number;

  @Prop({ type: Number })
  readonly zIndex?: number;

  @Prop({ type: Number, default: 0 })
  readonly top!: number;

  @Prop({ type: Number, default: 0 })
  readonly left!: number;


  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes
  get text() {
    if (isString(this.value)) {
      return this.value;
    }
    if (this.value >= this.minNum && this.value <= this.maxNum) {
      return Math.trunc(this.value);
    }

    if (this.value < this.minNum) {
      return `${this.minNum}+`;
    }

    return `${this.maxNum}+`;
  }

  // watchs

  // hooks

  // methods

}
