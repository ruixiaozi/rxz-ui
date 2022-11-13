import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzMenu } from './index';
import { debounceByKey, getService, InjectService } from '@/common';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RxzMenuItemOption } from './RxzMenu.declare';
import { POPOVER_POS_E, RxzPopperService } from '@/components/Inner/RxzPopper';
import { isNil, uniqueId as _uniqueId } from 'lodash';
import { RxzOverflowDirective } from '@/directives/RxzOverflowDirective';
import { reactive } from 'vue';

const rxzOverflowDirective = getService(RxzOverflowDirective);

/**
 * Component: RxzMenu
 * @description: RxzMenu
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzMenu',
  components: {
    RxzIcon,
  },
  directives: {
    [rxzOverflowDirective.name]: rxzOverflowDirective,
  },
})
export class RxzMenuCnt extends Vue {

  // props and provide
  @Prop({ type: Array, default: () => [] })
  items!: RxzMenuItemOption[];

  @Prop({ type: String, default: '' })
  active!: string;

  @Prop({ type: String, default: 'horizontal' })
  direction!: 'vertical' | 'horizontal';

  @Prop({ type: String })
  childrenStyle?: 'inner' | 'popper';

  @Prop({ type: String, default: 'inner' })
  currentStyle?: 'inner' | 'popper';

  @Prop({ type: Number, default: 0 })
  level!: number;

  @Prop({ type: Boolean, default: false })
  isFold!: boolean;

  @Prop({ type: String, required: false })
  popperKey?: string;

  @Prop({ type: Function, required: false })
  parentMouseMove?: any;

  // 弹出层不会挂载vue-router，需要传入
  @Prop({ type: Object, required: false })
  router?: any;

  // injects
  @InjectService(RxzPopperService)
  private rxzPopperService?: RxzPopperService;

  // refs

  // injectServices

  // setup

  // entity

  // computes
  get menuItems() {
    return reactive(this.setActive(this.items));
  }

  get childrenStyleCPT() {
    if (this.childrenStyle) {
      return this.childrenStyle;
    }
    return this.direction === 'vertical' && !this.isFold ? 'inner' : 'popper';
  }

  get nextLevel() {
    return this.level + 1;
  }

  get nextChildrenStyle() {
    if (this.nextLevel >= 1) {
      return 'popper';
    }
    if (this.direction === 'vertical' && this.isFold !== true) {
      return 'inner';
    }
    return 'popper';
  }

  // 弹出层不会挂载vue-router，需要传入
  get vueRouter() {
    return this.router || this.$router;
  }

  // watchs

  // hooks

  // methods
  handleClick(event: Event, item: RxzMenuItemOption) {
    if (this.childrenStyleCPT === 'inner' && item.children) {
      item.isFold = !item.isFold;
      event.preventDefault();
      return false;
    }

    if (item.onClick) {
      item.onClick();
      return this.onClickSuccess(event);
    }
    if (!this.vueRouter || !item.path || item.path.startsWith('http')) {
      return true;
    }
    this.vueRouter.push(item.path);
    return this.onClickSuccess(event);
  }

  onClickSuccess(event: Event) {
    event.preventDefault();
    if (this.popperKey) {
      this.handleMouseMove(this.popperKey)('leave');
    }
    return false;
  }

  createSubMenu(key: string, el: HTMLElement, item: RxzMenuItemOption) {
    const resKey = this.rxzPopperService?.createPopper(key, el, {
      pos: this.direction === 'horizontal' ? POPOVER_POS_E.bottomleft : POPOVER_POS_E.righttop,
      content: RxzMenu,
      contentCntProps: {
        items: item.children,
        active: this.active,
        direction: 'vertical',
        currentStyle: this.childrenStyleCPT,
        childrenStyle: this.nextChildrenStyle,
        isFold: false,
        level: this.nextLevel,
        canFold: false,
        popperKey: key,
        parentMouseMove: this.handleMouseMove,
        router: this.vueRouter,
      },
      showArrow: false,
      gap: 0,
      allowOuterClose: false,
      radius: false,
      padding: false,
      events: {
        onMouseenter: () => {
          // 它的父级菜单也应该enter
          this.handleMouseMove(key)('enter');
        },
        onMouseleave: () => {
          this.handleMouseMove(key)('leave');
        },
      },
    });
    return resKey;
  }

  openPopper(item: RxzMenuItemOption, index: number) {
    const el = (this.$refs[`item-${index}`] as any)?.[0] as HTMLElement | undefined;
    if (!el || this.childrenStyleCPT === 'inner' || !item.children) {
      return;
    }
    const key = (item as any).popperKey || _uniqueId();
    const resKey = this.createSubMenu(key, el, item);
    if (!resKey) {
      return;
    }
    setTimeout(() => {
      this.handleMouseMove(key)('enter');
    });
    (item as any).popperKey = resKey;
  }

  closePopper(item: RxzMenuItemOption) {
    const key = (item as any).popperKey;
    if (!key) {
      return;
    }
    // 不通知父菜单关闭
    this.handleMouseMove(key)('leave', false);
  }

  setActive(items: RxzMenuItemOption[]) {
    // 全都不是Nil，返回items
    if (!items.some((item) => isNil(item.active) || isNil(item.isFold))) {
      return items;
    }
    return items.map((item) => {
      let children: RxzMenuItemOption[] = [];
      if (item.children) {
        children = this.setActive(item.children);
      }
      return {
        ...item,
        isFold: false,
        active: this.active === item.key || children.some((child) => child.active),
        children: children.length ? children : undefined,
      };
    });
  }

  getArrow(item: RxzMenuItemOption) {
    if (this.direction === 'vertical' && this.childrenStyleCPT === 'popper') {
      return 'arrow-right';
    }
    if (this.direction === 'horizontal') {
      return 'arrow-down';
    }

    return item.isFold ? 'arrow-down' : 'arrow-up';
  }

  // 防抖方法
  private handleMouseMove = debounceByKey((key: string, pos: 'enter' | 'leave', notifyParent = true) => {
    if (this.popperKey && notifyParent) {
      this.parentMouseMove?.(this.popperKey)?.(pos);
    }
    if (pos === 'enter') {
      this.rxzPopperService?.showPopper(key);
    } else {
      this.rxzPopperService?.hiddenPopper(key);
    }
  }, 10);

}
