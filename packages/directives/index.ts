import { getService, install } from '@/common';
import { App } from 'vue';
import { RxzOverflow } from './RxzOverflow';
import { RxzResizeObserve } from './RxzResizeObserve';
import { RxzTooltip } from './RxzTooltip';

const directives = [
  getService(RxzOverflow),
  getService(RxzResizeObserve),
  getService(RxzTooltip),
];

export default {
  install: install((app: App) => {
    // 遍历注册所有组件
    directives.forEach((directive) => {
      app.directive(directive.name, directive);
    });
  }),
};
