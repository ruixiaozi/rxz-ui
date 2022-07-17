# RxzIcon 图标

内部使用 [font-awesome](https://fontawesome.dashgame.com/) 实现

```
 <rxz-icon name="bell"></rxz-icon>
```


## Attribute 属性

| 参数         | 类型    | 描述                                                         | 可选值                    | 默认值      | 必须 |
| ------------ | ------- | ------------------------------------------------------------ | ------------------------- | ----------- | ---- |
| name         | String  | 样式名称（[font-awesome](https://fontawesome.dashgame.com/) 查找） | -                         | info-circle |      |
| size         | String  | 大小                                                         | normal/big/big2/big3/big4 | normal      |      |
| isFixedWidth | Boolean | 是否固定宽度                                                 | true/false                | false       |      |
| spinner      | Boolean | 是否旋转                                                     | true/false                | false       |      |
| rotate       | String  | 翻转角度                                                     | -                         | 0           |      |
| cls          | Array   | class列表                                                    | -                         | []          |      |
| css          | Object  | style对象                                                    | -                         | {}          |      |

## Example 案例

```
 <rxz-icon name="spinner" spinner></rxz-icon>
```

---

```
<rxz-icon name="arrows-h"></rxz-icon>
<rxz-icon name="arrows-h" rotate="90"></rxz-icon>
```


---

```
<rxz-icon name="bell"></rxz-icon>
<rxz-icon name="bell" size="normal"></rxz-icon>
<rxz-icon name="bell" size="big"></rxz-icon>
<rxz-icon name="bell" size="big2"></rxz-icon>
<rxz-icon name="bell" size="big3"></rxz-icon>
<rxz-icon name="bell" size="big4"></rxz-icon>
```


