# rxz-badge 标记指令

<rxz-button v-rxz-badge="9">Test</rxz-button>
<br /><br />
<rxz-icon name="edit" v-rxz-badge="110"></rxz-icon>
<br /><br />
<rxz-icon name="edit" v-rxz-badge="'new'"></rxz-icon>

``` vue
<rxz-button v-rxz-badge="9">Test</rxz-button>
<br /><br />
<rxz-icon name="edit" v-rxz-badge="110"></rxz-icon>
<br /><br />
<rxz-icon name="edit" v-rxz-badge="'new'"></rxz-icon>
```

## Description 描述

+ 指令名称：v-rxz-badge
+ 参数：无
+ 值：string/number。字符串显示字符串本身，数值-99到99显示本身，大于99显示99+，小于-99显示-99+
+ 修饰符：无
