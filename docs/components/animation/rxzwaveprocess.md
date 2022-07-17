# RxzWaveProcess 水波进度

<rxz-wave-process :process="25"></rxz-wave-process>

```
<rxz-wave-process :process="25"></rxz-wave-process>
```

## Attribute 属性

| 参数         | 类型   | 描述                  | 可选值 | 默认值                                                       | 必须 |
| ------------ | ------ | --------------------- | ------ | ------------------------------------------------------------ | ---- |
| process      | Number | 进度                  | -      | 0                                                            |      |
| width        | String | 宽度                  | -      | 100px                                                        |      |
| height       | String | 高度                  | -      | 100px                                                        |      |
| border       | String | 边框                  | -      | solid 1px #07c2b7                                            |      |
| borderRadius | String | 圆角                  | -      | 50px                                                         |      |
| waterColor   | String | 水波颜色              | -      | \#07c2b7                                                     |      |
| emptyColor   | String | 空白区域颜色          | -      | \#ffffff                                                     |      |
| infoCss      | String | 进度文字信息的CSS样式 | -      | {"color": "#000", "font-size": "16px","font-weight": "bold"} |      |

## Example 案例

### 1. 尺寸  
---

<rxz-wave-process :process="10" width="200px" height="200px" borderRadius="100px"></rxz-wave-process>

```
<rxz-wave-process :process="10" width="200px" height="200px" borderRadius="100px"></rxz-wave-process>
```

### 2. 颜色  
---

<rxz-wave-process :process="20" waterColor="#ccffff" emptyColor="#ffffcc"></rxz-wave-process>

```
<rxz-wave-process :process="20" waterColor="#ccffff" emptyColor="#ffffcc"></rxz-wave-process>
```

### 3. 文字样式
---

<rxz-wave-process :process="20" :infoCss="{ 'color': '#ffcccc', 'font-size': '12px', 'font-weight': 'bold' }"></rxz-wave-process>

```
<rxz-wave-process 
  :process="20" 
  :infoCss="{ 'color': '#ffcccc', 'font-size': '12px', 'font-weight': 'bold' }">
</rxz-wave-process>
```