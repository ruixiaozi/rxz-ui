import { Options, Vue } from 'vue-class-component';
import { Inject, Model } from 'vue-property-decorator';

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
    if (this.name) {
      return this.parentData?.[this.name] || '';
    }
    return this.value;
  }

  set inputValue(val: any) {
    console.log(this.name);
    if (this.name) {
      this.parentData && (this.parentData[this.name] = val);
    } else {
      this.value = val;
    }
  }

  created() {
    console.log(this.name);
    console.log(this.parentData);
  }

}
