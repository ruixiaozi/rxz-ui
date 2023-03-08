# useRxzValidator 校验器

## 介绍

定义了校验器的接口，并提供一系列基础校验器和校验方法。

校验器接口定义：

```ts
type RxzValidator = (value: any) => { [key: string]: any | null } | null;
```
> 返回值为null表示校验成功，否则返回一个对象，对象中的key为错误key，用于匹配错误提示，value表示失败后的参数（用于 `checkError` 后匹配 `errorTip` 时进行i18n转换），一般为null

引入use：

```ts
import { useRxzValidator } from '@/use';
const { /* 你要引入的API或者属性 */ } = useRxzValidator();
```

## API

### 1. checkError

  方法签名：

  ```ts
  type RxzValidatorErrorTip = string | { isI18N: boolean; label: string; };
  type RxzValidatorErrorTips = { [key: string]: RxzValidatorErrorTip };
  type RxzValidatorCheckRes = {
    tip: RxzValidatorErrorTip;
    param: any;
  } | null | { [key: string]: RxzValidatorCheckRes };
  /**
   * 校验错误，成功返回null
   * @param data 校验数据
   * @param validators 校验器列表
   * @param _errorTips 校验错误提示映射对象，合并到内置错误提示中
   * @param onCheck rxjs subject对象
   * @returns RxzValidatorCheckRes
   */
  function checkError(
    data: any, 
    validators: RxzValidator[], 
    _errorTips?: RxzValidatorErrorTips, 
    onCheck?: Subject<any>
  ): RxzValidatorCheckRes;
  ```

  内置错误提示（对应的i18n值参考下方内置校验器）：

  ```ts
  const errorTips: RxzValidatorErrorTips = {
    required: {
      isI18N: true,
      label: 'validator_required',
    },
    regexp: {
      isI18N: true,
      label: 'validator_regexp',
    },
    max: {
      isI18N: true,
      label: 'validator_max',
    },
    min: {
      isI18N: true,
      label: 'validator_min',
    },
    range: {
      isI18N: true,
      label: 'validator_range',
    },
    maxLength: {
      isI18N: true,
      label: 'validator_max_length',
    },
    minLength: {
      isI18N: true,
      label: 'validator_min_length',
    },
    rangeLength: {
      isI18N: true,
      label: 'validator_range_length',
    },
  };
  ```

## 内置校验器

## Validator列表

| 名称          | 描述   | 是否为高阶方法 | 参数                       | 错误key       | 默认提示（zh）         | 默认提示（en）                                             |
| ----------- | ---- | ------- | ------------------------ | ----------- | ---------------- | ---------------------------------------------------- |
| required    | 是否必填 | 否       | -                        | required    | 输入不能为空。          | The input cannot be null.                            |
| regexp      | 正则校验 | 是       | _regexp: RegExp           | regexp      | 输入不符合要求。         | The input is invalid.                                |
| max         | 最大值  | 是       | _max: number              | max         | 输入值不能超过{0}。      | The input value cannot exceed {0}.                   |
| min         | 最小值  | 是       | _min: number              | min         | 输入值不能小于{0}。      | The input value cannot be less than {0}.             |
| range       | 值范围  | 是       | _min: number, _max: number | range       | 输入值为{0}-{1}。     | The input values are {0}-{1}.                        |
| maxLength   | 最大长度 | 是       | _max: number              | maxLength   | 输入长度不能超过{0}个字符。  | The value contains a maximum of {0} characters.      |
| minLength   | 最小长度 | 是       | _min: number              | minLength   | 输入长度不能少于{0}个字符。  | The input length cannot be less than {0} characters. |
| rangeLength | 长度范围 | 是       |_ min: number, _max: number | rangeLength | 输入长度为{0}-{1}个字符。 | The value contains {0}-{1} characters.               |

### 1. required

  ```ts
  // 校验数据是否存在，失败返回 {required: null}
  const required: RxzValidator;
  ```
### 2. regexp

  ```ts
  // 生产正则校验器，失败返回 {regexp: null}
  const regexp: (_regexp: RegExp) => RxzValidator;
  ```
### 3. max

  ```ts
  // 生产最大值校验器，失败返回 {max: [_max]}
  const max: (_max: number) => RxzValidator;
  ```

### 4. min

  ```ts
  // 生产最小值校验器，失败返回 {min: [_min]}
  const min: (_min: number) => RxzValidator;
  ```

### 5. range

  ```ts
  // 生产范围校验器，失败返回 {range: [_min, _max]}
  const range: (_min: number, _max: number) => RxzValidator;
  ```

### 6. maxLength

  ```ts
  // 生产最大长度校验器，失败返回 {maxLength: [_max]}
  const maxLength: (_max: number) => RxzValidator;
  ```

### 7. minLength

  ```ts
  // 生产最小长度校验器，失败返回 {minLength: [_min]}
  const minLength: (_min: number) => RxzValidator;
  ```

### 8. rangeLength

  ```ts
  // 生产长度范围校验器，失败返回 {rangeLength: [_min, _max]}
  const rangeLength: (_min: number, _max: number) => RxzValidator;
  ```