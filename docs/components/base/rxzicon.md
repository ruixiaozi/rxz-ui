# RxzIcon 图标

内部使用 [font-awesome](https://fontawesome.dashgame.com/) 实现

 <rxz-icon name="bell"></rxz-icon>

``` vue
 <rxz-icon name="bell"></rxz-icon>
```


## Attribute 属性

| 参数         | 类型    | 描述                                                         | 可选值                    | 默认值      | 必须 |
| ------------ | ------- | ------------------------------------------------------------ | ------------------------- | ----------- | ---- |
| name         | String  | 样式名称（[font-awesome](https://fontawesome.dashgame.com/) 查找） | -                         | info-circle |      |
| size         | Number(0-4) \| ICON_SIZE_ENUM  | 大小                                                         | normal(0)/big(1)/big2(2)/big3(3)/big4(4) | normal(0)      |      |
| isFixedWidth | Boolean | 是否固定宽度                                                 | true/false                | false       |      |
| spinner      | Boolean | 是否旋转                                                     | true/false                | false       |      |
| rotate       | String  | 翻转角度                                                     | -                         | 0           |      |
| cls          | Array   | class列表                                                    | -                         | []          |      |
| css          | Object  | style对象                                                    | -                         | {}          |      |

## Example 案例

### 1. 旋转 
---

<rxz-icon name="spinner" spinner></rxz-icon>

``` vue
 <rxz-icon name="spinner" spinner></rxz-icon>
```

### 2. 翻转角度 
---

<rxz-icon name="arrows-h"></rxz-icon>
<rxz-icon name="arrows-h" rotate="90"></rxz-icon>

``` vue
<rxz-icon name="arrows-h"></rxz-icon>
<rxz-icon name="arrows-h" rotate="90"></rxz-icon>
```

### 3. 尺寸 
---

<rxz-icon name="bell"></rxz-icon>
<rxz-icon name="bell" :size="0"></rxz-icon>
<rxz-icon name="bell" :size="1"></rxz-icon>
<rxz-icon name="bell" :size="2"></rxz-icon>
<rxz-icon name="bell" :size="3"></rxz-icon>
<rxz-icon name="bell" :size="4"></rxz-icon>

``` vue
<rxz-icon name="bell"></rxz-icon>
<rxz-icon name="bell" :size="0"></rxz-icon>
<rxz-icon name="bell" :size="1"></rxz-icon>
<rxz-icon name="bell" :size="2"></rxz-icon>
<rxz-icon name="bell" :size="3"></rxz-icon>
<rxz-icon name="bell" :size="4"></rxz-icon>
```


