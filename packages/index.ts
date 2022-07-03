import { App } from 'vue';
import { Components } from './components';
import { i18n } from './i18n';
import Directives from './directives';

// 全局引入样式
import '@/style/normalize.css';
import '@/style/font-awesome.min.css';

export * from './components';

export const RxzUI = {
  install(app: App): void{
    app.use(i18n);
    app.use(Directives);
    app.use(Components);
  },
};
