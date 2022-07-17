import { RxzIcon } from '../RxzIcon';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
const zh = require('./i18n/zh.json');
const en = require('./i18n/en.json');

/**
 * Component: RxzDialog
 * @description: 弹窗组件
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzDialog',
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
export class RxzDialogCnt extends Vue {

  // props and provide
  @Prop({ type: Boolean, default: true })
  readonly loading!: boolean;

  @Prop({ type: String, default: '' })
  readonly text!: string;

  @Prop({ type: String, default: '#0000002F' })
  readonly bgColor!: string;

  @Prop({ type: String, default: '#FFFFFF' })
  readonly color!: string;

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
