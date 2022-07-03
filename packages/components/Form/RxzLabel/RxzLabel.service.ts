import { Injectable } from '@tanbo/vue-di-plugin';
import { onMounted, provide, ref, toRef } from 'vue';

@Injectable({
  provideIn: 'root',
})
export class RxzLabelService {

  /**
   * label基础功能
   * @param props { labelWidth: { type: String, default: 'auto' } }
   * @returns {}
   */
  getLabelBase(props: any) {
    const allSubLabelWidth = new Map<string, number>();
    const labelWidth = toRef(props, 'labelWidth');
    provide('labelWidth', labelWidth);
    const curLabelWidth = ref('0px');
    provide('curLabelWidth', curLabelWidth);
    const updateSubCurLabelWidth = (key: string, width: string) => {
      if (labelWidth.value !== 'auto') {
        curLabelWidth.value = String(labelWidth.value);
        return;
      }
      allSubLabelWidth.set(key, parseFloat(width));
      const maxWidth = Math.max(...allSubLabelWidth.values());
      curLabelWidth.value = `${maxWidth}px`;
    };
    provide('updateCurLabelWidth', updateSubCurLabelWidth);

    onMounted(() => {
      updateSubCurLabelWidth('defaults', '0px');
    });
    return {};
  }

}
