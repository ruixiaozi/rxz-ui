import { App } from 'vue';
import { Components } from './components';
import Directives from './directives';
import { APIs } from './api';

// 全局引入样式
import '@/style/global.css';
import { install } from './common';

// 引入所有图标
const request = require.context('./icons', false, /\.svg$/u);
request.keys().forEach(request);

export * from './components';
export * from './api';
export * from './definition';
export * from './i18n';

export const RxzUI = {
  install: install((app: App) => {
    app.use(Directives);
    app.use(Components);
    app.use(APIs);
  }),
};
