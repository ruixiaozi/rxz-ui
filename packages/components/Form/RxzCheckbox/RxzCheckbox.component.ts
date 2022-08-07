import { InjectService } from '@/common';
import { DIRECTION_ENUM } from '@/definition';
import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';
import { RxzFormService } from '../RxzForm/RxzForm.service';
import { RxzCheckboxItem } from './RxzCheckbox.declare';

/**
 * Component: RxzCheckbox
 * @description: RxzCheckbox
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzCheckbox',
})
export class RxzCheckboxCnt extends Vue {

  // props and provide
  @Model('modelValue', { required: false, default: '' })
  value!: any;

  @Prop({ type: Array, default: () => ([]) })
  readonly items!: RxzCheckboxItem[];

  @Prop({ type: String, default: DIRECTION_ENUM.horizontal })
  readonly direction!: DIRECTION_ENUM;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

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
  isSelect(item: RxzCheckboxItem) {
    return this.formValue.value?.some((selectValue: RxzCheckboxItem) => selectValue.value === item.value);
  }

  handleSelect(item: RxzCheckboxItem) {
    if (this.disabled) {
      return;
    }
    if (!Array.isArray(this.formValue.value)) {
      this.formValue.value = [];
    }
    const index = this.formValue.value.findIndex((selectValue: RxzCheckboxItem) => selectValue.value === item.value);
    if (index >= 0) {
      this.formValue.value.splice(index, 1);
      return;
    }
    this.formValue.value.push(item);
  }

}
