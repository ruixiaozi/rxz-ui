import { RxzContainer } from './../../Layout/RxzContainer/index';
import { RxzContainerPosition } from './../../Layout/RxzContainer/RxzContainer.declare';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { POPOVER_TYPE_E, POPOVER_POS_E } from './RxzPopper.declare';
import { uniqueId as _uniqueId } from 'lodash';

/**
 * Component: RxzPopper
 * @description: RxzPopper
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzPopper',
  components: {
    RxzContainer,
  },
})
export class RxzPopperCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: () => POPOVER_POS_E.top })
  pos!: POPOVER_POS_E;

  @Prop({ type: String, default: () => POPOVER_TYPE_E.WHITE })
  type!: POPOVER_TYPE_E;

  @Prop({ type: Boolean, default: () => true })
  showArrow!: boolean;

  @Prop({ type: Boolean, default: () => true })
  radius!: boolean;

  @Prop({ type: Boolean, default: () => true })
  padding!: boolean;

  @Prop({ type: String, default: () => _uniqueId() })
  popperKey!: string;

  // injects

  // refs

  // injectServices

  // setup

  // entity
  isShow = false;

  readonly posMap = {
    [POPOVER_POS_E.top]: RxzContainerPosition.BOTTOM_CENTER,
    [POPOVER_POS_E.topleft]: RxzContainerPosition.BOTTOM_LEFT,
    [POPOVER_POS_E.topright]: RxzContainerPosition.BOTTOM_RIGHT,
    [POPOVER_POS_E.left]: RxzContainerPosition.CENTER_RIGHT,
    [POPOVER_POS_E.lefttop]: RxzContainerPosition.TOP_RIGHT,
    [POPOVER_POS_E.leftbottom]: RxzContainerPosition.BOTTOM_RIGHT,
    [POPOVER_POS_E.bottom]: RxzContainerPosition.TOP_CENTER,
    [POPOVER_POS_E.bottomleft]: RxzContainerPosition.TOP_LEFT,
    [POPOVER_POS_E.bottomright]: RxzContainerPosition.TOP_RIGHT,
    [POPOVER_POS_E.right]: RxzContainerPosition.CENTER_LEFT,
    [POPOVER_POS_E.righttop]: RxzContainerPosition.TOP_LEFT,
    [POPOVER_POS_E.rightbottom]: RxzContainerPosition.BOTTOM_LEFT,
  }

  // computes
  get position() {
    return this.posMap[this.pos] || RxzContainerPosition.BOTTOM_CENTER;
  }

  // watchs
  @Watch('isShow')
  onIsShowChange(newV: any, oldV: any) {
    if (newV !== oldV) {
      this.$emit('showChange', newV);
    }
  }

  // hooks

  // methods


}
