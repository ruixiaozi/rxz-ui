import { Subject } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Provide } from 'vue-property-decorator';
import { RxzFormConfig, RxzFormItemConfig } from '../RxzForm/RxzFormInterFace';

/**
 * Component: RxzFormItem
 * @description: 表单项组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzFormItem',
})
export class RxzFormItem extends Vue {

  @Inject()
  readonly formConfig!: RxzFormConfig;

  @Inject()
  readonly labelWidth!: string;

  @Inject()
  @Provide({ to: 'parentData', reactive: true })
  readonly formData!: any;

  @Inject()
  readonly onCheck!: Subject<any>;

  @Prop({ type: String, default: '' })
  @Provide({ to: 'name', reactive: true })
  readonly name!: string;

  @Provide({ to: 'formConfig', reactive: true })
  get itemFormConfig(): RxzFormItemConfig | RxzFormConfig | RxzFormConfig[] | null {
    if (!this.formConfig) {
      return null;
    }
    return this.formConfig[this.name] ?? null;
  }

  // 继续向下传递
  @Provide({ to: 'formData', reactive: true })
  get itemFormData(): any {
    if (!this.formData) {
      return null;
    }
    return this.formData[this.name] ?? null;
  }


}
