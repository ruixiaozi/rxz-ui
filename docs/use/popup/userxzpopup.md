# useRxzPopup 弹出层管理

## 介绍

弹出层顶层管理器，管理弹出层的层级、容器、各个弹出层的句柄。

引入use：

```ts
import { useRxzPopup } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzPopup();
```

## API

### 1. zIndexNext

  方法签名：

  ```ts
  /**
   * 获取popup下一个zindex
   * @returns number
   */
  function zIndexNext(): number;
  ```

### 2. appendPopup

  方法签名：

  ```ts
  /**
   * 添加popup
   * @param vnode 虚拟node
   * @param key 指定唯一标识，默认随机
   * @returns 唯一标识
   */
  function appendPopup(vnode: VNode, key?: string): string;
  ```

### 3. removePopup

  方法签名：

  ```ts
  /**
   * 移除popup
   * @param key 唯一标识
   */
  function removePopup(key: string): void;
  ```


### 4. clearPopup

  方法签名：

  ```ts
  /**
   * 清除popup
   */
  function clearPopup(): void;
  ```