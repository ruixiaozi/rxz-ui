# RxzInput 输入框

<TestRxzInput></TestRxzInput>

```vue
<template>
  <rxz-input v-model="data"></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | any | 绑定数据（非form下必须，form下自动绑定） | -   |     |

## Attribute 属性

| 参数         | 类型      | 描述              | 可选值        | 默认值     | 必须  |
| ---------- | ------- | --------------- | ---------- | ------- | --- |
| modelValue | any     | 绑定数据            | -          | ''      |     |
| disabled   | Boolean | 禁用              | true/false | false   |     |
| clear      | Boolean | 可清除             | true/false | false   |     |
| width      | String  | 宽度（form下占具剩余宽度） | -          | '250px' |     |
| capslock   | Boolean | 是否显示Capslock状态  | true/false | false   |     |
| password   | Boolean | 是否为密码框          | true/false | false   |     |
| paste      | Boolean | 是否允许粘贴          | true/false | true    |     |
| copy       | Boolean | 是否允许复制          | true/false | true    |     |

## Event 事件

| 事件名称              | 描述  | 回调参数列表 |
| ----------------- | --- | ------ |
| update:modelValue | 更新  | 更新值    |

## Slot 具名插槽

| 插槽名称    | 描述     | 作用域对象 |
| ------- | ------ | ----- |
| infront | 内部前置插槽 | -     |
| inrear  | 内部后置插槽 | -     |

## Example 案例

### 1. form下使用

---

<TestRxzInputExp1></TestRxzInputExp1>

```vue
<template>
  <rxz-form :form-config="formConfig" v-model="data">
    <rxz-form-item name="test" :error-tip="{'required': 'error required'}">
      <rxz-label>Label</rxz-label>
      <rxz-input></rxz-input>
    </rxz-form-item>
  </rxz-form>
</template>
<script>
import { RxzValidators } from 'rxz-ui';
export default {
  data () {
    return {
      formConfig: {
        test: {
          validators: [RxzValidators.required],
          default: '',
        },
      },
      data: {
        test: ''
      }
    }
  },
}
</script>
```

### 2. 可清除

---

<TestRxzInputExp2></TestRxzInputExp2>

```vue
<template>
  <rxz-input v-model="data" clear></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

### 3. 禁用

---

<TestRxzInputExp3></TestRxzInputExp3>

```vue
<template>
  <rxz-input v-model="data" disabled></rxz-input>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

### 4. 内部前后内容

---

<TestRxzInputExp4></TestRxzInputExp4>

```vue
<template>
  <rxz-input v-model="data">
    <template v-slot:infront>
      <rxz-icon name="user"></rxz-icon>
    </template>
    <template v-slot:inrear>
      <rxz-icon name="edit"></rxz-icon>
    </template>
  </rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

### 5. 显示Capslock状态

---

<TestRxzInputExp5></TestRxzInputExp5>

```vue
<template>
  <rxz-input v-model="data" capslock></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

### 6. 密码框

---

<TestRxzInputExp6></TestRxzInputExp6>

```vue
<template>
  <rxz-input v-model="data" password></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```

### 7. 复制粘贴

---

<TestRxzInputExp7></TestRxzInputExp7>



``` vue
<template>
  <p>禁止粘贴：</p>
  <rxz-input v-model="data" :paste="false"></rxz-input>
  <p>禁止复制：</p>
  <rxz-input v-model="data" :copy="false"></rxz-input>
</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
}
</script>
```