import { App } from 'vue';
import { Components } from './components';
import Directives from './directives';

// 全局引入样式
import '@/style/normalize.css';
import '@/style/font-awesome.min.css';
import { install } from './common';

export * from './components';

export const RxzUI = {
  install: install((app: App) => {
    app.use(Directives);
    app.use(Components);
  }),
};
