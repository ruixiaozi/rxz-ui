import { StringMap } from '@/definition';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

/**
 * Component: RxzWaveProcess
 * @description: 水波进度组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzWaveProcess',
})
export class RxzWaveProcess extends Vue {

  @Prop({ type: Number, default: 0 })
  readonly process!: number;

  @Prop({ type: String, default: '100px' })
  readonly width!: string;

  @Prop({ type: String, default: '100px' })
  readonly height!: string;

  @Prop({ type: String, default: 'solid 1px #07c2b7' })
  readonly border!: string;

  @Prop({ type: String, default: '50px' })
  readonly borderRadius!: string;

  @Prop({ type: String, default: '#07c2b7' })
  readonly waterColor!: string;

  @Prop({ type: String, default: '#ffffff' })
  readonly emptyColor!: string;

  @Prop({
    type: Object,
    default: () => ({
      'color': '#000',
      'font-size': '16px',
      'font-weight': 'bold',
    }),
  })
  readonly infoCss!: StringMap;

  get waterBackgroudImage(): string {
    const re = `linear-gradient(-180deg, ${this.waterColor} 13%, ${this.waterColor} 100%)`;
    return re;
  }

  get waveTop(): string {
    return `${100 - this.process}%`;
  }

}
