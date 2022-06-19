import RxzFlex from '@/components/Layout/RxzFlex';
import { Subject } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import { Inject, Prop, Provide } from 'vue-property-decorator';
import { RxzFormConfig, RxzFormItemConfig, RxzLabelWidth } from '../RxzForm/RxzFormInterFace';

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
  },
})
export class RxzFormItem extends Vue {

  @Inject()
  readonly formConfig!: RxzFormItemConfig | RxzFormConfig | RxzFormConfig[] | null;

  // 上级labelWidth
  @Inject({ from: 'labelWidth' })
  readonly paraentLabelWidth!: RxzLabelWidth;

  @Provide({ reactive: true })
  get isFixedWidth() {
    return this.paraentLabelWidth !== 'auto' && this.paraentLabelWidth !== 'fit-content';
  }

  // 非必须
  @Prop({ type: String })
  labelWidth?: RxzLabelWidth;

  // 默认继承上级labelWidth
  @Provide({ to: 'labelWidth', reactive: true })
  get nextLabelWidth(): RxzLabelWidth {
    if (this.labelWidth) {
      return this.labelWidth;
    }
    return this.paraentLabelWidth;
  }

  // 当前层级实际标签宽度
  @Inject()
  @Provide({ to: 'realLebelWidth', reactive: true })
  readonly curLebelWidth!: string;

  @Inject()
  @Provide({ to: 'updateRealLabelWidth', reactive: true })
  readonly updateCurLabelWidth!: (key: string, width: string) => void;

  // 子item实际标签宽度
  @Provide({ to: 'curLebelWidth', reactive: true })
  subCurLabelWidth: string = '0px';

  private allSubLabelWidt = new Map<string, number>();

  @Provide({ to: 'updateCurLabelWidth' })
  updateSubCurLabelWidth(key: string, width: string) {
    if (this.nextLabelWidth !== 'auto') {
      this.subCurLabelWidth = String(this.nextLabelWidth);
      return;
    }
    this.allSubLabelWidt.set(key, parseFloat(width));
    const maxWidth = Math.max(...this.allSubLabelWidt.values());
    this.subCurLabelWidth = `${maxWidth}px`;
  }

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

  created() {
    // 初始化label
    this.updateSubCurLabelWidth('defaults', '0px');
  }


}
