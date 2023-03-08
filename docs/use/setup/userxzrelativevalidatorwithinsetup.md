# useRxzRelativeValidatorWithinSetup 关联校验器

## 介绍

关联校验器可以使祖先组件和子孙组件生成check方法，用于进行校验（调用 [useRxzValidator](../base/userxzvalidator.html) 的 `checkError`）

祖先生产的check方法可以同时触发子孙组件的check方法，主要用于存在关联校验的场景。

引入use：

```ts
import { useRxzRelativeValidatorWithinSetup } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzRelativeValidatorWithinSetup();
```

## API

### 1. generateRelativeCheck

  方法签名：

  ```ts
  type RxzValidatorCheck = () => RxzValidatorCheckRes | Dictionary<any> | null;
  /**
   * 生产关联检查器，能够关联组件的父子层级，父检查器会检查所有子检查器
   * 不传入参数为父校验器
   * @param name 检查的字段名的引用对象
   * @param data 检查的字段值的引用对象
   * @param validators 检查的校验器列表的引用对象
   * @param _errorTips 检查的错误提示对应表的引用对象
   * @param onCheck onCheck的rxjs subject对象
   * @returns check方法
   */
  function generateRelativeCheck(
    name?: Ref<any>,
    data?: Ref<any>,
    validators?: Ref<RxzValidator[]>,
    _errorTips?: Ref<RxzValidatorErrorTips>,
    onCheck?: Subject<any>,
  ): RxzValidatorCheck;
  ```
