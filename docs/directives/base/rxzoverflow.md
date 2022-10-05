# rxz-overflow 溢出指令

<div style="width: 100px" v-rxz-overflow>  
  我的名字叫rxz-overflow
</div>

``` vue
<div style="width: 100px" v-rxz-overflow>  
  我的名字叫rxz-overflow
</div>
```

## Description 描述

+ 指令名称：v-rxz-overflow
+ 值：假值（falsity）不做溢出处理；boolean值的true或者没有值 显示宿主内容；真值（truth）显示其值；
+ 其他参考 [tooltip](./rxztooltip.html)

### 1. 不溢出处理

---

<div style="width: 100px" v-rxz-overflow="false">  
  我的名字叫rxz-overflow
</div>

```vue
<div style="width: 100px" v-rxz-overflow="false">  
  我的名字叫rxz-overflow
</div>
```

### 2. 白色

---

<div style="width: 100px" v-rxz-overflow.white>  
  我的名字叫rxz-overflow
</div>

```vue
<div style="width: 100px" v-rxz-overflow.white>  
  我的名字叫rxz-overflow
</div>
```

### 3. 位置

---

<div style="width: 100px" v-rxz-overflow:right>  
  我的名字叫rxz-overflow
</div>

```vue
<div style="width: 100px" v-rxz-overflow.white>  
  我的名字叫rxz-overflow
</div>
```

### 4. 点击

---

<div style="width: 100px" v-rxz-overflow.click>  
  我的名字叫rxz-overflow
</div>

```vue
<div style="width: 100px" v-rxz-overflow.white>  
  我的名字叫rxz-overflow
</div>
```