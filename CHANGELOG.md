# 修改日志 2.x.x [Current]

> 次版本：每季度发布一次，向下兼容的功能性新增  
> 修订版本：每周发布一次(紧急版本随时发布)，向下兼容的问题修正

## 2.1.2 [Current]
###### 发布日期：2023.3.30
###### 兼容性：2.1.x

+ 修复菜单展开折叠无效问题
+ 修复表格宽度问题；增加form-item的表格单元render方式，修复form值嵌套的bug
+ 增加RxzTableForm进阶组件
+ 修复表格、表单相关bug
+ RxzRadio增加局部禁用
+ 增加cellrender日期类型，增加useI18n获取当前语言环境属性

## 2.1.1 
###### 发布日期：2023.3.13
###### 兼容性：2.1.x
+ 修复弹出层中全局组件无效的bug
+ 增加table组件refresh api
+ 增加tableRender 操作列类型
+ 修复消息框获取内容组件实例问题
+ 增加按钮组data参数
+ 增加虚拟列表RxzList组件

## 2.1.0
###### 发布日期：2023.3.8
###### 兼容性：2.1.x
+ 移除Rollup，改用webpack打包，并附带map
+ 修复table表格表头对其问题
+ 实现table单元渲染
+ 【重大更新】：重构使用组合式api，枚举变量重命名（不兼容2.0.0）
+ 【重大更新】：文档重构，案例使用组合式api
+ 【重大更新】：升级vue-cli到5.x（webpack 5.x）
+ 引入use

## 2.0.0 
###### 发布日期：2022/12/20
###### 兼容性：2.x.x
+ 切换Vue3，使用TS的class模式
+ 引入国际化


