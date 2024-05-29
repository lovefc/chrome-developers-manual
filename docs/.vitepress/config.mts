import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "chrome扩展开发手册",
  description: "看一遍就懂的chrome扩展开发手册",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/README.md' },
	  { text: '案例', link: 'https://github.com/lovefc/chrome-developers-manual/tree/main/examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lovefc/chrome-developers-manual' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 lovefc'
    }	
  },
  ignoreDeadLinks: true
})