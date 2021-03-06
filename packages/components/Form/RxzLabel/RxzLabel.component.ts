import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzValidators } from '@/definition';
import { RxzOverflow } from '@/directives/RxzOverflow';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Ref } from 'vue-property-decorator';
import { RxzFormItemConfig } from '../RxzForm/RxzForm.declare';

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
  readonly formConfig!: any;

  @Inject()
  readonly name!: string;

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
    const config = this.formConfig?.[this.name || ''];
    if (!config || !(config as RxzFormItemConfig).validators) {
      return false;
    }

    const { validators } = config as RxzFormItemConfig;
    return validators.some((item) => item === RxzValidators.required);
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
