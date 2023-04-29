import { defaultTheme, WebpackConfiguration } from 'vuepress-webpack';
import { webpackBundler } from '@vuepress/bundler-webpack';
import webpackConfig from './webpack.config';

module.exports = {
  title: 'RxzUI',
  base: '/rxz-ui/',
  description: '一个基于Vue的UI组件、工具库，兼容多端设备UI',
  theme: defaultTheme({
    // 默认主题配置
    logo: '/img/logo.svg',
    navbar: [
      { text: '指南', link: '/guide/' },
      { text: '实例属性', link: '/properties/' },
      { text: 'ICON', link: '/icon/' },
      { text: '组件', link: '/components/' },
      { text: '指令', link: '/directives/' },
      { text: 'Use', link: '/use/' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/rxz-ui', target: '_blank' },
      { text: 'GitHub', link: 'https://github.com/ruixiaozi/rxz-ui', target: '_blank' },
      { text: 'Ruixiaozi', link: 'https://www.ruixiaozi.com', target: '_blank' },
    ],
    displayAllHeaders: true,
    sidebar: {
      '/guide/': ['/guide/README.md'],
      '/properties/': [
        '/properties/README.md',
        {
          text: '实例属性',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/properties/i18n.md', '/properties/datamap.md'],
        },
      ],
      '/components/': [
        '/components/README.md',
        {
          text: '视图组件',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/components/layout/rxzcontainer.md', '/components/layout/rxzflex.md'],
        },
        {
          text: '基础组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/base/rxzbutton.md',
            '/components/base/rxzicon.md',
            '/components/base/rxztip.md',
            '/components/base/rxzinput.md',
            '/components/base/rxzselect.md',
            '/components/base/rxzswitch.md',
            '/components/base/rxzradio.md',
            '/components/base/rxztextarea.md',
            '/components/base/rxzcheckbox.md',
            '/components/base/rxzlist.md',
          ],
        },
        {
          text: '进阶组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/advance/rxzcountdownbutton.md',
            '/components/advance/rxzbuttongroup.md',
            '/components/advance/rxzsearch.md',
            '/components/advance/rxzpagination.md',
            '/components/advance/rxztableform.md',
          ],
        },
        {
          text: '进度条',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/components/process/rxzwaveprocess.md'],
        },
        {
          text: '卡片组件',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/components/card/rxzflipcard.md'],
        },
        {
          text: '导航',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/navigation/rxzbreadcrumb.md',
            '/components/navigation/rxzmenu.md',
            '/components/navigation/rxztabs.md',
            '/components/navigation/rxztree.md',
          ],
        },
        {
          text: '表单组件',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/components/form/rxzform.md', '/components/form/rxzformitem.md', '/components/form/rxzlabel.md'],
        },
        {
          text: '表格组件',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/components/table/rxztable.md'],
        },
      ],
      '/directives/': [
        '/directives/README.md',
        {
          text: '基础指令',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/directives/base/rxzoverflow.md',
            '/directives/base/rxzresizeobserve.md',
            '/directives/base/rxztooltip.md',
            '/directives/base/rxzloading.md',
            '/directives/base/rxztheme.md',
            '/directives/base/rxzbadge.md',
          ],
        },
      ],
      '/use/': [
        '/use/README.md',
        {
          text: '基础',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/use/base/userxzi18n.md',
            '/use/base/userxzdatamap.md',
            '/use/base/userxzfocus.md',
            '/use/base/userxzssr.md',
            '/use/base/userxzvalidator.md',
          ],
        },
        {
          text: 'Setup [仅用于setup中]',
          sidebarDepth: 1,
          collapsable: false,
          children: ['/use/setup/userxzbindingwithinsetup.md', '/use/setup/userxzrelativevalidatorwithinsetup.md'],
        },
        {
          text: '弹出层',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/use/popup/userxzpopup.md',
            '/use/popup/userxzpopover.md',
            '/use/popup/userxzmodal.md',
            '/use/popup/userxzmessagebox.md',
            '/use/popup/userxzalert.md',
            '/use/popup/userxzloading.md',
          ],
        },
      ],
    },
  } as any),
  bundler: webpackBundler({
    postcss: {},
    vue: {},
    chainWebpack: webpackConfig.chainWebpack,
    configureWebpack(config, isServer, isBuild) {
      return {
        module: {
          rules: [
            {
              test: /\.tsx$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    babelrc: false,
                    configFile: false,
                    plugins: ['@vue/babel-plugin-jsx'],
                  },
                },
                {
                  loader: 'ts-loader',
                },
              ],
            },
          ],
        },
      };
    },
  }),
};
