# RxzFlex 弹性布局

<RxzFlex gutter="20px">
  <div>123</div>
  <div>321</div>
</RxzFlex>

``` vue
<RxzFlex gutter="20px">
  <div>123</div>
  <div>321</div>
</RxzFlex>
```

## Attribute 属性

| 参数       | 类型    | 描述                 | 可选值     | 默认值 | 必须 |
| ---------- | ------- | -------------------- | ---------- | ------ | ---- |
| direction   | String \| DIRECTION_ENUM | 布局方向 | vertical/horizontal | horizontal   |      |
| gutter | String | 间距         | - | '0px'  |      |
| align | String \| FLEX_ALIGN_ENUM | 另一方向的对齐方式   | flex-start/flex-end/center | start  |      |
| justify | String \| FLEX_ALIGN_ENUM | 当前方向的对齐方式   | flex-start/flex-end/center | start  |      |

## Example 案例

### 1. 方向  
---

<RxzFlex direction="vertical">
  <div>123</div>
  <div>321</div>
</RxzFlex>
<RxzFlex>
  <div>123</div>
  <div>321</div>
</RxzFlex>

``` vue
<RxzFlex direction="vertical">
  <div>123</div>
  <div>321</div>
</RxzFlex>
<RxzFlex>
  <div>123</div>
  <div>321</div>
</RxzFlex>
```

### 2. 间距
---

<RxzFlex gutter="20px">
  <div>123</div>
  <div>321</div>
</RxzFlex>

``` vue
<RxzFlex gutter="20px">
  <div>123</div>
  <div>321</div>
</RxzFlex>
```

### 3. 另一方向对齐
---

<RxzFlex align="flex-start">
  <div>123</div>
  <div>
    <p>a</p>
    <p>b</p>
    <p>c</p>
  </div>
</RxzFlex>

<RxzFlex align="center">
  <div>123</div>
  <div>
    <p>a</p>
    <p>b</p>
    <p>c</p>
  </div>
</RxzFlex>

<RxzFlex align="flex-end">
  <div>123</div>
  <div>
    <p>a</p>
    <p>b</p>
    <p>c</p>
  </div>
</RxzFlex>

``` vue
<RxzFlex align="flex-start">
  <div>123</div>
  <div>
    <p>a</p>
    <p>b</p>
    <p>c</p>
  </div>
</RxzFlex>

<RxzFlex align="center">
  <div>123</div>
  <div>
    <p>a</p>
    <p>b</p>
    <p>c</p>
  </div>
</RxzFlex>

<RxzFlex align="flex-end">
  <div>123</div>
  <div>
    <p>a</p>
    <p>b</p>
    <p>c</p>
  </div>
</RxzFlex>
```

### 4. 当前方向对齐
---

<RxzFlex justify="flex-start">
  <div>123</div>
  <div>aa</div>
</RxzFlex>

<RxzFlex justify="center">
  <div>123</div>
  <div>aa</div>
</RxzFlex>

<RxzFlex justify="flex-end">
  <div>123</div>
  <div>aa</div>
</RxzFlex>

``` vue
<RxzFlex justify="flex-start">
  <div>123</div>
  <div>aa</div>
</RxzFlex>

<RxzFlex justify="center">
  <div>123</div>
  <div>aa</div>
</RxzFlex>

<RxzFlex justify="flex-end">
  <div>123</div>
  <div>aa</div>
</RxzFlex>
```