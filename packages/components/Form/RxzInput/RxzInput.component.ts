import { Options, setup, Vue } from 'vue-class-component';
import { Model } from 'vue-property-decorator';
import { InjectService } from '@/common';
import { RxzFormService } from '../RxzForm/RxzForm.service';

/**
 * Component: RxzInput
 * @description: 输入框
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzInput',
})
export class RxzInputCnt extends Vue {

  // props and provide
  @Model('modelValue', { required: false, default: '' })
  value!: any;

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
  handleBlur(event: any) {
    this.formValue.valueChange();
    this.$emit('blur', event);
  }

}
