/**
 * RxzList
 * @description: RxzList
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';

export default {
  rxzListProps: definePropsUtil({
    items: { type: Array, default: () => [] },
    // 预计每一项的高度，未开启computeRealItemHeight，则用于列表项实际高度
    // 开启computeRealItemHeight，用于估算页面实际渲染条数
    // 高度如果太大，将导致第一页下方空白，高度如果太小，将导致页面实际渲染条数过多
    perItemHeight: { type: Number, default: '30' },
    // 是否计算列表项的实际高度，false，直接使用perItemHeight
    computeRealItemHeight: { type: Boolean, default: false },
  }),
  rxzListEmits: defineEmitsUtil({

  }),
};

