import { RxzLoadingDirective } from '@/directives/RxzLoadingDirective';
import { RxzPagination } from '@/components/Base/RxzPagination/index';
import { Options, Vue } from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { isArray as _isArray, isNumber as _isNumber, omit as _omit } from 'lodash';
import { getService, InjectService } from '@/common';
import { RxzUtilsService } from '@/common/RxzUtils.service';
import { COLUMN_DIRECTION_ENUM, RxzTableConfig, RxzTableFilter } from './RxzTable.declare';

const rxzLoadingDirective = getService(RxzLoadingDirective);

/**
 * Component: RxzTable
 * @description: RxzTable
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzTable',
  components: {
    RxzPagination,
  },
  directives: {
    [rxzLoadingDirective.name]: rxzLoadingDirective,
  },
})
export class RxzTableCnt extends Vue {

  // props and provide
  @Prop({ type: Object, required: true })
  readonly tableConfig!: RxzTableConfig;

  // injects

  // refs

  // injectServices
  @InjectService(RxzUtilsService)
  private rxzUtilsService?: RxzUtilsService;

  // setup

  // entity
  filter: RxzTableFilter = {
    sorts: {},
    paginations: {
      page: 0,
      pageSize: 0,
      total: 0,
    },
  };

  datas: any[] = [];

  // 用于缓存前端分页的所有数据
  cacheDatas: any[] = [];

  showLoading = false;

  // computes

  // watchs
  @Watch('tableConfig.paginations.pageSize', { immediate: true })
  onPageSizeChange() {
    if (this.filter.paginations && this.tableConfig.paginations) {
      this.filter.paginations.pageSize = this.tableConfig.paginations.pageSize;
    }
  }

  @Watch('filter.paginations.page')
  onPageChange() {
    this.resolveData();
  }

  // hooks
  created() {
    this.resolveData(true);
  }

  // methods
  handleSort(key: string) {
    if (!this.filter.sorts) {
      this.filter.sorts = {};
    }
    const direction = this.filter.sorts[key];
    if (direction === COLUMN_DIRECTION_ENUM.ASC) {
      this.filter.sorts[key] = COLUMN_DIRECTION_ENUM.DESC;
    } else if (direction === COLUMN_DIRECTION_ENUM.DESC) {
      delete this.filter.sorts[key];
    } else {
      this.filter.sorts[key] = COLUMN_DIRECTION_ENUM.ASC;
    }
    this.resolveData();
  }

  resolveData(first?: boolean) {
    // 非第一次获取数据，且是内部过滤，不触发数据的获取
    if (!first && this.tableConfig.innerFilter) {
      this.innerResolveData();
      return;
    }
    // 开启分页才传入分页的参数
    const filter = this.tableConfig.paginations
      ? { ...this.filter }
      : _omit(this.filter, 'paginations');
    this.showLoading = true;
    Promise.resolve(this.tableConfig.getData(filter))
      .then((tableData) => {
        if (_isNumber(tableData.total) && _isArray(tableData.datas)) {
          if (this.filter.paginations) {
            this.filter.paginations.total = tableData.total;
          }
          if (this.tableConfig.innerFilter) {
            this.cacheDatas = tableData.datas;
            this.innerResolveData();
          } else {
            this.datas = tableData.datas;
          }
        }
      })
      .finally(() => {
        this.showLoading = false;
      });
  }

  // 前端过滤
  innerResolveData() {
    const { paginations, sorts } = this.filter;
    const sortsEntities = Object.entries(sorts);
    let data = [...this.cacheDatas];
    if (sortsEntities.length > 0) {
      data = data.sort((dataA, dataB) => {
        let cmpRes = 0;
        for (const [key, direction] of Object.entries(sorts)) {
          cmpRes = this.rxzUtilsService?.comparator(dataA[key], dataB[key], direction === COLUMN_DIRECTION_ENUM.DESC) ?? 0;
          if (cmpRes) {
            return cmpRes;
          }
        }
        return cmpRes;
      });
    }
    // 仅开启分页才处理
    if (this.tableConfig.paginations && paginations) {
      const startIndex = paginations.page * paginations.pageSize;
      const endIndex = startIndex + paginations.pageSize;
      data = data.slice(startIndex, endIndex);
    }
    this.datas = data;
  }

}
