
<template>
  <rxz-table :tableConfig="tableConfig"></rxz-table>
</template>
<script lang="ts">
import { RxzTableFilter } from '@/components/Table';
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

export default {
  data() {
    return {
      tableConfig: {
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
            label: "操作",
          },
        ],
        getData(filter: RxzTableFilter) {
          const { paginations, sorts } = filter;
          return new Promise((resolve) => {
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
      },
    };
  },
};
</script>
