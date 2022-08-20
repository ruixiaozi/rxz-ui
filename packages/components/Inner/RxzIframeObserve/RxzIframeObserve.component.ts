import { Options, Vue } from 'vue-class-component';
import { Emit, Ref } from 'vue-property-decorator';

/**
 * Component: RxzIframeObserve
 * @description: 内置框架监听器
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzIframeObserve',
})
export class RxzIframeObserveCnt extends Vue {

  // props and provide;

  // injects

  // refs
  @Ref('iframe')
  iframe?: HTMLIFrameElement;

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks
  mounted() {
    this.$nextTick(() => {
      this.iframe?.contentWindow?.addEventListener('resize', (event: Event) => {
        this.handleResize(event);
      });
    });
  }

  // methods
  @Emit('resize')
  handleResize(event: Event) {
    return event;
  }

}
