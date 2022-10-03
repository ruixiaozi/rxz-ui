import { App } from 'vue';
import { AnimationComponents } from './Animation';
import { BaseComponents } from './Base';
import { LayoutComponents } from './Layout';
import { CardComponents } from './Card';
import { FormComponents } from './Form';
import { TableComponents } from './Table';
import { install } from '@/common';

export * from './Animation';
export * from './Base';
export * from './Layout';
export * from './Card';
export * from './Form';
export * from './Table';

// 所有组件列表
const components = [
  AnimationComponents,
  BaseComponents,
  LayoutComponents,
  CardComponents,
  FormComponents,
  TableComponents,
];

export const Components = {
  install: install((app: App) => {
    // 遍历注册所有组件
    components.forEach((component) => {
      app.use(component);
    });
  }),
};
