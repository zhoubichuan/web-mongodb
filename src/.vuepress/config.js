module.exports = {
  title: 'MongoDB学习笔记',
  description: '风浪没平息 我宣告奔跑的意义',
  base: '/web-mongodb/', // 部署站点的基础路径
  port: 3009,
  dest: 'web-mongodb', // 指定 vuepress 的输出目录
  markdown: {
    toc: { includeLevel: [2, 3] },
    lineNumbers: true // 代码块显示行号
  },
  // head: [
  //   ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
  //   ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
  // ],

  plugins: {
    // 'vuepress-plugin-mermaidjs': {},
    // "vuepress-plugin-auto-sidebar": {},
    'demo-container': true,
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/nprogress': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'web-mongodb', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  // 主题配置
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-mongodb', // 源码地址
    repoLabel: '查看源码', // (查看源码的)组件名称
    docsBranch: 'master', // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    editLinkText: '在github上编辑此页',
    sidebarDepth: 2,
    lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
    nav: [{
      text: '基础知识',
      items: [{
        text: '一.MongoDB基础',
        link: '/base/build/1.index'
      },
      {
        text: '二.MongoDB实践',
        link: '/base/practice/1.index',
      }
      ]
    },
    {
      text: '高级知识',
      items: [{
        text: '一.项目实战',
        link: '/senior/use/1.index'
      },
      {
        text: '二.其他',
        link: '/senior/typeScript/1.index'
      },
      ]
    }
    ],
    sidebar: {
      '/base/build/': [
        '1.index',
        '2.webpack',
        '3.file',
        '4.single',
        '5.page',
        '7.module',
        '8.project',
        '9.utils',
        '10.ui',
        '11.data',
        '12.skill',
        '13.com',
        '14.data',
        '15.api'
      ],
      '/base/practice/': [
        '1.index',
        '2.Jenkins',
        '3.gitlab',
        'vscode',
        'test',
        'prem',
        'i18n'
      ],
      '/senior/use/': [
        '1.index',
        '2.extend',
        '3.componentCommunication',
        '4.render',
        '5.api',
        '6.form',
        '7.checkBox',
        '8.active',
        '9.alert',
        '10.table',
        '11.tree'
      ],
      '/senior/typeScript/': [
        '1.index'
      ],
    },
    searchMaxSuggestoins: 10
  },
}