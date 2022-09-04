import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';

/**
 * Component: RxzIcon
 * @description: 图标
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzIcon',
})
export class RxzIconCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: 'search' })
  readonly name!: string;

  @Prop({ type: Number, default: 24 })
  readonly size!: number;

  // 是否旋转
  @Prop({ type: Boolean, default: false })
  readonly spinner!: boolean;

  // 旋转的步长，默认每次一度，仅开启旋转有效
  @Prop({ type: Number, default: 1 })
  readonly step!: number;

  // 翻转角度
  @Prop({ type: String, default: 0 })
  readonly rotate!: number;

  // injects

  // refs

  // injectServices

  // setup

  // entity
  timer: any;

  spinnerRotate = 0;

  // computes
  get timeSplit() {
    if (this.step === 0) {
      return null;
    }
    return 1000 / (360 / Math.abs(this.step));
  }

  get realRotate() {
    return (this.rotate + this.spinnerRotate) % 360;
  }

  // watchs
  @Watch('spinner')
  onSpinnerChanged(): void {
    this.spinnerIcon();
  }

  // hooks
  mounted() {
    this.spinnerIcon();
  }

  // methods
  spinnerIcon(): void {
    if (!this.timeSplit) {
      return;
    }

    const delay = this.timeSplit;

    if (this.spinner && !this.timer) {
      this.timer = setInterval(() => {
        if (this.timeSplit !== delay) {
          clearInterval(this.timer);
          this.timer = null;
          this.spinnerIcon();
          return;
        }
        this.spinnerRotate += this.step;
      }, delay);
    } else if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

}
