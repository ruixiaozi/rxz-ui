import { install } from '@/common';
import { App } from 'vue';
import { RxzOverflow } from './RxzOverflow';
import { RxzResizeObserve } from './RxzResizeObserve';

const directives = [new RxzOverflow(), new RxzResizeObserve()];

export default {
  install: install((app: App) => {
    // 遍历注册所有组件
    directives.forEach((directive) => {
      app.directive(directive.name, directive);
    });
  }),
};
