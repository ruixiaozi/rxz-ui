/**
 * RxzTableCellRender
 * @description: RxzTableCellRender
 * @author: ruixiaozi
 * @since: 2.0.0
 */
import { RxzButtonGroupItem } from '@/components/advance/RxzButtonGroup';
import { RxzValidatorErrorTips } from '@/use/useRxzValidator';
import { definePropsUtil, defineEmitsUtil } from '@/utils';
import { Component, PropType } from 'vue';

export enum RXZ_TABLE_CELL_RENDER_TYPE_E {
  DATAMAP='datamap',
  I18N='i18n',
  LINK='link',
  OPERATOR='operator',
  COMPONENT='component',
  FORM_ITEM='formItem',
}

export type RxzTableCellRenderConfig = {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.DATAMAP,
  // datamap的key
  config: string;
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.I18N,
  config?: undefined;
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.LINK,
  config: {
    // urlKey，行数据中，保存url的key
    urlKey?: string;
    // 指定特定url，指定了url，urlkey不生效
    url?: string;
    // 指定text
    text?: string;
    // 是否新窗口打开，默认当前窗口
    isBlank?: boolean;
  };
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.OPERATOR,
  config: {
    // 操作按钮组
    buttons?: RxzButtonGroupItem[];
    // 同时显示个数，默认3
    max?: number;
  };
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.COMPONENT,
  config: {
    // 需要暴露value prop用于接收当前单元的值
    cnt: Component,
    props?: any,
  };
} | {
  type: RXZ_TABLE_CELL_RENDER_TYPE_E.FORM_ITEM,
  config: {
    // formItem的默认插槽使用一个组件，如果为空，则默认显示当前formitem的值
    slotCnt?: Component,
    props?: any,
    errorTip?: RxzValidatorErrorTips,
  };
};

export default {
  rxzTableCellRenderProps: definePropsUtil({
    rowData: { type: Object, required: true },
    columnKey: { type: String, required: true },
    index: { type: Number, required: true },
    config: { type: Object as PropType<RxzTableCellRenderConfig>, required: true },
  }),
  rxzTableCellRenderEmits: defineEmitsUtil({

  }),
};

