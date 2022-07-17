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
      { text: '工具集', link: '/utils/' },
      { text: 'GitHub', link: 'https://github.com/ruixiaozi/rxz-ui',target:'_blank' },
    ],

    //displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/guide/': [
        '/guide/README.md',
        '/guide/component.md',
        '/guide/directive.md',
        '/guide/utils.md'
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
          ]
        },
        {
          text: '视图组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/components/layout/rxzcenterlayout'
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
          text: '第三方库封装',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            '/directives/others/rxzecharts',
          ]
        }
      ],
      '/utils/':[
        '/utils/README.md',
        {
          text: '数组',
          sidebarDepth: 1,
          path:'/utils/array/',
          collapsable: false,
          children: [
            '/utils/array/sort',
          ]
        },
        {
          text: '日期时间',
          sidebarDepth: 1,
          path:'/utils/date/',
          collapsable: false,
          children: [
            '/utils/date/format',
          ]
        },
        {
          text: '对象操作',
          sidebarDepth: 1,
          path:'/utils/object/',
          collapsable: false,
          children: [
            '/utils/object/base',
          ]
        },
        {
          text: '字符串',
          sidebarDepth: 1,
          path:'/utils/string/',
          collapsable: false,
          children: [
            '/utils/string/logical',
          ]
        },
        {
          text: '第三方库封装',
          sidebarDepth: 1,
          path:'/utils/others/',
          collapsable: false,
          children: [
            '/utils/others/axios',
            '/utils/others/dayjs',
          ]
        }
      ]
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
