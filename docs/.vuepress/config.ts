import { defaultTheme } from 'vuepress-webpack';
import { webpackBundler } from '@vuepress/bundler-webpack';
import path from 'path';

module.exports = {
  title: 'RxzUI 2',
  base: '/rxz-ui/',
  description: '一个基于Vue的UI组件、工具库，兼容多端设备UI',
  theme: defaultTheme({
    // 默认主题配置
    logo: '/img/logo.svg',
    navbar: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '指令', link: '/directives/' },
      {
        text: '2.x.x',
        children: [
          { text: '1.x.x', link: 'https://www.ruixiaozi.com/rxz-ui-1/', target:'_blank' },
        ]
      },
      { text: 'NPM', link: 'https://www.npmjs.com/package/rxz-ui', target:'_blank' },
      { text: 'GitHub', link: 'https://github.com/ruixiaozi/rxz-ui', target:'_blank' },
    ],

    //displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/guide/': [
        '/guide/README.md',
        '/guide/component.md',
        '/guide/directive.md',
      ],
      '/components/':[
        '/components/README.md',
        {
          text: '基础组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/base/rxzbutton.md',
            '/components/base/rxzcountdownbutton.md',
            '/components/base/rxzdialog.md',
            '/components/base/rxzicon.md',
            '/components/base/rxzloading.md',
            '/components/base/rxztheme.md',
          ]
        },
        {
          text: '视图组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/layout/rxzcenterlayout',
            '/components/layout/rxzflex'
          ]
        },
        {
          text: '动画组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/animation/rxzwaveprocess',
          ]
        },
        {
          text: '卡片组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/card/rxzflipcard',
          ]
        },
        {
          text: '表单组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
          ]
        },
        {
          text: '表格组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
          ]
        },
      ],
      '/directives/':[
        '/directives/README.md',
        {
          text: '基础指令',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/directives/base/rxzoverflow',
          ]
        }
      ],
    }
  } as any),
  bundler: webpackBundler({
    postcss: {},
    vue: {},
    chainWebpack: (config) => {
      // 新增一个 @ 指向 packages 目录, 方便示例代码中使用
      config.resolve.alias.set('@', path.resolve('packages'));
      return {
        devtool: 'source-map',
      };
    },
  }),
}
