<template>
  <div class="rxz-table-container" v-rxz-loading="!tableConfig.disableLoading && showLoading">
    <table class="rxz-table">
      <thead>
        <tr>
          <th v-for="item in tableConfig.columns" :key="item.key">
            <div class="rxz-table-title">
              <span>{{ item.label }}</span>
              <span
                v-if="item.sort"
                @click="handleSort(item.key)"
                class="rxz-table-title-sort"
              >
                <rxz-icon
                  class="rxz-table-title-sort-up"
                  :class="{
                    enable: filter.sorts?.[item.key] === 'desc',
                  }"
                  name="arrow-up-solid"
                  :size="12"
                ></rxz-icon>
                <rxz-icon
                  class="rxz-table-title-sort-down"
                  :class="{
                    enable: filter.sorts?.[item.key] === 'asc',
                  }"
                  name="arrow-down-solid"
                  :size="12"
                ></rxz-icon>
              </span>
            </div>
            <div class="rxz-table-split">
              <span class="rxz-table-split-t"></span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datas" :key="startIndex + index">
          <td v-for="col in tableConfig.columns" :key="col.key + (startIndex + index)">
            <span v-if="col.cellRender">
              <RxzTableCellRender :index="startIndex + index" :row-data="item" :column-key="col.key" :config="col.cellRender"></RxzTableCellRender>
            </span>
            <span v-else>{{ item[col.key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <RxzPagination
      v-if="tableConfig.paginations && filter.paginations"
      v-model="filter.paginations"
    ></RxzPagination>
  </div>
</template>

<script setup lang="ts">
import { RxzPagination } from '@/components/advance';
import { vRxzLoading } from '@/directives';
import { comparator } from '@/utils';
import { isArray, isNumber, omit } from 'lodash';
import { defineProps, defineEmits, defineExpose, reactive, ref, watch, computed, onMounted } from 'vue';
import { RxzTableCellRender } from '../RxzTableCellRender';
import define, { RxzTableFilter, RXZ_TABLE_COLUMN_DIRECTION_ENUM } from './RxzTable.define';
const props = defineProps(define.rxzTableProps);
defineEmits(define.rxzTableEmits);

const filter = reactive<RxzTableFilter>({
  sorts: props.tableConfig.initFilter?.sorts || {},
  paginations: props.tableConfig.initFilter?.paginations || {
    page: 0,
    pageSize: 0,
    total: 0,
  },
  conditions: props.tableConfig.initFilter?.conditions || {},
});

const startIndex = computed(() => (filter.paginations?.page || 0) * (filter.paginations?.pageSize || 10));

const datas = ref<any[]>([]);

// 用于缓存前端分页的所有数据
const cacheDatas = ref<any[]>([]);

const showLoading = ref(false);

watch(() => props.tableConfig.paginations?.pageSize, () => {
  if (filter.paginations && props.tableConfig.paginations) {
    filter.paginations.pageSize = props.tableConfig.paginations.pageSize;
  }
}, { immediate: true });

// 前端过滤
const innerResolveData = () => {
  const { paginations, sorts, conditions } = filter;
  const sortsEntities = Object.entries(sorts);
  // 内部过滤简单的全部条件相等处理
  let data = cacheDatas.value.filter((item) => Object.entries(conditions).every(([key, value]) => item[key] === value));
  if (sortsEntities.length > 0) {
    data = data.sort((dataA, dataB) => {
      let cmpRes = 0;
      for (const [key, direction] of Object.entries(sorts)) {
        cmpRes = comparator(dataA[key], dataB[key], direction === RXZ_TABLE_COLUMN_DIRECTION_ENUM.DESC);
        if (cmpRes) {
          return cmpRes;
        }
      }
      return cmpRes;
    });
  }
  // 仅开启分页才处理
  if (props.tableConfig.paginations && paginations) {
    const endIndex = startIndex.value + paginations.pageSize;
    data = data.slice(startIndex.value, endIndex);
  }
  datas.value = data;
};

const resolveData = (first?: boolean) => {
  // 非第一次获取数据，且是内部过滤，不触发数据的获取
  if (!first && props.tableConfig.innerFilter) {
    innerResolveData();
    return;
  }
  // 开启分页才传入分页的参数
  const _filter = props.tableConfig.paginations
    ? { ...filter }
    : omit(filter, 'paginations');
  showLoading.value = true;
  Promise.resolve(props.tableConfig.getData(_filter))
    .then((tableData) => {
      if (isNumber(tableData.total) && isArray(tableData.datas)) {
        if (filter.paginations) {
          filter.paginations.total = tableData.total;
        }
        if (props.tableConfig.innerFilter) {
          cacheDatas.value = tableData.datas;
          innerResolveData();
        } else {
          datas.value = tableData.datas;
        }
      }
    })
    .finally(() => {
      showLoading.value = false;
    });
};

const handleSort = (key: string) => {
  if (!filter.sorts) {
    filter.sorts = {};
  }
  const direction = filter.sorts[key];
  if (direction === RXZ_TABLE_COLUMN_DIRECTION_ENUM.ASC) {
    filter.sorts[key] = RXZ_TABLE_COLUMN_DIRECTION_ENUM.DESC;
  } else if (direction === RXZ_TABLE_COLUMN_DIRECTION_ENUM.DESC) {
    delete filter.sorts[key];
  } else {
    filter.sorts[key] = RXZ_TABLE_COLUMN_DIRECTION_ENUM.ASC;
  }
  resolveData();
};

watch(() => filter.paginations?.page, () => {
  resolveData();
});


onMounted(() => {
  resolveData(true);
});

defineExpose({
  // 暴露刷新api
  refresh: () => {
    resolveData();
  },
  // 暴露查询api
  query: (_conditions?: any) => {
    if (_conditions) {
      filter.conditions = _conditions;
    }
    resolveData();
  },
});

</script>

<style lang="scss" scoped>
@import "./RxzTable.scss";
</style>
