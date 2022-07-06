import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzOverflow } from '@/directives/RxzOverflow';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Ref } from 'vue-property-decorator';
import { RxzFormConfig, RxzFormItemConfig } from '../RxzForm/RxzFormInterFace';

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
export class RxzLabelCnt extends Vue {

  // props and provide
  @Prop({ type: Boolean, default: false })
  readonly required!: boolean;

  // injects
  @Inject()
  readonly formConfig!: RxzFormItemConfig | RxzFormConfig | RxzFormConfig[] | null;

  @Inject()
  readonly formItemKey!: string;

  @Inject()
  readonly formLabelWidth!: string;

  @Inject()
  readonly updateFormLabelWidth!: (key: string, width: string) => void;

  // refs
  @Ref('labelContentSpan')
  readonly labelContentSpan!: HTMLSpanElement;

  // injectServices

  // setup

  // entity

  // computes
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

  // watchs

  // hooks
  mounted() {
    this.updateWidth();
  }

  updated() {
    this.updateWidth();
  }

  // methods
  updateWidth() {
    this.updateFormLabelWidth(this.formItemKey, `${this.labelContentSpan.offsetWidth + 15}px`);
  }


}
