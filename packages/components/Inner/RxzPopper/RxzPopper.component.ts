import { RxzContainer } from './../../Layout/RxzContainer/index';
import { RxzContainerPosition } from './../../Layout/RxzContainer/RxzContainer.declare';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RxzToolTipPos } from '@/directives/RxzTooltipDirective';

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
  @Prop({ type: String, default: () => RxzToolTipPos.top })
  pos!: RxzToolTipPos;


  // injects

  // refs

  // injectServices

  // setup

  // entity
  isShow = false;

  readonly posMap = {
    [RxzToolTipPos.top]: RxzContainerPosition.BOTTOM_CENTER,
    [RxzToolTipPos.topleft]: RxzContainerPosition.BOTTOM_LEFT,
    [RxzToolTipPos.topright]: RxzContainerPosition.BOTTOM_RIGHT,
    [RxzToolTipPos.left]: RxzContainerPosition.CENTER_RIGHT,
    [RxzToolTipPos.lefttop]: RxzContainerPosition.TOP_RIGHT,
    [RxzToolTipPos.leftbottom]: RxzContainerPosition.BOTTOM_RIGHT,
    [RxzToolTipPos.bottom]: RxzContainerPosition.TOP_CENTER,
    [RxzToolTipPos.bottomleft]: RxzContainerPosition.TOP_LEFT,
    [RxzToolTipPos.bottomright]: RxzContainerPosition.TOP_RIGHT,
    [RxzToolTipPos.right]: RxzContainerPosition.CENTER_LEFT,
    [RxzToolTipPos.righttop]: RxzContainerPosition.TOP_LEFT,
    [RxzToolTipPos.rightbottom]: RxzContainerPosition.BOTTOM_LEFT,
  }

  // computes
  get position() {
    return this.posMap[this.pos] || RxzContainerPosition.BOTTOM_CENTER;
  }

  // watchs

  // hooks

  // methods


}
