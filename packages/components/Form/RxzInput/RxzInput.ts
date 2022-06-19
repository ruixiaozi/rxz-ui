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
export class RxzInput extends Vue {

  @Inject()
  readonly parentData!: any;

  @Inject()
  readonly name!: any;

  @Model('modelValue')
  value!: any;

  // 如果在formitem下，则屏蔽v-model
  get inputValue(): any {
    if (!_isNil(this.name)) {
      return this.parentData?.[this.name] || '';
    }
    return this.value;
  }

  set inputValue(val: any) {
    if (!_isNil(this.name)) {
      this.parentData && (this.parentData[this.name] = val);
      return;
    }
    this.value = val;
  }

}
