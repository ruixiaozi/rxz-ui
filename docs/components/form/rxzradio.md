# RxzRadio 单选按钮

<TestRxzRadio></TestRxzRadio>

```vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
</template>
<script>
export default {
  data () {
    return {
      data: null,
      items: [
        {
          label: '选项A',
          value: 1,
        },
        {
          label: '选项B',
          value: 2,
        }
      ]
    }
  },
  created() {
    this.data = this.items[0];
  }
}
</script>
```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | any | 绑定数据（非form下必须，form下自动绑定） | -   |     |

## Attribute 属性

| 参数         | 类型                       | 描述   | 可选值                 | 默认值        | 必须  |
| ---------- | ------------------------ | ---- | ------------------- | ---------- | --- |
| modelValue | any                      | 绑定数据 | -                   | ''         |     |
| items      | Arrary\<RxzRadioItem\>   | 选择项  | -                   | []         |     |
| direction  | String \| DIRECTION_ENUM | 排列方向 | vertical/horizontal | horizontal |     |
| disabled   | Boolean                  | 禁用   | true/false          | false      |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## Example 案例

### 1. 排列方向

---

<TestRxzRadioExp1></TestRxzRadioExp1>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data"></rxz-radio>
  <p>--垂直排列--</p>
  <rxz-radio :items="items" v-model="data" direction="vertical"></rxz-radio>
</template>
<script>
export default {
  data () {
    return {
      data: null,
      items: [
        {
          label: '选项A',
          value: 1,
        },
        {
          label: '选项B',
          value: 2,
        }
      ]
    }
  },
  created() {
    this.data = this.items[0];
  }
}
</script>
```

### 2. 禁用

---

<TestRxzRadioExp2></TestRxzRadioExp2>

``` vue
<template>
  <p>当前选择：{{ data }}</p>
  <rxz-radio :items="items" v-model="data" disabled></rxz-radio>
</template>
<script>
export default {
  data () {
    return {
      data: null,
      items: [
        {
          label: '选项A',
          value: 1,
        },
        {
          label: '选项B',
          value: 2,
        }
      ]
    }
  },
  created() {
    this.data = this.items[0];
  }
}
</script>
```

### 3. 在form中使用

---

<TestRxzRadioExp3></TestRxzRadioExp3>

``` vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label：</rxz-label>
      <rxz-radio :items="items"></rxz-radio>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from '@/definition';
export default {
  data () {
    return {
      items: [
        {
          label: '选项A',
          value: 1,
        },
        {
          label: '选项B',
          value: 2,
        }
      ],
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: {
            label: '选项A',
            value: 1,
          },
        },
      },
      data: {}
    }
  },
}
</script>
```
