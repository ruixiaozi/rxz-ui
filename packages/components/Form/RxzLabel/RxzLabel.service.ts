import { Injectable } from '@tanbo/vue-di-plugin';
import { inject, provide, ref, computed, toRef } from 'vue';

/**
 * Service: RxzLabelService
 * @description: 标签服务
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Injectable({
  provideIn: 'root',
})
export class RxzLabelService {

  /**
   * 提供表单标签宽度
   * @param props { labelWidth: { type: String, default: 'auto' } }
   * @returns {}
   */
  provideFormLabelWidth(props: any) {
    // 用于保存子label的实际宽度
    const allSubLabelWidth = ref(new Map<string, number>([['defaults', 0]]));
    const labelWidth = toRef(props, 'labelWidth');

    // 定义当前的表单labelwidth
    const formLabelWidth = computed(() => {
      if (labelWidth.value !== 'auto') {
        return String(labelWidth.value);
      }
      // auto则计算最大值
      const maxWidth = Math.max(...allSubLabelWidth.value.values());
      return `${maxWidth}px`;
    });

    // 更新表单的labelwidth
    const updateFormLabelWidth = (key: string, width: string) => {
      const oldValue = allSubLabelWidth.value.get(key);
      const widthNum = parseFloat(width);
      if (oldValue !== widthNum) {
        allSubLabelWidth.value.set(key, widthNum);
      }
    };

    provide('allSubLabelWidth', allSubLabelWidth);
    provide('formLabelWidth', formLabelWidth);
    provide('updateFormLabelWidth', updateFormLabelWidth);
    return {};
  }

  /**
   * 获取当前formitem下的labelwidth
   * @param key formItemKey
   * @returns labelWidthPx
   */
  getLabelWidthPx(key: string) {
    const formLabelWidth: any = inject('formLabelWidth');
    const allSubLabelWidth: any = inject('allSubLabelWidth');
    const labelWidthPx = computed(() => {
      if (formLabelWidth.value === 'fit-content') {
        return `${allSubLabelWidth.value.get(key) || 0}px`;
      }
      return formLabelWidth.value;
    });
    return labelWidthPx;
  }

}
