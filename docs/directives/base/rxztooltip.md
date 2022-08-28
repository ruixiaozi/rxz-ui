# rxz-tooltip 提示指令

<TestRxzTooltipDirective></TestRxzTooltipDirective>

``` vue
<template>
  <rxz-container class="container">
    <template v-slot:topcenter>
      <div class="h-show">
        <span v-rxz-tooltip:topleft>topleft</span>
        <span v-rxz-tooltip:top>top</span>
        <span v-rxz-tooltip:topright>topright</span>
      </div>
    </template>
    <template v-slot:centerleft>
      <p v-rxz-tooltip:lefttop>lefttop</p>
      <p v-rxz-tooltip:left>left</p>
      <p v-rxz-tooltip:leftbottom>leftbottom</p>
    </template>
    <template v-slot:bottomcenter>
      <div class="h-show">
        <span v-rxz-tooltip:bottomleft>bottomleft</span>
        <span v-rxz-tooltip:bottom>bottom</span>
        <span v-rxz-tooltip:bottomright>bottomright</span>
      </div>
    </template>
    <template v-slot:centerright>
      <p v-rxz-tooltip:righttop>righttop</p>
      <p v-rxz-tooltip:right>right</p>
      <p v-rxz-tooltip:rightbottom>rightbottom</p>
    </template>
  </rxz-container>
</template>
<style scoped>
.container {
  width: 400px;
  height: 210px;
  margin-bottom: 50px;
}
.h-show > * {
  margin-right: 20px;
}
</style>
```

## Description 描述

+ 指令名称：v-rxz-tooltip
+ 参数：RxzToolTipPos，默认值RxzToolTipPos.top，见下方类型对照表
+ 值：tooltip内容，如果没有值，则显示宿主元素的内容
+ 修饰符：
  + click：通过点击显示或隐藏tooltip

## 内置数据结构

1. RxzToolTipPos 
   
  ```ts
  export enum RxzToolTipPos {
    topleft='topleft',
    top='top',
    topright='topright',
    lefttop='lefttop',
    left='left',
    leftbottom='leftbottom',
    bottomleft='bottomleft',
    bottom='bottom',
    bottomright='bottomright',
    righttop='righttop',
    right='right',
    rightbottom='rightbottom'
  }
  ```


## Example 案例

### 1. 点击

---

<TestRxzTooltipDirectiveExp1></TestRxzTooltipDirectiveExp1>

```vue
<template>
  <rxz-button v-rxz-tooltip:top.click>点击显示/隐藏Tooltip</rxz-button>
</template>
```

### 2. 自定义内容

---

<TestRxzTooltipDirectiveExp2></TestRxzTooltipDirectiveExp2>

```vue
<template>
  <rxz-button v-rxz-tooltip:top="'我是自定义内容'">hover查看</rxz-button>
</template>
```