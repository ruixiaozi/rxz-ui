# $RxzDataMap 数据映射

<TestRxzDataMap></TestRxzDataMap>

----

在引入的时候添加选项

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
        value: 0
      },
      1: {
        lable: '失败',
        value: 1
      }
    }
  }
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
<script>
import { RxzValidators } from '@/definition';

export default {
  data() {
    return {
      formConfig: {
        key: {
          validators: [RxzValidators.required],
          default: '',
        },
        value: {
          validators: [],
          default: '',
        },
      },
      data: {},
      result: ''
    }
  },
  methods: {
    handleGetLabel() {
      this.result = this.$RxzDataMap.getLabel(this.data.key, this.data.value);
    },
    handleToArray() {
      this.result = this.$RxzDataMap.toArray(this.data.key);
    },
    handleToValueArray() {
      this.result = this.$RxzDataMap.toValueArray(this.data.key);
    }
  }
};
</script>
```

## Function 方法

1. appendMap(newDataMpas: RxzDataMap): void  
   
   + 描述：附加新的数据映射，相同的字段会覆盖
   
   + 参数：
     
     + newDataMpas 新的数据映射对象
   
   + 返回值：void

2. getLabel(key: string, value: string | number, isSource?: boolean): String 
   
   + 描述：获取指定label，默认自动进行国际化转换
   
   + 参数：
     + key 映射的key
     + value 数据值
     + isSource 是否不进行国际化转换，默认false
   
   + 返回值：返回对应key下对应value的label

3. toArray(key: string, isSource?: boolean): Array\<RxzDataMapItem\> 
   
   + 描述：获取指定映射数组，默认自动进行label国际化转换
   
   + 参数：
     + key 映射的key
     + isSource label是否不进行国际化转换，默认false
   
   + 返回值：返回对应key下映射数组

4. toValueArray(key: string): Array\<string | number\> 
   
   + 描述：获取指定映射的value数组
   
   + 参数：
     + key 映射的key
   
   + 返回值：返回对应key下映射value数组
  

## 内置数据结构

1. RxzDataMapItem

``` ts
interface RxzDataMapItem {
  lable: string;
  value: string | number;
  [key: string]: any;
}
```

2. RxzDataMap

``` ts
interface RxzDataMap {
  [key: string]: {
    // 此value与item中的value一一对应
    [value: string | number]: RxzDataMapItem;
  };
}
```
