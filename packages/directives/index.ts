import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzLoadingirective } from './RxzLoadingirective';
import { RxzOverflowDirective } from './RxzOverflowDirective';
import { RxzResizeObserveDirective } from './RxzResizeObserveDirective';
import { RxzTooltipDirective } from './RxzTooltipDirective';

const directives = [
  getService(RxzOverflowDirective),
  getService(RxzResizeObserveDirective),
  getService(RxzTooltipDirective),
  getService(RxzLoadingirective),
];

export default {
  install: install((app: App) => {
    // 遍历注册所有组件
    directives.forEach((directive) => {
      app.directive(directive.name, directive);
    });
  }),
};
