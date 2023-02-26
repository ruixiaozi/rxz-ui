import { RxzFlex } from '@/components/Layout/RxzFlex';
import { RxzIcon } from '@/components/Base/RxzIcon';
import { InjectService } from '@/common';
import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop } from 'vue-property-decorator';
import { RxzFormService } from '../RxzForm/RxzForm.service';
import { RxzRadioItem } from './RxzRadio.declare';
import { DIRECTION_ENUM } from '@/definition';

/**
 * Component: RxzRadio
 * @description: RxzRadio
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzRadio',
  components: {
    RxzIcon,
    RxzFlex,
  },
})
export class RxzRadioCnt extends Vue {

  // props and provide
  @Model('modelValue', { required: false, default: '' })
    value!: any;

  @Prop({ type: Array, default: () => ([]) })
  readonly items!: RxzRadioItem[];

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
  handleSelect(item: any) {
    if (this.disabled) {
      return;
    }
    this.formValue.value = item;
  }

}
