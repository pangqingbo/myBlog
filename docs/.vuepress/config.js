module.exports = {
  // 语言
  lang: 'zh-CN',
  title: '飞鸟的博客',
  description: '让终身学习成为习惯',
  head: [['link', { rel: 'icon', href: '/images/astronaut.png' }]],
  themeConfig: {
    docsDir: "docs",
    logo: '/images/astronaut.png',
    sidebar: [
      // SidebarItem
      {
        text: '笔记',
        children: [
          // SidebarItem
          {
            collapsable: true,
            text: 'Markdown基本语法',
            link: '/notes/Note01Markdown基本语法.md',
          },
          // 字符串 - 页面文件路径
          // '/notes/Note01Markdown基本语法.md',
          '/notes/浏览器的回流与重绘.md',
          '/notes/Note02DOM.md',
          '/notes/JS数据类型及类型转换.md',
          '/notes/this.md',
          '/notes/什么是闭包？我们为什么需要闭包？.md',
          '/notes/作用域.md',
          '/notes/JS变量提升和函数提升.md',
          '/notes/JS原型.md',
          '/notes/ES6之class.md',
          '/notes/Note03ES6数组的方法.md',
          '/notes/Note04ES6let和const&变量的解构赋值.md',
          '/notes/Note05ES6字符串的扩展.md',
          '/notes/Note07ES6数值的扩展.md',
          '/notes/Note08ES6函数的扩展.md',
          '/notes/Note09ES6对象的扩展.md',
          '/notes/Note10ES6对象的新增方法.md',
          '/notes/Note06Vue指令.md',
          '/notes/Note11nmp命令.md',
          '/notes/vim操作文件.md',
          '/notes/回调地狱.md'
        ],
      }
    ],
  },
}