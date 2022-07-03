import { provide, ref, toRef } from 'vue';

/**
 * label基础模块
 * @param props { labelWidth: { type: String, default: 'auto' } }
 * @returns { updateSubCurLabelWidth }
 */
export const LabelBaseModule = (props: any) => {
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
  return {
    updateSubCurLabelWidth,
  };
};

