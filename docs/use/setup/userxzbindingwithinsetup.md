# useRxzBindingWithinSetup 绑定值

## 介绍

注册和获取绑定值，混入v-modal等功能，可以实现祖先组件和子孙组件间的数据交换。
> [RxzFormItem](../../components/form/rxzformitem.html) 组件使用 `registerBindingValue` 注册了当前表单项的数据，可以自定义表单控件，通过 `mixinModelValueClosedBindingValue` 实现与表单项绑定

引入use：

```ts
import { useRxzBindingWithinSetup } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzBindingWithinSetup();
```

## API

### 1. registerBindingValue

  方法签名：

  ```ts
  /**
   * 注册绑定值
   * @param value
   */
  function registerBindingValue: <T extends Ref<any>>(value: T) => void;
  ```

### 2. getBindingValues

  方法签名：

  ```ts
  /**
   * 获取所有绑定值列表
   * @returns
   */
  function getBindingValues: () => Ref<any>[];
  ```

### 3. getClosedBindingValue

  方法签名：

  ```ts
  /**
   * 获取最近父级组件的绑定值
   * @returns
   */
  function getClosedBindingValue: <T = any>() => Ref<T> | undefined;
  ```

### 4. mixinModelValueClosedBindingValue

  方法签名：

  ```ts
  /**
   * 混入modelValue和最近绑定值，生成一个合并的引用值
   * @param props 组件prop
   * @param emits 组件emits
   * @param defaultValue 默认值
   * @returns
   */
  function mixinModelValueClosedBindingValue<PT extends ModelValueProp, ET extends ModelValueEmits, T = any>(props: PT, emits: ET, defaultValue: T): Ref<T>;
  ```
 
