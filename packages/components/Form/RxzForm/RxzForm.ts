import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop, Provide, Watch } from 'vue-property-decorator';
import { RxzFormConfig, RxzLabelWidth } from './RxzFormInterFace';
import { Subject } from 'rxjs';
import { defaultsDeep } from 'lodash';
import { LabelBaseModule } from '../RxzLabel/RxzLabel.module';

/**
 * Component: RxzForm
 * @description: 表单
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzForm',
})
export class RxzForm extends Vue {

  // label
  @Prop({ type: String, default: 'auto' })
  labelWidth!: RxzLabelWidth;

  // label基础模块
  labelBaseModule = setup(() => LabelBaseModule(this.$props));


  /* 声明周期钩子 */
  created(): void {
    // 初始化label
    this.labelBaseModule.updateSubCurLabelWidth('defaults', '0px');
  }

  /* 组件参数 */
  @Prop({ type: Object, default: () => ({}), required: true })
  @Provide({ reactive: true })
  formConfig!: RxzFormConfig;

  // 表单数据，v-model绑定，绑定得值可以覆盖初始默认值
  @Model('modelValue', { type: Object, default: () => ({}) })
  @Provide({ reactive: true })
  formData!: any;

  @Watch('formConfig', { immediate: true, deep: true })
  formConfigChange() {
    const reData = this.createFormData(this.formConfig);
    this.formData = defaultsDeep(this.formData, reData);
  }

  // 检查事件
  @Provide()
  onCheck: Subject<any> = new Subject();


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

  /* 公共方法 */
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

}
