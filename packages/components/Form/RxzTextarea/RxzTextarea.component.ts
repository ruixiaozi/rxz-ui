import { InjectService } from '@/common';
import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';
import { RxzFormService } from '../RxzForm/RxzForm.service';

/**
 * Component: RxzTextarea
 * @description: RxzTextarea
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzTextarea',
})
export class RxzTextareaCnt extends Vue {

  // props and provide
  @Model('modelValue', { required: false, default: '' })
  value!: any;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Number, default: 1 })
  readonly minRow!: number;

  @Prop({ type: Number, default: 10 })
  readonly maxRow!: number;

  @Prop({ type: Number, default: 2 })
  readonly row!: number;

  @Prop({ type: String, default: '250px' })
  readonly width!: string;

  @Prop({ type: String, default: '' })
  readonly placeholder!: string;

  // injects

  // refs

  // injectServices
  @InjectService(RxzFormService)
  private rxzFormService!: RxzFormService;

  // setup
  // 支持表单绑定，则需要将formValue的value绑定组件的值，会自动和v-model关联
  formValue = setup(() => this.rxzFormService.generateFormValue(this.$props, this.$emit));

  // entity

  // computes
  get minHeight() {
    return `calc(${this.minRow * 1.15}em + 16px)`;
  }

  get maxHeight() {
    return `calc(${this.maxRow * 1.15}em + 16px)`;
  }

  get height() {
    return `calc(${this.row * 1.15}em + 16px)`;
  }

  // watchs

  // hooks

  // methods

}
