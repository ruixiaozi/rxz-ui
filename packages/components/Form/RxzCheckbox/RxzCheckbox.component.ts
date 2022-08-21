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
    const selectItems = this.formValue.value as RxzCheckboxItem[];
    return selectItems?.some((selectValue: RxzCheckboxItem) => selectValue.value === item.value);
  }

  handleSelect(item: RxzCheckboxItem) {
    if (this.disabled) {
      return;
    }
    const selectItems = this.formValue.value as RxzCheckboxItem[];
    if (!Array.isArray(selectItems)) {
      this.formValue.value = [item];
      return;
    }
    const index = selectItems.findIndex((selectValue: RxzCheckboxItem) => selectValue.value === item.value);
    if (index >= 0) {
      selectItems.splice(index, 1);
      return;
    }
    selectItems.push(item);
  }

}