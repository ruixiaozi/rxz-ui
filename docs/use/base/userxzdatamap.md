# useRxzDataMap 数据映射

## 介绍

使用数据映射Use，可以实现快速的表映射，减少代码中的判断逻辑。

引入组件时添加dataMaps选项，可以添加自定义映射表：

```ts
app.use(RxzUI, {
  dataMaps: {
    TESK_STATUS: {
      0: {
        lable: '成功',
        value: 0,
      },
      1: {
        lable: '失败',
        value: 1,
      },
    },
  },
} as RxzOption);
```

dataMaps的接口定义：

```ts
interface RxzDataMapItem {
  lable: string;
  value: string | number;
  [key: string]: any;
}
interface RxzDataMap {
  [key: string]: {
    // 此value与item中的value一一对应
    [value in string | number]: RxzDataMapItem;
  };
}
```

引入dataMap：

```ts
import { useRxzDataMap } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzDataMap();
```

## API

### 1. appendDataMap

  方法签名：

  ```ts
  /**
   * 添加数据映射对象，将新的映射表合并入之前的映射表，同名将被覆盖
   * @param newDataMpas 映射表对象
   */
  function appendDataMap: (newDataMpas: RxzDataMap) => void;
  ```

### 2. getDataMapLabel

  方法签名：

  ```ts
  /**
   * 获取datamap的label
   * @param key 映射key
   * @param value 映射值
   * @param isSource 是否不进行i18n转换
   * @returns 返回label值或者转换后的值
   */
  function getDataMapLabel: (key: string, value: string | number, isSource?: boolean | undefined) => string;
  ```

### 3. toDataMapArray

  方法签名：

  ```ts
  /**
   * 将映射转换为数组格式
   * @param key 映射key
   * @param isSource 是否不进行i18n转换
   * @returns 映射数组
   */
  function toDataMapArray: (key: string, isSource?: boolean | undefined) => RxzDataMapItem[];
  ```

### 4. toDataMapValueArray

  方法签名：

  ```ts
  /**
   * 将映射转换为值数组格式
   * @param key 映射key
   * @returns 值数组
   */
  function toDataMapValueArray: (key: string) => string[];
  ```

## 使用案例

  <TestRxzDataMap></TestRxzDataMap>

  在引入UI库时添加dataMaps选项：

  ```ts
  import { createApp } from 'vue'
  import { RxzUI, RxzOption } from 'rxz-ui';
  import 'rxz-ui/lib/rxz-ui.css';
  import App from './App.vue';

  const app = createApp(App);
  app.use(RxzUI, {
    dataMaps: {
      TESK_STATUS: {
        0: {
          lable: '成功',
          value: 0,
        },
        1: {
          lable: '失败',
          value: 1,
        },
      },
    },
  } as RxzOption);
  app.mount('#app');
  ```

  ```vue
  <template>
    <div>
      <rxz-form :form-config="formConfig" v-model="data">
        <rxz-form-item name="key">
          <rxz-label>key</rxz-label>
          <rxz-input></rxz-input>
        </rxz-form-item>
        <rxz-form-item name="value">
          <rxz-label>value</rxz-label>
          <rxz-input></rxz-input>
        </rxz-form-item>
      </rxz-form>
      <rxz-button @click="handleGetLabel">getLabel</rxz-button>
      <rxz-button @click="handleToArray">toArray</rxz-button>
      <rxz-button @click="handleToValueArray">toValueArray</rxz-button>
      <div>
        {{ result }}
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { useRxzDataMap } from '@/use';
  import { ref } from 'vue';

  defineProps<{

  }>();
  defineEmits<{

  }>();
  const formConfig = {
    key: {
      validators: [],
      default: 'TESK_STATUS',
    },
    value: {
      validators: [],
      default: '0',
    },
  };
  const data = ref<any>({});
  const result = ref<any>();
  const { getDataMapLabel, toDataMapArray, toDataMapValueArray } = useRxzDataMap();
  const handleGetLabel = () => result.value = getDataMapLabel(data.value.key, data.value.value);
  const handleToArray = () => result.value = toDataMapArray(data.value.key);
  const handleToValueArray = () => result.value = toDataMapValueArray(data.value.key);

  </script>

  <style lang="scss" scoped>

  </style>


  ```
