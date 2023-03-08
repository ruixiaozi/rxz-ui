# v-rxz-theme 主题指令
<div v-rxz-theme>
  <div v-rxz-theme="'th-red'">
    <rxz-button type="primary">主要按钮</rxz-button>
    <rxz-button v-rxz-theme type="primary">主要按钮</rxz-button>
  </div>
  <br/>
  <rxz-button type="primary">主要按钮</rxz-button>
</div>


``` vue
<div v-rxz-theme>
  <div v-rxz-theme="'th-red'">
    <rxz-button type="primary">主要按钮</rxz-button>
    <rxz-button v-rxz-theme type="primary">主要按钮</rxz-button>
  </div>
  <br/>
  <rxz-button type="primary">主要按钮</rxz-button>
</div>
```

## Description 描述

主题以就近原则，子节点设置的主题会在其节点范围内生效

+ 指令名称：v-rxz-theme
+ 参数：无
+ 值：default/th-red，默认值：default
+ 修饰符：无
