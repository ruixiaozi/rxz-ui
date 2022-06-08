import { Options, Vue } from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';

/**
 * Component: RxzForm
 * @description: 表单
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzForm',
})
export class RxzForm extends Vue {

  @Prop({ type: Object, default: () => ({}) })
  data!: any;

  @Prop({ type: Object, default: () => ({}) })
  validatas!: any;

  @Prop({ type: String, default: '100px' })
  labelWidth!: string;

  @Provide({ to: 'labelWidth' })
  labelWidthProvide = this.labelWidth;

  @Provide()
  rxzForm = this;

  fields: any[] = [];

  addField(field: any):void {
    if (field) {
      this.fields.push(field);
    }
  }

  removeField(field: any):void {
    if (field.prop) {
      this.fields.splice(this.fields.indexOf(field), 1);
    }
  }

  reset():void {
    this.fields.forEach((field) => field.resetField());
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  submit(cb: Function):Promise<boolean> {
    return new Promise((resolve) => {
      let valid = true, count = 0;
      this.fields.forEach((field) => {
        field.validate('', (error: any) => {
          if (error) {
            valid = false;
          }
          if (++count === this.fields.length) {
            resolve(valid);
            if (typeof cb === 'function') {
              cb(valid);
            }
          }
        });
      });
    });
  }

}
