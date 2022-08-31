# RxzButton 按钮

<rxz-button>默认按钮</rxz-button>

```vue
<rxz-button>默认按钮</rxz-button>
```

## Attribute 属性

| 参数             | 类型                                | 描述                             | 可选值                             | 默认值         | 必须  |
| -------------- | --------------------------------- | ------------------------------ | ------------------------------- | ----------- | --- |
| link           | Boolean                           | 是否为链接                          | true/false                      | false       |     |
| disabled       | Boolean                           | 是否禁用                           | true/false                      | false       |     |
| loading        | Boolean                           | 是否加载状态（仅按钮）                    | true/false                      | false       |     |
| type           | String \| BUTTON_TYPE_ENUM        | 按钮类型                           | 参见内置数据结构BUTTON_TYPE_ENUM        | default     |     |
| nativeType     | String \| NATIVE_BUTTON_TYPE_ENUM | 原生按钮类型（仅按钮）                    | 参见内置数据结构NATIVE_BUTTON_TYPE_ENUM | button      |     |
| width          | String                            | 宽度（仅按钮）                        | -                               | fit-content |     |
| height         | String                            | 高度（仅按钮）                        | -                               | auto        |     |
| padding        | String                            | 内边距（仅按钮）                       | -                               | 10px 20px   |     |
| borderRadius   | String                            | 圆角（仅按钮）                        | -                               | 5px         |     |
| bgColor        | String                            | 按钮背景色（仅按钮）                     | -                               | unset       |     |
| hoverBgColor   | String                            | 按钮hover颜色(不设置则为背景色的亮度变换色)（仅按钮） | -                               | unset       |     |
| textColor      | String                            | 文字颜色                           | -                               | unset       |     |
| hoverTextColor | String                            | 文字hover颜色                      | -                               | unset       |     |
| underline      | Boolean                           | 是否显示下划线（仅链接）                   | true/false                      | true        |     |

## Event 事件

所有按钮原生事件

## 内置数据结构

1. BUTTON_TYPE_ENUM 

```ts
enum BUTTON_TYPE_ENUM {
  default='default',
  primary='primary',
  success='success',
  information='information',
}
```

2. NATIVE_BUTTON_TYPE_ENUM 

```ts
enum NATIVE_BUTTON_TYPE_ENUM {
  button='button',
  reset='reset',
  submit='submit',
}
```

## Example 案例

### 1. 类型

---

<rxz-button type="default">默认按钮</rxz-button>
<rxz-button type="primary">主要按钮</rxz-button>
<rxz-button type="success">成功按钮</rxz-button>
<rxz-button type="information">通知按钮</rxz-button>

```vue
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

```vue
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

```vue
<rxz-button type="default" loading>默认按钮</rxz-button>
<rxz-button type="primary" loading>主要按钮</rxz-button>
<rxz-button type="success" loading>成功按钮</rxz-button>
<rxz-button type="information" loading>通知按钮</rxz-button>
```

### 4. cleck事件

---

<rxz-button type="primary" @click="handleClick">主要按钮</rxz-button>

```vue
<template>
  <rxz-button type="primary" @click="handleClick">主要按钮</rxz-button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('test click');
    }
  },
}
</script>
```

<script>
export default {
  methods: {
    handleClick() {
      console.log('test click');
    }
  },
}
</script>

### 5. 背景颜色

---

<rxz-button type="primary" bgColor="#ff2a00">主要按钮</rxz-button>

```vue
<rxz-button type="primary" bgColor="#ff2a00">主要按钮</rxz-button>
```

### 6. 链接

---

<rxz-button type="default" link>默认链接</rxz-button>
<rxz-button type="primary" link>主要链接</rxz-button>
<rxz-button type="success" link>成功链接</rxz-button>
<rxz-button type="information" link>通知链接</rxz-button>

```vue
<rxz-button type="default" link>默认链接</rxz-button>
<rxz-button type="primary" link>主要链接</rxz-button>
<rxz-button type="success" link>成功链接</rxz-button>
<rxz-button type="information" link>通知链接</rxz-button>
```

### 7. 链接禁用

---

<rxz-button type="default" link disabled>默认链接</rxz-button>
<rxz-button type="primary" link disabled>主要链接</rxz-button>
<rxz-button type="success" link disabled>成功链接</rxz-button>
<rxz-button type="information" link disabled>通知链接</rxz-button>

```vue
<rxz-button type="default" link disabled>默认链接</rxz-button>
<rxz-button type="primary" link disabled>主要链接</rxz-button>
<rxz-button type="success" link disabled>成功链接</rxz-button>
<rxz-button type="information" link disabled>通知链接</rxz-button>
```

### 8. 链接无下划线

---

<rxz-button type="default" link :underline="false">默认链接</rxz-button>
<rxz-button type="primary" link :underline="false">主要链接</rxz-button>
<rxz-button type="success" link :underline="false">成功链接</rxz-button>
<rxz-button type="information" link :underline="false">通知链接</rxz-button>

```vue
<rxz-button type="default" link :underline="false">默认链接</rxz-button>
<rxz-button type="primary" link :underline="false">主要链接</rxz-button>
<rxz-button type="success" link :underline="false">成功链接</rxz-button>
<rxz-button type="information" link :underline="false">通知链接</rxz-button>
```