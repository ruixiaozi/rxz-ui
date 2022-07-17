import { RxzIcon } from '../RxzIcon';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
const zh = require('./i18n/zh.json');
const en = require('./i18n/en.json');

/**
 * Component: RxzLoading
 * @description: 加载组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzLoading',
  components: {
    RxzIcon,
  },
  i18n: {
    messages: {
      zh,
      en,
    },
  },
})
export class RxzLoadingCnt extends Vue {

  // props and provide
  @Prop({ type: Boolean, default: true })
  loading!: boolean;

  @Prop({ type: String, default: '' })
  text!: string;

  @Prop({ type: String, default: '#0000002F' })
  bgColor!: string;

  @Prop({ type: String, default: '#FFFFFF' })
  color!: string;

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods

}
