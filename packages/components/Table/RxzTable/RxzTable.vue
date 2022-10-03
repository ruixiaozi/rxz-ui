<template>
  <div v-rxz-loading="!tableConfig.disableLoading && showLoading">
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
                  name="arrow-up"
                  :size="12"
                ></rxz-icon>
                <rxz-icon
                  class="rxz-table-title-sort-down"
                  :class="{
                    enable: filter.sorts?.[item.key] === 'asc',
                  }"
                  name="arrow-down"
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
        <tr v-for="(item, index) in datas" :key="index">
          <td v-for="col in tableConfig.columns" :key="col.key + index">
            {{ item[col.key] }}
          </td>
        </tr>
      </tbody>
    </table>
    <rxz-pagination
      v-if="tableConfig.paginations && filter.paginations"
      v-model="filter.paginations"
    ></rxz-pagination>
  </div>
</template>

<script lang="ts">
import { RxzTableCnt } from './RxzTable.component';
export default RxzTableCnt;
</script>

<style lang="scss" scoped>
@import "./RxzTable.scss";
</style>
