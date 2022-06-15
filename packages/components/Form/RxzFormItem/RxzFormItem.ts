import { Subject } from 'rxjs';
import { Options, Vue } from 'vue-class-component';
import { Inject, Watch } from 'vue-property-decorator';
import { RxzFormConfig } from '../RxzForm/RxzFormInterFace';

/**
 * Component: RxzFormItem
 * @description: 表单项组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzFormItem',
})
export class RxzFormItem extends Vue {

  @Inject()
  formConfig!: RxzFormConfig;

  @Inject()
  labelWidth!: string;

  @Inject()
  formData!: any;

  @Inject()
  onCheck!: Subject<any>;

  created() {
    console.log(this.formConfig);
    console.log(this.labelWidth);
    console.log('data', JSON.stringify(this.formData));
    console.log(this.onCheck);
  }

  @Watch('formData')
  dataChange(val: any): void {
    console.log('changeitem', val);
  }

}
