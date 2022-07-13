import { install } from '@/common';
import { App } from 'vue';
import { RxzOverflow } from './RxzOverflow';

const directives = [new RxzOverflow()];

export default {
  install: install((app: App) => {
    // 遍历注册所有组件
    directives.forEach((directive) => {
      app.directive(directive.name, directive);
    });
  }),
};
