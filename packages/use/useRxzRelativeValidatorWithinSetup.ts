/**
 * useRxzRelativeValidatorWithinSetup
 * @description: RxzRelativeValidatorWithinSetup
 * @author: ruixiaozi
 * @since: 2.0.0
 */

import { Dictionary, fromPairs, toPairs } from 'lodash';
import { Subject } from 'rxjs';
import { inject, provide, ref, Ref } from 'vue';
import { RxzValidator, RxzValidatorCheckRes, RxzValidatorErrorTips, useRxzValidator } from './useRxzValidator';

export interface RxzValidatorChecks {
  [key: string]: RxzValidatorCheck;
}

export type RxzValidatorCheck = () => RxzValidatorCheckRes | Dictionary<any> | null;

const { checkError } = useRxzValidator();

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
) {
  // name表示检查的字段，传入data引用表示当前字段值
  // 如果传入了name，表示子层级
  if (name?.value) {
    // 注入父检查器数组，将当前生成的检查器，附加到父检查器上
    const parentChecks = inject<Ref<RxzValidatorChecks> | undefined>('checks', undefined);
    const check: RxzValidatorCheck = () => checkError(data?.value, validators?.value || [], _errorTips?.value, onCheck);
    if (parentChecks?.value) {
      parentChecks.value[name.value] = check;
    }
    return check;
  }

  // 没有传入name，表示这是一个父检查器
  const checks = ref<RxzValidatorChecks>({});
  const check: RxzValidatorCheck = () => {
    const subRes = toPairs(checks.value)
      .map(([key, value]) => [key, value()])
      .filter(([, value]) => value);
    const res = subRes?.length ? fromPairs(subRes) : null;
    return res;
  };
  provide('checks', checks);
  return check;
}

export function useRxzRelativeValidatorWithinSetup() {
  return {
    generateRelativeCheck,
  };
}
