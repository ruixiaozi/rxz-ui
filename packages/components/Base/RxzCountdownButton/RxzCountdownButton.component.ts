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

  @Model('modelValue', { type: Boolean, default: false })
  isStart!: boolean;

  @Prop({ type: Number, default: 60 })
  readonly seconds!: number;

  @Prop({ type: String, default: BUTTON_TYPE_ENUM.primary })
  readonly type!: BUTTON_TYPE_ENUM;

  timer: any = null;

  sec: number = 0;

  @Watch('isStart', { immediate: true })
  onSsStartChanged(val: boolean): void {
    this.operate(val);
  }

  mounted(): void {
    this.sec = this.seconds;
  }

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
      this.timer = setInterval(this.countDown, 1000);
      this.sec = this.seconds;
    } else if (this.timer) {
      clearInterval(this.timer);
    }
  }


}
