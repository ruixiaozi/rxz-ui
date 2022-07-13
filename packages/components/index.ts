import { App } from 'vue';
import { AnimationComponents } from './Animation';
import { BaseComponents } from './Base';
import { LayoutComponents } from './Layout';
import { CardComponents } from './Card';
import { FormComponents } from './Form';
import { install } from '@/common';

export * from './Animation';
export * from './Base';
export * from './Layout';
export * from './Card';
export * from './Form';


// 所有组件列表
const components = [
  AnimationComponents,
  BaseComponents,
  LayoutComponents,
  CardComponents,
  FormComponents,
];

export const Components = {
  install: install((app: App) => {
    // 遍历注册所有组件
    components.forEach((component) => {
      app.use(component);
    });
  }),
};
