module.exports = {
  title: 'RXZ-UI',
  base: '/rxz-ui/',
  description: '一个基于Vue的UI组件、工具库，兼容多端设备UI',
  themeConfig: {
    logo: '/img/logo.svg',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '指令', link: '/directives/' },
      { text: '工具集', link: '/utils/' },
      { text: 'GitHub', link: 'https://github.com/ruixiaozi/rxz-ui',target:'_blank' },
    ],

    //displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/guide/': [
        '',
        'component',
        'directive',
        'utils'
      ],
      '/components/':[
        '',
        {
          title: '基础组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'base/rxzbutton',
            'base/rxzcountdownbutton',
            'base/rxzdialog',
            'base/rxzicon',
            'base/rxzloading',
          ]
        },
        {
          title: '视图组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'layout/rxzcenterlayout'
          ]
        },
        {
          title: '动画组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'animation/rxzwaveprocess',
          ]
        },
        {
          title: '卡片组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'card/rxzflipcard',
          ]
        },
        {
          title: '表单组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
          ]
        },
        {
          title: '表格组件',
          sidebarDepth: 1,
          collapsable: false,
          children: [
          ]
        },
      ],
      '/directives/':[
        '',
        {
          title: '第三方库封装',
          sidebarDepth: 1,
          collapsable: false,
          children: [
            'others/rxzecharts',
          ]
        }
      ],
      '/utils/':[
        '',
        {
          title: '数组',
          sidebarDepth: 1,
          path:'/utils/array/',
          collapsable: false,
          children: [
            'array/sort',
          ]
        },
        {
          title: '日期时间',
          sidebarDepth: 1,
          path:'/utils/date/',
          collapsable: false,
          children: [
            'date/format',
          ]
        },
        {
          title: '对象操作',
          sidebarDepth: 1,
          path:'/utils/object/',
          collapsable: false,
          children: [
            'object/base',
          ]
        },
        {
          title: '字符串',
          sidebarDepth: 1,
          path:'/utils/string/',
          collapsable: false,
          children: [
            'string/logical',
          ]
        },
        {
          title: '第三方库封装',
          sidebarDepth: 1,
          path:'/utils/others/',
          collapsable: false,
          children: [
            'others/axios',
            'others/dayjs',
          ]
        }
      ]
    }

  }
}
