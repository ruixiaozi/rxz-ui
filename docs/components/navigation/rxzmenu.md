# RxzMenu 菜单

<TestRxzMenu></TestRxzMenu>

```vue
<template>
  <rxz-menu :items="items" active="1-3-2" :router="router"></rxz-menu>
  <p>---</p>
  <div class="verticle-unflod">
    <rxz-menu :items="items" :direction="RXZ_MENU_DIRECTION_E.vertical" active="1-3-2" :router="router"></rxz-menu>
  </div>

  <p>---</p>
  <div class="verticle-flod">
    <rxz-menu :items="items" :direction="RXZ_MENU_DIRECTION_E.vertical" :isFold="true" active="1-3-2" :router="router"></rxz-menu>
  </div>
</template>

<script setup lang="ts">
import { RxzMenuItemOption, RXZ_MENU_DIRECTION_E } from '@/components';
import { useRouter } from 'vue-router';

defineProps<{

}>();
defineEmits<{

}>();
const items: RxzMenuItemOption[] = [
  {
    name: '父菜单1',
    key: '1',
    icon: 'edit',
    onClick: () => {
      console.log(1);
    }
  },
  {
    name: '父菜单21111',
    children: [
      {
        name: '子菜单122222222222222222222222',
        key: '1-1',
      },
      {
        name: '子菜单222222222222222222222222',
        key: '1-2',
        onClick: () => {
          console.log(1);
        }
      },
      {
        name: '子菜单3',
        children: [
          {
            name: '子子菜单1',
            key: '1-3-1'
          },
          {
            name: '子子菜单2',
            children: [
              {
                name: '子子2菜单1',
                key: '1-3-2-1'
              },
              {
                name: '子子2菜单2',
                key: '1-3-2-1'
              },
              {
                name: '子子2菜单3',
                key: '1-3-2-1'
              },
              {
                name: '子子2菜单4',
                key: '1-3-2-1'
              },
            ],
            key: '1-3-2'
          },
          {
            name: '子子菜单3',
            key: '1-3-3'
          },
          {
            name: '子子菜单4',
            key: '1-3-4'
          },
        ],
        key: '1-3'
      },
      {
        name: '子菜单4',
        key: '1-4'
      },
    ],
    key: '2',
    icon: 'edit'
  },
  {
    name: '父菜单3',
    key: '3',
    icon: 'edit'
  },
  {
    name: '父菜单4',
    key: '4'
  },
];
const router = useRouter();
</script>

<style lang="scss" scoped>
.verticle-unflod {
  width: 300px;
}

.verticle-flod {
  width: fit-content;
}
</style>

```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| items           | RxzMenuItemOption[]           | 菜单数组                          | -                     | []    |     |
| active | string | 当前激活的菜单key | - | '' | |
| direction | RXZ_MENU_DIRECTION_E | 方向 | 参考RXZ_MENU_DIRECTION_E | RXZ_MENU_DIRECTION_E.horizontal | |
| isFold | Boolean | 是否折叠（仅对vertical有效） | true/false | false | |
| router | Router | vueRouter实例；如果不传入router，默认走a连接跳转 | - | - | |

## 内置数据结构

1. RxzMenuItemOption

```ts
interface RxzMenuItemOption {
  name: string;
  key: string;
  icon?: string;
  active?: boolean;
  path?: string;
  // 仅对path是外部链接有效
  target?: '_blank' | '_parent' | '_self' | '_top';
  // onClick的优先级高于path
  onClick?: (...args: any[]) => any;
  children?: RxzMenuItemOption[];
  isFold?: boolean;
}
```

2. RXZ_MENU_DIRECTION_E

```ts
enum RXZ_MENU_DIRECTION_E {
  vertical='vertical',
  horizontal='horizontal',
}
```

3. RXZ_MENU_STYLE_E

```ts
enum RXZ_MENU_STYLE_E {
  inner='inner',
  popover='popover',
}
```
