import { Options, Vue } from 'vue-class-component';
import { Model, Prop, Provide } from 'vue-property-decorator';
import { RxzFormConfig } from './RxzFormInterFace';
import { Subject } from 'rxjs';
import { defaultsDeep } from 'lodash';

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

  @Prop({ type: Object, default: () => ({}) })
  @Provide({ reactive: true })
  formConfig!: RxzFormConfig;

  @Prop({ type: String, default: '100px' })
  @Provide({ reactive: true })
  labelWidth!: string;

  // 表单数据，v-model绑定，绑定得值可以覆盖初始默认值
  @Model('modelValue', { type: Object, default: () => ({}) })
  @Provide({ reactive: true })
  formData!: any;

  @Provide()
  onCheck: Subject<any> = new Subject();

  created(): void {
    const reData = this.createFormData(this.formConfig);
    this.formData = defaultsDeep(this.formData, reData);
  }

  reset():void {
    const reData = this.createFormData(this.formConfig);
    this.formData = reData;
  }

  // 根据config递归创建初始值
  createFormData(rxzFormConfig: RxzFormConfig): any {
    if (!rxzFormConfig) {
      return {};
    }
    const re = Object.entries(rxzFormConfig).reduce(
      (data, [key, value]) => {
        if (Array.isArray(value)) {
          data[key] = value.map((item) => this.createFormData(item));
          return data;
        }
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

  check(): any {
    // 执行校验，将校验结果返回，并通知子组件
    const res = {};
    this.onCheck.next(res);
    return res;
  }

}
