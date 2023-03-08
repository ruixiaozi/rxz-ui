/**
 * useRxzFormLabelWidth
 * @description: RxzFormLabelWidth
 * @author: ruixiaozi
 * @since: 2.0.0
 */

import { computed, ref } from 'vue';

export type RxzLabelWidth = string | 'auto' | 'fit-content';

export type RxzRegisterLabelWidth = (key: string, width: string) => void

export function useRxzFormLabelWidth(props: any) {
  const allLabelWidth = ref<{ [key: string]: number } >({});
  const labelWidth = computed<RxzLabelWidth>(() => {
    const maxLabelWidth = Math.max(...Object.values(allLabelWidth.value));
    if (props.labelWidth === 'auto') {
      if (Number.POSITIVE_INFINITY === maxLabelWidth) {
        return 'auto';
      }
      return `${maxLabelWidth}px`;
    }
    return props.labelWidth;
  });
  // width只能是px
  const registerLabelWidth: RxzRegisterLabelWidth = (key: string, width: string) => {
    allLabelWidth.value[key] = parseInt(width, 10);
  };
  return {
    labelWidth,
    registerLabelWidth,
  };
}
