import { InjectService } from '@/common';
import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzFlex } from '@/components/Layout/RxzFlex';
import { StringMap } from '@/definition';
import { uniqueId } from 'lodash';
import { Subject } from 'rxjs';
import { Options, Vue, setup } from 'vue-class-component';
import { Inject, Prop, Provide, Watch } from 'vue-property-decorator';
import { RxzFormConfig, RxzFormItemConfig } from '../RxzForm/RxzFormInterFace';
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

  @InjectService(RxzLabelService)
  private rxzLabelService!: RxzLabelService;

  @Prop({ type: Object, default: () => ({}) })
  readonly errorTip!: StringMap;

  // formItem唯一值
  @Provide({ reactive: true })
  formItemKey = uniqueId('_formItem');

  // 标签宽度，用于错误提示left距离
  labelWidthPx: any = setup(() => this.rxzLabelService.getLabelWidthPx(this.formItemKey));

  tip = '';

  @Inject()
  readonly formConfig!: any;

  @Inject()
  @Provide({ to: 'parentData', reactive: true })
  readonly formData!: any;

  @Inject()
  readonly onCheck!: Subject<any>;

  @Prop({ type: [String, Number], default: '' })
  @Provide({ to: 'name', reactive: true })
  readonly name!: string | number;

  // 继续向下传递
  @Provide({ to: 'formConfig', reactive: true })
  get itemFormConfig(): RxzFormItemConfig | RxzFormConfig | RxzFormConfig[] | null {
    if (!this.formConfig || (this.formConfig as RxzFormItemConfig).validators) {
      return null;
    }
    return (this.formConfig as any)[this.name] ?? null;
  }

  @Provide({ to: 'formData', reactive: true })
  get itemFormData(): any {
    if (!this.formData) {
      return null;
    }
    return this.formData[this.name] ?? null;
  }


  @Watch('formData', { deep: true })
  watchFormData(val: any) {
    const currentConfig = this.formConfig[this.name];
    if (Array.isArray(currentConfig?.validators) && currentConfig?.validators.length) {
      for (const item of currentConfig.validators) {
        const validateRes = item(val[this.name]);
        if (validateRes && this.errorTip?.[validateRes]) {
          this.tip = this.errorTip?.[validateRes];
          return;
        }
      }
      this.tip = '';
    }
  }

}
