# RxzInput 输入框

<TestRxzInput></TestRxzInput>

```vue
<template>
  <rxz-input v-model="data"></rxz-input>
  <p>输入：{{ data }}</p>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
```

## v-model

| 名称                  | 类型  | 描述                       | 可选值 | 必须  |
| ------------------- | --- | ------------------------ | --- | --- |
| modelValue(default) | String | 绑定数据 | -   |     |

## Attribute 属性

| 参数         | 类型      | 描述              | 可选值        | 默认值     | 必须  |
| ---------- | ------- | --------------- | ---------- | ------- | --- |
| modelValue | String     | 绑定数据            | -          | -      |     |
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
| copy | 复制事件  | 事件    |
| paste | 粘贴事件  | 事件    |
| blur | blur事件  | 事件    |

## Slot 具名插槽

| 插槽名称    | 描述     | 作用域对象 |
| ------- | ------ | ----- |
| infront | 内部前置插槽 | -     |
| inrear  | 内部后置插槽 | -     |

## Example 案例

### 1. 使用bindingValue

祖先组件通过 registerBindingValue 注册binding值，input进行自动绑定

---

<TestRxzInputExp1></TestRxzInputExp1>

```vue
<template>
  <div>
    <rxz-input></rxz-input>
  </div>
  <p>输入：{{ data }}</p>
</template>

<script setup lang="ts">
import { useRxzBindingWithinSetup } from '@/use';
import { ref } from 'vue';
defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
useRxzBindingWithinSetup().registerBindingValue(data);
</script>

<style lang="scss" scoped>

</style>
```

### 2. 可清除

---

<TestRxzInputExp2></TestRxzInputExp2>

```vue
<template>
  <rxz-input v-model="data" clear></rxz-input>
  <p>输入：{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
```

### 3. 禁用

---

<TestRxzInputExp3></TestRxzInputExp3>

```vue
<template>
  <rxz-input v-model="data" disabled>
    <template v-slot:infront>
      <rxz-icon name="user"></rxz-icon>
    </template>
  </rxz-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
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

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
```

### 5. 显示Capslock状态

---

<TestRxzInputExp5></TestRxzInputExp5>

```vue
<template>
  <rxz-input v-model="data" capslock></rxz-input>
  <p>输入：{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
```

### 6. 密码框

---

<TestRxzInputExp6></TestRxzInputExp6>

```vue
<template>
  <rxz-input v-model="data" password></rxz-input>
  <p>输入：{{ data }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>

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

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{

}>();
defineEmits<{

}>();
const data = ref('');
</script>

<style lang="scss" scoped>

</style>
```