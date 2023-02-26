import { App } from 'vue';
import { Components } from './components';
import Directives from './directives';
import { APIs } from './api';

// 全局引入样式
import './style/global.css';
import { install } from './common';


export * from './components';
export * from './api';
export * from './definition';
export * from './i18n';
export * from './common';

export const RxzUI = {
  install: install((app: App) => {
    app.use(Directives);
    app.use(Components);
    app.use(APIs);
  }),
};
