# RxzTable 表格

<TestRxzTable></TestRxzTable>


```vue
<template>
  <rxz-table :tableConfig="tableConfig"></rxz-table>
</template>

<script setup lang="ts">
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
  getData() {
    return data;
  }
};
</script>

<style lang="scss" scoped>

</style>

```

## Attribute 属性

| 参数         | 类型                                | 描述              | 可选值                 | 默认值      | 必须  |
| ---------- | --------------------------------- | --------------- | ------------------- | -------- | --- |
| tableConfig | RxzTableConfig                   | 表格配置          | -                   | -       |   是  |


## 内置数据结构

1. RxzPaginations 

```ts
interface RxzTableConfig {
  columns: RxzColumn[];
  // 启用内部过滤、分页，常用于前端过滤
  innerFilter?: boolean;
  // 禁用自带loading
  disableLoading?: boolean;
  // 如果不存在该属性则不开启分页
  paginations?: {
    pageSize: number;
  };
  // 如果启用内部过滤，过滤条件变化，不会触发getData
  getData: (filter: RxzTableFilter) => Promise<RxzTableData> | RxzTableData;
}
```

2. RxzColumn 

```ts
export interface RxzColumn {
  key: string;
  label: string;
  // 启用排序
  sort?: boolean;
  // 单元渲染
  cellRender?: RxzTableCellRenderConfig;
}

export type RxzTableCellRenderConfig = {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.DATAMAP,
  // datamap的key
  config: string;
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.I18N,
  config?: undefined;
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.LINK,
  config: {
    // urlKey，行数据中，保存url的key
    urlKey?: string;
    // 指定特定url，指定了url，urlkey不生效
    url?: string;
    // 指定text
    text?: string;
    // 是否新窗口打开，默认当前窗口
    isBlank?: boolean;
  };
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.COMPONENT,
  config: {
    // 需要暴露value prop用于接收当前单元的值
    cnt: Component,
  };
};

```

3. RxzColumn 

```ts
interface RxzTableFilter {
  sorts: {[key: string]: RXZ_TABLE_COLUMN_DIRECTION_ENUM};
  // 分页信息，见RxzPagination组件
  paginations?: RxzPaginations;
}
```

4. RXZ_TABLE_COLUMN_DIRECTION_ENUM 

```ts
enum RXZ_TABLE_COLUMN_DIRECTION_ENUM {
  DESC='desc',
  ASC='asc',
}
```

5. RxzTableData 

```ts
interface RxzTableData {
  total: number;
  datas: any[];
}
```

## Example 案例

### 1. 前端分页与排序

---

<TestRxzTableExp1></TestRxzTableExp1>

```vue
<template>
  <rxz-table :tableConfig="tableConfig"></rxz-table>
</template>

<script setup lang="ts">
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
  getData() {
    return data;
  },
  paginations: {
    pageSize: 5,
  },
  innerFilter: true,
};
</script>

<style lang="scss" scoped>

</style>

```


### 2. 后端分页

<TestRxzTableExp2></TestRxzTableExp2>

```vue
<template>
  <rxz-table :tableConfig="tableConfig"></rxz-table>
</template>

<script setup lang="ts">
import { RxzTableData, RxzTableFilter } from '@/components/table';

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
</script>

<style lang="scss" scoped>

</style>

```




### 3. CellRender

<TestRxzTableExp3></TestRxzTableExp3>

```vue
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


```