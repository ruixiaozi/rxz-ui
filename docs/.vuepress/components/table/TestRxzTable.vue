<template>
  <rxz-table :tableConfig="tableConfig"></rxz-table>
</template>
<script lang="ts">
const data = {
  total: 5,
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
            label: "说明",
          },
        ],
        getData() {
          return data;
        },
      },
    };
  },
};
</script>
