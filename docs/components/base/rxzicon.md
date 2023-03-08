# RxzIcon 图标

图标名称参考： [ICON](../../icon/) 页面

自定义图标参考：[添加自定义图标](../../icon/#添加自定义图标) 

 <rxz-icon></rxz-icon>

```vue
 <rxz-icon></rxz-icon>
```

## Attribute 属性

| 参数      | 类型      | 描述                             | 可选值        | 默认值    | 必须  |
| ------- | ------- | ------------------------------ | ---------- | ------ | --- |
| name    | String  | 样式名称（[ICON](../../icon/) 页面查找) | -          | search |     |
| size    | Number  | 大小                             | 像素值        | 24     |     |
| spinner | Boolean | 是否旋转                           | true/false | false  |     |
| step    | Number  | 旋转步长（仅旋转时有效）                   | 非0数字，角度值   | 1      |     |
| rotate  | String  | 翻转角度                           | -          | 0      |     |
| type  | String \| RXZ_ICON_TYPE_ENUM  | 图标类型                           | 参考RXZ_ICON_TYPE_ENUM        | default      |     |

## 内置数据结构

1. RXZ_ICON_TYPE_ENUM

```ts
export enum RXZ_ICON_TYPE_ENUM {
  default='default',
  success='success',
  information='information',
  warning='warning',
  error='error',
}
```

## Example 案例

### 1. 旋转

---

<rxz-icon name="loading" spinner></rxz-icon>

```vue
 <rxz-icon name="loading" spinner></rxz-icon>
```

### 2. 旋转步长

---

<rxz-icon name="loading" spinner :step="45"></rxz-icon>

```vue
 <rxz-icon name="loading" spinner :step="45"></rxz-icon>
```

### 3. 翻转角度

---

<rxz-icon name="refresh"></rxz-icon>
<rxz-icon name="refresh" :rotate="90"></rxz-icon>

```vue
<rxz-icon name="refresh"></rxz-icon>
<rxz-icon name="refresh" :rotate="90"></rxz-icon>
```

### 4. 尺寸

---

<rxz-icon name="search" :size="16"></rxz-icon>
<rxz-icon name="search" :size="24"></rxz-icon>
<rxz-icon name="search" :size="36"></rxz-icon>
<rxz-icon name="search" :size="48"></rxz-icon>

```vue
<rxz-icon name="search" :size="16"></rxz-icon>
<rxz-icon name="search" :size="24"></rxz-icon>
<rxz-icon name="search" :size="36"></rxz-icon>
<rxz-icon name="search" :size="48"></rxz-icon>
```
