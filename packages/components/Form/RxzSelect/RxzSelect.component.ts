import { RxzSelectList } from './../../Inner/RxzSelectList/index';
import { RxzIcon } from '@/components/Base/RxzIcon';
import { RxzFocusService } from '@/api/common/RxzFocus.service';
import { InjectService } from '@/common';
import { ref } from 'vue';
import { Options, Vue, setup } from 'vue-class-component';
import { RxzPopoverService } from '@/api/RxzPopover/RxzPopover.service';
import { POPOVER_POS_E } from '@/components/Inner/RxzPopper';
import { Model, Prop } from 'vue-property-decorator';
import { RxzSelectOptions } from './RxzSelect.declare';
import { RxzFormService } from '../RxzForm/RxzForm.service';

/**
 * Component: RxzSelect
 * @description: RxzSelect
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzSelect',
  components: {
    RxzIcon,
  },
})
export class RxzSelectCnt extends Vue {

  // props and provide
  @Prop({ type: String, default: '120px' })
  readonly width!: string;

  @Prop({ type: Array, default: () => [] })
  readonly options!: RxzSelectOptions[];

  @Model('modelValue', { required: false, default: '' })
  value!: any;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  // injects

  // refs

  // injectServices
  @InjectService(RxzFocusService)
  private rxzFocusService?: RxzFocusService;

  @InjectService(RxzPopoverService)
  private rxzPopoverService?: RxzPopoverService;

  @InjectService(RxzFormService)
  private rxzFormService!: RxzFormService;

  // setup
  tabIndex = setup(() => ref(this.rxzFocusService?.tabIndexNext() || 1));

  // 支持表单绑定，则需要将formValue的value绑定组件的值，会自动和v-model关联
  formValue = setup(() => this.rxzFormService.generateFormValue(this.$props, this.$emit));

  // entity
  isFold = true;

  popperKey: string | undefined = '';

  // computes

  // watchs

  // hooks

  // methods
  handleClick() {
    if (this.disabled) {
      return;
    }
    this.isFold = !this.isFold;
    if (!this.isFold) {
      this.openSelectList();
    } else if (this.popperKey) {
      this.rxzPopoverService?.close(this.popperKey);
    }
  }

  openSelectList() {
    this.popperKey = this.rxzPopoverService?.open({
      sourceEl: this.$el,
      pos: POPOVER_POS_E.bottomleft,
      key: this.popperKey,
      showArrow: false,
      radius: true,
      padding: false,
      content: RxzSelectList,
      contentCntProps: {
        'options': this.options,
        'modelValue': this.formValue.value,
        'style': {
          width: this.width,
        },
        'onUpdate:modelValue': (selected) => {
          this.formValue.value = selected;
          this.rxzPopoverService?.close(this.popperKey);
        },
      },
      onShowChange: (isShow: boolean) => {
        this.isFold = !isShow;
      },
    });
  }

}
