import { InjectService } from '@/common';
import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzFlex } from '@/components/Layout/RxzFlex';
import { RxzErrorTip } from '@/definition';
import { uniqueId as _uniqueId, isString as _isString } from 'lodash';
import { Subject, Subscription } from 'rxjs';
import { Options, Vue, setup } from 'vue-class-component';
import { Inject, Prop, Provide, Watch } from 'vue-property-decorator';
import { RxzFormService } from '../RxzForm/RxzForm.service';
import { RxzLabelService } from '../RxzLabel/RxzLabel.service';

/**
 * Component: RxzFormItem
 * @description: 表单项组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzFormItem',
  components: {
    RxzFlex,
    RxzIcon,
  },
})
export class RxzFormItemCnt extends Vue {

  // props and provide
  // 校验错误提示
  @Prop({ type: Object, default: () => ({}) })
  readonly errorTip!: RxzErrorTip;

  // 表单对应的字段名称
  @Prop({ type: [String, Number], default: '' })
  @Provide({ to: 'name', reactive: true })
  readonly name!: string | number;

  // formItem唯一值
  @Provide({ reactive: true })
  formItemKey = _uniqueId('_formItem');

  // injects
  @Inject()
  readonly formConfig!: any;

  @Inject()
  readonly formData!: any;

  // refs

  // injectServices
  @InjectService(RxzLabelService)
  private rxzLabelService!: RxzLabelService;

  @InjectService(RxzFormService)
  private rxzFormService!: RxzFormService;

  // setup
  // 标签宽度，用于错误提示left距离
  labelWidthPx: any = setup(() => this.rxzLabelService.getLabelWidthPx(this.formItemKey));

  check: any = setup(() => this.rxzFormService.generateCheck(this.$props, this.onCheck));

  // entity
  tip = '';

  private onCheck = new Subject();

  private $subscrition?: Subscription;

  private oldFormDataValue: any;

  // computes

  // watchs
  @Watch('formData', { deep: true })
  watchFormData() {
    if (this.name && (this.formData?.[this.name] !== this.oldFormDataValue)) {
      this.oldFormDataValue = this.formData?.[this.name];
      this.check();
    }
  }

  // hooks
  created() {
    if (this.name) {
      this.oldFormDataValue = this.formData?.[this.name];
    }
  }

  mounted() {
    // 当check被触发时，调用格式化tip
    this.$subscrition = this.onCheck.subscribe((checkRes) => {
      this.formatTip(checkRes);
    });
  }

  beforeDestroy() {
    this.$subscrition?.unsubscribe();
  }

  // methods
  private formatTip(checkRes: any) {
    if (!this.name || !checkRes?.tip) {
      this.tip = '';
      return;
    }
    const { tip, param } = checkRes;
    if (_isString(tip)) {
      this.tip = tip;
    } else {
      this.tip = tip.isI18N
        ? this.$t(tip.label, param)
        : tip.label;
    }
  }

}
