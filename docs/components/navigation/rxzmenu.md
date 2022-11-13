# RxzMenu 菜单

<TestRxzMenu></TestRxzMenu>

```vue
<template>
  <rxz-breadcrumb :breadcrumbs="breadcrumbs"></rxz-breadcrumb>
</template>
<script>
<template>
  <rxz-menu :items="items" active="1-3-2"></rxz-menu>
  <p>---</p>
  <rxz-menu :items="items" direction="vertical" active="1-3-2"></rxz-menu>
  <p>---</p>
  <rxz-menu :items="items" direction="vertical" :isFold="true" active="1-3-2"></rxz-menu>

</template>
<script lang="ts">
export default {
  data () {
    return {
      items: [
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
      ]
    }
  }
};
</script>
```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| items           | RxzMenuItemOption[]           | 菜单数组                          | -                     | []    |     |
| active | string | 当前激活的菜单key | - | '' | |
| direction | string | 方向 | 'vertical' \| 'horizontal' | 'horizontal' | |
| isFold | Boolean | 是否折叠（仅对vertical有效） | true/false | false | |
| router | Object | vueRouter实例；如果当前组件需要在弹出层中渲染，弹出层不会挂载vue-router，需要传入 | - | - | |

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
