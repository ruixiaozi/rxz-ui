/**
 * useRxzBindingWithinSetup
 * @description: RxzBindingWithinSetup
 * @author: ruixiaozi
 * @since: 2.0.0
 */

import { isNil } from 'lodash';
import { computed, inject, provide, ref, Ref } from 'vue';

const RXZ_BINDING_VALUE_KEY = '__rxz_binding_value';

type ModelValueProp = {
  modelValue?: any;
}

type ModelValueEmits = (emitName: 'update:modelValue', ...args: any[]) => void;

/**
 * 获取所有绑定值列表
 * @returns
 */
function getBindingValues(): Ref<any>[] {
  return inject<Ref<any>[]>(RXZ_BINDING_VALUE_KEY) || [];
}

/**
 * 获取最近父级组件的绑定值
 * @returns
 */
function getClosedBindingValue<T = any>(): Ref<T> | undefined {
  const values = getBindingValues();
  return values.length > 0 ? values[values.length - 1] : undefined;
}

/**
 * 混入modelValue和最近绑定值，生成一个合并的引用值
 * @param props 组件prop
 * @param emits 组件emits
 * @param defaultValue 默认值
 * @returns
 */
function mixinModelValueClosedBindingValue< PT extends ModelValueProp, ET extends ModelValueEmits, T = any>(
  props: PT,
  emits: ET,
  defaultValue: T,
): Ref<T> {
  const bindingValue = getClosedBindingValue();
  // 没有绑定值
  if (isNil(props.modelValue) && isNil(bindingValue)) {
    return ref(defaultValue) as Ref<T>;
  }

  // modelValue存在使用modelValue，否则使用最近的绑定值
  const mixinValue = computed({
    get() {
      return props.modelValue || bindingValue?.value;
    },
    set(newV) {
      emits('update:modelValue', newV);
      // 如果没有传入modelValue，且bingdingValue存在
      if (isNil(props.modelValue) && bindingValue) {
        bindingValue.value = newV;
      }
    },
  });

  return mixinValue as Ref<T>;
}

/**
 * 注册绑定值
 * @param value
 */
function registerBindingValue<T extends Ref<any>>(value: T) {
  const bindingValues = getBindingValues();
  provide(RXZ_BINDING_VALUE_KEY, [...bindingValues, value]);
}

export function useRxzBindingWithinSetup() {
  return {
    getBindingValues,
    getClosedBindingValue,
    registerBindingValue,
    mixinModelValueClosedBindingValue,
  };
}
