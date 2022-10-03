import { RxzInput } from './../../Form/RxzInput/index';
import { RxzButton } from '../RxzButton/index';
import { RxzIcon } from './../RxzIcon/index';
import { Options, Vue } from 'vue-class-component';
import { Model, Prop, Watch } from 'vue-property-decorator';
import { isString as _isString } from 'lodash';
import { PAGE_E, RxzPaginations } from './RxzPagination.declare';
import { effect } from 'vue';


/**
 * Component: RxzPagination
 * @description: RxzPagination
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzPagination',
  components: {
    RxzIcon,
    RxzButton,
    RxzInput,
  },
})
export class RxzPaginationCnt extends Vue {

  // props and provide

  // 页码的起始数字，默认为0
  @Prop({ type: Number, default: 0 })
  readonly pageStart!: number;

  // 显示的起始数字，默认为1
  @Prop({ type: Number, default: 1 })
  readonly displayStart!: number;

  @Model('modelValue', { type: Object, required: true })
  paginations!: RxzPaginations;

  // injects

  // refs

  // injectServices

  // setup

  // entity
  gotoNum = 0;

  // computes
  get pageEnd() {
    if (this.paginations.pageSize <= 0) {
      return 0;
    }
    return Math.ceil(this.paginations.total / this.paginations.pageSize) - 1 + this.pageStart;
  }

  get diffStart() {
    return this.displayStart - this.pageStart;
  }

  get pages() {
    if (this.pageStart > this.pageEnd) {
      return [];
    }

    const pages: any[] = [this.pageStart];
    if (this.pageStart === this.pageEnd) {
      return pages;
    }

    let start = this.paginations.page - 2;
    if (start - 1 <= this.pageStart) {
      start = this.pageStart + 1;
    } else {
      pages.push(PAGE_E.FAST_BACK);
    }

    let end = this.paginations.page + 2;
    const endArr: any[] = [this.pageEnd];
    if (end + 1 >= this.pageEnd) {
      end = this.pageEnd - 1;
    } else {
      endArr.unshift(PAGE_E.FAST_FORWARD);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    pages.push(...endArr);
    return pages;
  }

  // watchs
  @Watch('paginations.page', { immediate: true })
  onPageChange() {
    this.gotoNum = this.paginations.page + this.diffStart;
  }

  // hooks
  created() {
    effect(() => {
      if (this.paginations.page > this.pageEnd) {
        this.paginations.page = this.pageEnd;
      } else if (this.paginations.page < this.pageStart) {
        this.paginations.page = this.pageStart;
      }
    }, {
      lazy: true,
    });
    // 副作用：保证当前分页不超出范围
    /*  */
  }

  // methods
  back() {
    if (this.paginations.page <= this.pageStart) {
      return;
    }
    this.paginations.page--;
  }

  forward() {
    if (this.paginations.page >= this.pageEnd) {
      return;
    }
    this.paginations.page++;
  }

  go(page: number | string) {
    // 快进、快退
    if (_isString(page) && Object.values(PAGE_E).includes(page as PAGE_E)) {
      this.paginations.page += (page === PAGE_E.FAST_BACK ? -1 : 1) * 3;
      return;
    }

    let realPage = Number(page);

    // 非数字不跳转，并恢复到当前页
    if (Number.isNaN(realPage)) {
      this.onPageChange();
      return;
    }

    // 跳转不能越界
    if (realPage > this.pageEnd) {
      realPage = this.pageEnd;
    } else if (realPage < this.pageStart) {
      realPage = this.pageStart;
    }

    this.paginations.page = realPage;
    this.onPageChange();
  }

}
