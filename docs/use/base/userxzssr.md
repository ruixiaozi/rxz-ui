# useRxzSSR 服务端渲染

## 介绍

服务端渲染相关，引入UI组件时可通过选项设定 `isSSR` 的值：

```ts
app.use(RxzUI, {
  isSSR: true, // 默认为false
} as RxzOption);
```

引入use：

```ts
import { useRxzSSR } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzSSR();
```

## 属性

### 1. isSSR

  属性类型：

  ```ts
  // 当前环境是否为ssr，可设置，可获取
  const isSSR: Ref<boolean>;
  ```

## API

### 1. registeClientInitNoSSR

  方法签名：

  ```ts
  /**
   * 注册在客户端初始化时执行的方法，非SSR模式下
   * 需要在app.use之前注册
   * @param cbk 回调方法
   */
  function registeClientInitNoSSR(cbk: (app?: App) => void): void;
  ```

### 2. runClientInitNoSSR

  方法签名：

  ```ts
  /**
   * 运行已经注册在客户端初始化时执行的方法
   * app.use组件库时执行
   */
  function runClientInitNoSSR(app: App): void;
  ```
