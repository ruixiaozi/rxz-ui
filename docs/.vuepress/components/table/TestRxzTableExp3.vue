<template>
  <rxz-table :tableConfig="tableConfig"></rxz-table>
</template>

<script setup lang="ts">
import { RxzTableConfig, RxzTableData, RxzTableFilter, RXZ_TABLE_CELL_RENDER_TYPE_E } from '@/components/table';

const data = {
  total: 3,
  datas: [
    {
      name: "大白菜1",
      price: 500,
      owner: "张三",
      url: "http://baidu.com",
      operation: "123",
    },
    {
      name: "大白菜2",
      price: 500,
      owner: "张三",
      url: "http://baidu.com",
      operation: "123",
    },
    {
      name: "大白菜3",
      price: 500,
      owner: "张三",
      url: "http://baidu.com",
      operation: "123",
    },
  ],
};
defineProps<{

}>();
defineEmits<{

}>();
const tableConfig: RxzTableConfig = {
  columns: [
    {
      key: "name",
      label: "名称",
    },
    {
      key: "name",
      label: "连接",
      cellRender: {
        type: RXZ_TABLE_CELL_RENDER_TYPE_E.LINK,
        config: {
          urlKey: "url",
          isBlank: true,
        }
      }
    },
    {
      key: "price",
      label: "价格",
    },
    {
      key: "owner",
      label: "所有者",
    },
    {
      key: "operation",
      label: "说明",
    },
  ],
  getData(filter: RxzTableFilter) {
    const { paginations, sorts } = filter;
    return new Promise<RxzTableData>((resolve) => {
      setTimeout(() => {
        let newDatas = [...data.datas];
        if (paginations) {
          const startIndex = paginations.page * paginations.pageSize;
          const endIndex = startIndex + paginations.pageSize;
          newDatas = newDatas.slice(startIndex, endIndex);
        }
        resolve({
          total: data.total,
          datas: newDatas,
        });
      }, 1000);
    })
  },
  paginations: {
    pageSize: 5,
  },
};
</script>

<style lang="scss" scoped>

</style>
