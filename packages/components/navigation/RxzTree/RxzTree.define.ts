/**
 * RxzTree
 * @description: RxzTree
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { PropType } from 'vue';

export type FetchRxzTreeItemsFunction = () => Promise<RxzTreeItem[]>;

export interface RxzTreeItem {
  key: string;
  label: string;
  isFold?: boolean;
  foldIcon?: string;
  unfoldIcon?: string;
  iconColor?: string;
  disabled?: boolean;
  children?: RxzTreeItem[];
  // 和fetch绑定，一般不需要传入，由内部设定
  loading?: boolean;
  // 异步获取子树
  fetchChildren?: FetchRxzTreeItemsFunction;
}

export default {
  rxzTreeProps: definePropsUtil({
    modelValue: { type: Array as PropType<RxzTreeItem[]>, required: true },
    hiddenIcon: { type: Boolean, default: false },
    foldIcon: { type: String, default: 'arrow-right' },
    unfoldIcon: { type: String, default: 'arrow-down' },
    iconColor: { type: String, default: '#a8abb2' },
    indent: { type: String, default: '16px' },
  }),
  rxzTreeEmits: defineEmitsUtil({
    'update:modelValue': null,
    'selected': null,
  }),
};

