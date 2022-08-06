import { InjectService } from '@/common';
import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';
import { RxzFormService } from '../RxzForm/RxzForm.service';

/**
 * Component: RxzSwitch
 * @description: RxzSwitch
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzSwitch',
})
export class RxzSwitchCnt extends Vue {

  // props and provide
  @Model('modelValue', { required: false, default: '' })
  value!: any;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: String, default: '' })
  readonly onText!: string;

  @Prop({ type: String, default: '' })
  readonly offText!: string;


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

  // watchs

  // hooks

  // methods
  handleChange() {
    if (this.disabled) {
      return;
    }
    this.formValue.value = !this.formValue.value;
  }

}
