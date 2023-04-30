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
  return inject<Ref<any>[]>(RXZ_BINDING_VALUE_KEY, []);
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

  const defaultV = ref<T>(defaultValue) as Ref<T>;

  // 如果存在绑定值，则使用绑定值，否则使用modelvalue或者默认值
  const mixinValue = computed<T>({
    get() {
      if (isNil(bindingValue)) {
        // 如果传下来的任然是一个空值，则使用默认值
        return isNil(props.modelValue) ? defaultV.value : props.modelValue;
      }
      return bindingValue.value;
    },
    set(newV) {
      // 抛出更新事件
      emits('update:modelValue', newV);
      // 更新默认值
      defaultV.value = newV;
      // bingdingValue存在
      if (!isNil(bindingValue)) {
        bindingValue.value = newV;
      }
    },
  });

  return mixinValue;
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
