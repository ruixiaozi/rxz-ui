# RxzValidators 校验器

RxzValidators提供一系列通用的内置校验器，并继承了默认的errorTip，可以不用再formItem中单独设置errorTip；使用方法，从rxz-ui引入RxzValidators类：

``` vue
import { RxzValidators } from 'rxz-ui';
...

    ... RxzValidators.required ....
....
```



## Validator列表

| 名称          | 描述   | 是否为高阶方法 | 参数                       | 错误key       | 默认提示（zh）         | 默认提示（en）                                             |
| ----------- | ---- | ------- | ------------------------ | ----------- | ---------------- | ---------------------------------------------------- |
| required    | 是否必填 | 否       | -                        | required    | 输入不能为空。          | The input cannot be null.                            |
| regexp      | 正则校验 | 是       | regexp: RegExp           | regexp      | 输入不符合要求。         | The input is invalid.                                |
| max         | 最大值  | 是       | max: number              | max         | 输入值不能超过{0}。      | The input value cannot exceed {0}.                   |
| min         | 最小值  | 是       | min: number              | min         | 输入值不能小于{0}。      | The input value cannot be less than {0}.             |
| range       | 值范围  | 是       | min: number, max: number | range       | 输入值为{0}-{1}。     | The input values are {0}-{1}.                        |
| maxLength   | 最大长度 | 是       | max: number              | maxLength   | 输入长度不能超过{0}个字符。  | The value contains a maximum of {0} characters.      |
| minLength   | 最小长度 | 是       | min: number              | minLength   | 输入长度不能少于{0}个字符。  | The input length cannot be less than {0} characters. |
| rangeLength | 长度范围 | 是       | min: number, max: number | rangeLength | 输入长度为{0}-{1}个字符。 | The value contains {0}-{1} characters.               |

# 


