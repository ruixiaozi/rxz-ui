import { Options, Vue } from 'vue-class-component';
import { Inject, Model } from 'vue-property-decorator';
import { isNil as _isNil } from 'lodash';

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
  @Model('modelValue')
  value!: any;

  // injects
  @Inject()
  readonly formData!: any;

  @Inject()
  readonly name!: string | number;

  @Inject()
  readonly check!: { (): boolean };

  // refs

  // injectServices

  // setup

  // entity

  // computes
  // 如果在formitem下，则屏蔽v-model
  get inputValue(): any {
    if (!_isNil(this.name)) {
      return this.formData?.[this.name] || '';
    }
    return this.value;
  }

  set inputValue(val: any) {
    if (!_isNil(this.name)) {
      this.formData && (this.formData[this.name] = val);
      return;
    }
    this.value = val;
  }

  // watchs

  // hooks

  // methods
  handleBlur(event: any) {
    this.check();
    this.$emit('blur', event);
  }

}
