import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { RxzFormConfig, RxzLabelWidth } from './RxzFormInterFace';
import { Subject } from 'rxjs';
import { defaultsDeep } from 'lodash';
import { RxzLabelService } from '../RxzLabel/RxzLabel.service';
import { InjectService } from '@/common';

/**
 * Component: RxzForm
 * @description: 表单
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzForm',
})
export class RxzFormCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: 'auto' })
  labelWidth!: RxzLabelWidth;

  @Prop({ type: Object, default: () => ({}), required: true })
  @Provide({ reactive: true })
  formConfig!: RxzFormConfig;

  // 表单数据，v-model绑定，绑定得值可以覆盖初始默认值
  @Model('modelValue', { type: Object, default: () => ({}) })
  @Provide({ reactive: true })
  formData!: any;

  // 检查事件
  @Provide()
  onCheck: Subject<any> = new Subject();

  // injects

  // refs

  // injectServices
  @InjectService(RxzLabelService)
  private rxzLabelService!: RxzLabelService;

  // setup
  // 提供表单标签宽度
  private _provideFormLabelWidth = setup(() => this.rxzLabelService.provideFormLabelWidth(this.$props));

  // entity

  // computes

  // watchs
  @Watch('formConfig', { immediate: true, deep: true })
  formConfigChange() {
    const reData = this.createFormData(this.formConfig);
    this.formData = defaultsDeep(this.formData, reData);
  }

  // hooks

  // methods
  check(): any {
    // 执行校验，将校验结果返回，并通知子组件
    const res = {};
    this.onCheck.next(res);
    return res;
  }

  reset():void {
    const reData = this.createFormData(this.formConfig);
    this.formData = reData;
  }

  // 根据config递归创建初始值
  private createFormData(rxzFormConfig: RxzFormConfig): any {
    if (!rxzFormConfig) {
      return {};
    }
    const re = Object.entries(rxzFormConfig).reduce(
      (data, [key, value]) => {
        if (value?.validators) {
          data[key] = value.default ?? null;
          return data;
        }
        data[key] = this.createFormData(value as RxzFormConfig);
        return data;
      },
      {} as any,
    );
    return re;
  }

}
