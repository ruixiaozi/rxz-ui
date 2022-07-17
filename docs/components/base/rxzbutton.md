# RxzButton 按钮

<rxz-button>默认按钮</rxz-button>

```
<rxz-button>默认按钮</rxz-button>
```


## Attribute 属性

| 参数           | 类型    | 描述             | 可选值                              | 默认值      | 必须 |
| -------------- | ------- | ---------------- | ----------------------------------- | ----------- | ---- |
| disabled       | Boolean | 是否禁用         | true/false                          | false       |      |
| loading        | Boolean | 是否加载状态     | true/false                          | false       |      |
| type           | String \| BUTTON_TYPE_ENUM  | 按钮类型         | default/primary/success/information | default     |      |
| nativeType     | String \| NATIVE_BUTTON_TYPE_ENUM  | 原生按钮类型     | button/reset/submit                 | button      |      |
| cls            | Array   | class列表        | -                                   | []          |      |
| css            | Object  | CSS属性          | -                                   | {}          |      |
| width          | String  | 宽度             | -                                   | fit-content |      |
| height         | String  | 高度             | -                                   | auto        |      |
| padding        | String  | 内边距           | -                                   | 10px 20px   |      |
| borderRadius   | String  | 圆角             | -                                   | 5px         |      |
| bgColor        | String  | 按钮背景色       | -                                   | unset       |      |
| hoverBgColor   | String  | 按钮鼠标选中颜色 | -                                   | unset       |      |
| textColor      | String  | 文字颜色         | -                                   | unset       |      |
| hoverTextColor | String  | 文字鼠标选中颜色 | -                                   | unset       |      |

## Event 事件

| 事件名称 | 描述         | 回调参数列表 |
| -------- | ------------ | ------------ |
| click    | 按钮点击事件 | 点击事件对象 |

## Example 案例

### 1. 类型  
---

<rxz-button type="default">默认按钮</rxz-button>
<rxz-button type="primary">主要按钮</rxz-button>
<rxz-button type="success">成功按钮</rxz-button>
<rxz-button type="information">通知按钮</rxz-button>

```
<rxz-button type="default">默认按钮</rxz-button>
<rxz-button type="primary">主要按钮</rxz-button>
<rxz-button type="success">成功按钮</rxz-button>
<rxz-button type="information">通知按钮</rxz-button>
```

### 2. 禁用  
---
<rxz-button type="default" disabled>默认按钮</rxz-button>
<rxz-button type="primary" disabled>主要按钮</rxz-button>
<rxz-button type="success" disabled>成功按钮</rxz-button>
<rxz-button type="information" disabled>通知按钮</rxz-button>

```
<rxz-button type="default" disabled>默认按钮</rxz-button>
<rxz-button type="primary" disabled>主要按钮</rxz-button>
<rxz-button type="success" disabled>成功按钮</rxz-button>
<rxz-button type="information" disabled>通知按钮</rxz-button>
```

### 3. 加载 
---
<rxz-button type="default" loading>默认按钮</rxz-button>
<rxz-button type="primary" loading>主要按钮</rxz-button>
<rxz-button type="success" loading>成功按钮</rxz-button>
<rxz-button type="information" loading>通知按钮</rxz-button>

```
<rxz-button type="default" loading>默认按钮</rxz-button>
<rxz-button type="primary" loading>主要按钮</rxz-button>
<rxz-button type="success" loading>成功按钮</rxz-button>
<rxz-button type="information" loading>通知按钮</rxz-button>
```

