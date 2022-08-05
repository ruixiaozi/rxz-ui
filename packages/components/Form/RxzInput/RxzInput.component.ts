import { RxzIcon } from './../../Base/RxzIcon';
import { Options, setup, Vue } from 'vue-class-component';
import { Model, Prop, Ref } from 'vue-property-decorator';
import { InjectService } from '@/common';
import { RxzFormService } from '../RxzForm/RxzForm.service';
import { isNil as _isNil } from 'lodash';

/**
 * Component: RxzInput
 * @description: 输入框
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzInput',
  components: {
    RxzIcon,
  },
})
export class RxzInputCnt extends Vue {

  // props and provide
  @Model('modelValue', { required: false, default: '' })
  value!: any;

  @Prop({ type: Boolean, default: false })
  disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  clear!: boolean;

  @Prop({ type: String, default: '250px' })
  width!: string;

  @Prop({ type: Boolean, default: false })
  capslock!: boolean;

  @Prop({ type: Boolean, default: false })
  password!: boolean;

  @Prop({ type: Boolean, default: true })
  paste!: boolean;

  @Prop({ type: Boolean, default: true })
  copy!: boolean;

  // injects

  // refs
  @Ref('input')
  readonly input!: HTMLInputElement;

  @Ref('infront')
  readonly infront!: HTMLDivElement;

  @Ref('inrear')
  readonly inrear!: HTMLDivElement;

  // injectServices
  @InjectService(RxzFormService)
  private rxzFormService!: RxzFormService;

  // setup
  // 支持表单绑定，则需要将formValue的value绑定组件的值，会自动和v-model关联
  formValue = setup(() => this.rxzFormService.generateFormValue(this.$props, this.$emit));

  // entity
  paddingLeft = 10;

  paddingRight = 10;

  isCapslock = false;

  openEye = false;

  // computes
  get showClear() {
    return this.clear && !(_isNil(this.formValue.value) || this.formValue.value === '');
  }

  get showCapslock() {
    return this.capslock && this.isCapslock;
  }

  // watchs

  // hooks
  mounted() {
    setTimeout(() => {
      this.updatePadding();
    }, 100);
  }

  updated() {
    this.updatePadding();
  }

  // methods
  handleBlur(event: any) {
    this.formValue.valueChange();
    this.$emit('blur', event);
  }

  updatePadding() {
    this.paddingLeft = this.infront.offsetWidth + 10;
    this.paddingRight = this.inrear.offsetWidth + 10;
  }

  updateCapslock(event: KeyboardEvent) {
    this.isCapslock = event.getModifierState('CapsLock');
  }

  clearText() {
    this.formValue.value = '';
    this.input.focus();
  }

  changeEye() {
    this.openEye = !this.openEye;
  }

  handleCopy(event: ClipboardEvent) {
    // 禁止复制或者密码框阻止复制
    if (!this.copy || this.password) {
      event.preventDefault();
      return;
    }
    this.$emit('copy', event);
  }

  handlePaste(event: ClipboardEvent) {
    if (!this.paste) {
      event.preventDefault();
      return;
    }
    this.$emit('paste', event);
  }

}
