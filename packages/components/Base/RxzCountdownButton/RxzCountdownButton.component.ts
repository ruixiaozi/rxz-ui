import { RxzButton } from '../RxzButton';
import { BUTTON_TYPE_ENUM } from '@/definition';
import { Options, Vue } from 'vue-class-component';
import { Emit, Model, Prop, Watch } from 'vue-property-decorator';

/**
 * Component: RxzCountdownButton
 * @description: 倒计时按钮
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzCountdownButton',
  components: {
    RxzButton,
  },
})
export class RxzCountdownButtonCnt extends Vue {

  // props and provide
  @Model('modelValue', { type: Boolean })
  isStart!: boolean;

  @Prop({ type: Number, default: 60 })
  readonly seconds!: number;

  @Prop({ type: String, default: BUTTON_TYPE_ENUM.primary })
  readonly type!: BUTTON_TYPE_ENUM;

  // injects

  // refs

  // injectServices

  // setup

  // entity
  timer: any;

  sec: number = 0;
  // computes

  // watchs
  @Watch('isStart')
  onSsStartChanged(val: boolean): void {
    this.operate(val);
  }

  // hooks
  mounted(): void {
    this.sec = this.seconds;
    this.operate(this.isStart);
  }

  // methods
  countDown(): void {
    if (--this.sec <= 0) {
      this.isStart = false;
    }
  }

  @Emit('click')
  handleClick(event: Event): Event {
    return event;
  }

  operate(isStart: boolean): void {
    if (isStart) {
      this.timer = setInterval(() => {
        this.countDown();
      }, 1000);
      this.sec = this.seconds;
    } else if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
