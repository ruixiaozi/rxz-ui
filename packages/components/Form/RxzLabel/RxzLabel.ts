import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzOverflow } from '@/directives/RxzOverflow';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Ref } from 'vue-property-decorator';
import { RxzFormConfig, RxzFormItemConfig } from '../RxzForm/RxzFormInterFace';
import { uniqueId as _uniqueId } from 'lodash';

/**
 * Component: RxzLabel
 * @description: 标签组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzLabel',
  components: {
    RxzIcon,
  },
  directives: {
    'rxz-overflow': new RxzOverflow(),
  },
})
export class RxzLabel extends Vue {

  @Ref('labelContentSpan')
  readonly labelContentSpan!: HTMLSpanElement;

  @Inject()
  readonly formConfig!: RxzFormItemConfig | RxzFormConfig | RxzFormConfig[] | null;

  @Inject()
  readonly isFixedWidth!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly required!: boolean;

  @Prop({ type: String, default: () => _uniqueId('label_') })
  readonly key!: string;

  @Inject()
  readonly realLebelWidth!: string;

  @Inject()
  readonly updateRealLabelWidth!: (key: string, width: string) => void;

  get isRequired() {
    if (this.required) {
      return true;
    }
    if (!this.formConfig || !(this.formConfig as RxzFormItemConfig).validators) {
      return false;
    }

    const { validators } = this.formConfig as RxzFormItemConfig;
    return validators.some((item) => item);
  }

  mounted() {
    this.updateWidth();
  }

  updated() {
    this.updateWidth();
  }

  updateWidth() {
    !this.isFixedWidth && this.updateRealLabelWidth(this.key, `${this.labelContentSpan.offsetWidth + 14}px`);
  }


}
