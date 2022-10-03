import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzBadgeDirective } from './RxzBadgeDirective';
import { RxzLoadingDirective } from './RxzLoadingDirective';
import { RxzOverflowDirective } from './RxzOverflowDirective';
import { RxzResizeObserveDirective } from './RxzResizeObserveDirective';
import { RxzThemeDirective } from './RxzThemeDirective';
import { RxzTooltipDirective } from './RxzTooltipDirective';

const directives = [
  getService(RxzOverflowDirective),
  getService(RxzResizeObserveDirective),
  getService(RxzTooltipDirective),
  getService(RxzLoadingDirective),
  getService(RxzThemeDirective),
  getService(RxzBadgeDirective),
];

export default {
  install: install((app: App) => {
    // 遍历注册所有组件
    directives.forEach((directive) => {
      app.directive(directive.name, directive);
    });
  }),
};
