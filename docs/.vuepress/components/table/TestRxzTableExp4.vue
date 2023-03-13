<template>
  <rxz-button @click="handleRefresh">刷新</rxz-button>
  <rxz-table ref="table" :tableConfig="tableConfig"></rxz-table>
</template>

<script setup lang="ts">
import { RxzTable, RxzTableData, RxzTableFilter } from '@/components/table';
import { ref } from 'vue';

const data = {
  total: 11,
  datas: [
    {
      name: "大白菜1",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜2",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜3",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜4",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜5",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜6",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜7",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜8",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜9",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜10",
      price: 500,
      owner: "张三",
      operation: "123",
    },
    {
      name: "大白菜11",
      price: 500,
      owner: "张三",
      operation: "123",
    },
  ],
};
defineProps<{

}>();
defineEmits<{

}>();
const tableConfig = {
  columns: [
    {
      key: "name",
      label: "名称",
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
const table = ref<InstanceType<typeof RxzTable>>()
const handleRefresh = () => {
  table.value?.refresh();
};
</script>

<style lang="scss" scoped>

</style>
