import { RxzFlex } from '@/components/Layout/RxzFlex';
import { Options, setup, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RxzLabelService } from '../RxzLabel/RxzLabel.service';
import { InjectService } from '@/common';
import { RxzFormService } from './RxzForm.service';
import { DIRECTION_ENUM } from '@/definition';
import { RxzLabelWidth } from '../RxzLabel/RxzLabel.declare';
import { RxzFormConfig } from './RxzForm.declare';

/**
 * Component: RxzForm
 * @description: 表单
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzForm',
  components: {
    RxzFlex,
  },
})
export class RxzFormCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: '' })
  readonly labelWidth!: RxzLabelWidth;

  @Prop({ type: Object, default: () => ({}) })
  readonly formConfig!: RxzFormConfig;

  // 表单对应的字段名称
  @Prop({ type: [String, Number], default: '' })
  readonly name!: string | number;

  // 表单数据，v-model绑定，绑定得值可以覆盖初始默认值
  @Prop({ type: Object, default: () => ({}) })
  readonly modelValue!: any;

  // 表单下item的排列方式
  @Prop({ type: String, default: DIRECTION_ENUM.vertical })
  readonly direction!: DIRECTION_ENUM;

  // injects

  // refs

  // injectServices
  @InjectService(RxzLabelService)
  private rxzLabelService!: RxzLabelService;

  @InjectService(RxzFormService)
  private rxzFormService!: RxzFormService;

  // setup
  // 提供表单标签宽度
  private _provideFormLabelWidth = setup(() => this.rxzLabelService.provideFormLabelWidth(this.$props));

  // 提供表单服务
  private _provideForm = setup(() => this.rxzFormService.generateForm(this.$props, this.$emit));

  // check方法
  check: any = setup(() => this.rxzFormService.generateCheck(this.$props));

  // entity

  // computes

  // watchs

  // hooks

  // methods

}
