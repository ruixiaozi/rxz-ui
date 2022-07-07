import { InjectService } from '@/common';
import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzFlex } from '@/components/Layout/RxzFlex';
import { StringMap } from '@/definition';
import { uniqueId } from 'lodash';
import { Options, Vue, setup } from 'vue-class-component';
import { Inject, Prop, Provide, Watch } from 'vue-property-decorator';
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
  readonly errorTip!: StringMap;

  // 表单对应的字段名称
  @Prop({ type: [String, Number], default: '' })
  @Provide({ to: 'name', reactive: true })
  readonly name!: string | number;

  // formItem唯一值
  @Provide({ reactive: true })
  formItemKey = uniqueId('_formItem');

  // injects
  @Inject()
  readonly formConfig!: any;

  @Inject()
  readonly formData!: any;

  // refs

  // injectServices
  @InjectService(RxzLabelService)
  private rxzLabelService!: RxzLabelService;

  // setup
  // 标签宽度，用于错误提示left距离
  labelWidthPx: any = setup(() => this.rxzLabelService.getLabelWidthPx(this.formItemKey));

  // entity
  tip = '';

  // computes

  // watchs
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

  // hooks

  // methods

}
