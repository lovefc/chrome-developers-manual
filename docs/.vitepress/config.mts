import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "chrome扩展开发手册",
  description: "看一遍就懂的chrome扩展开发手册",
  head: [['link', { rel: 'shortcut icon',  href: '/favicon.ico'}],['link', { rel: 'icon', type: 'image/svg+xml', href: '/chrome-logo.svg'}]],
  themeConfig: {
    logo: { src: "/chrome-logo.svg", width: 24, height: 24 },
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