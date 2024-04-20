# 看一遍就懂的chrome扩展开发手册

图文并茂的描述和介绍，让你一遍就了解最基本的chrome扩展开发。

本手册是基于最新的扩展开发手册整理而来，扩展版本是v3。

为什么要写这个手册，因为在谷歌的计划中， **2024 年 6 月**开始为 Chrome 127 及更高版本**停用** [Chrome 稳定版本](https://developer.chrome.com/docs/web-platform/chrome-release-channels?hl=zh-cn)（开发者版、Canary 版和 Beta 版）中的 Manifest V2 扩展程序。

再加上，最近自己也想开发谷歌扩展，于是边学习边总结。

如有不足之处，欢迎指出讨论学习。

# 目录

- [初步了解](/docs/初步了解/README.md)
  
  - [chrome插件是什么](/docs/初步了解/README.md#chrome插件是什么)
  - [chrome插件开发模式](/docs/初步了解/README.md#chrome插件开发模式)
  - [运行第一个chrome开发插件](/docs/初步了解/README.md#运行第一个chrome开发插件)
  - [打包第一个chrome开发插件](/docs/初步了解/README.md#打包第一个chrome开发插件)  

- [案例分析](/docs/案例分析/README.md)
  
  - [chrome插件清单定义](/docs/案例分析/#chrome插件清单定义)
  - [chrome插件的目录规范](/docs/案例分析/#chrome插件的目录规范)
  - [chrome插件行为介绍](/docs/案例分析/#chrome插件行为介绍)

- [核心概念](/docs/核心概念/README.md)
  
  - [API](/docs/核心概念/API.md)
  - [权限](/docs/核心概念/权限.md)
  - [内容脚本(content Script)](/docs/核心概念/内容脚本.md)
  - [后台脚本(Service Worker)](/docs/核心概念/后台脚本.md)
  - [消息传递](/docs/核心概念/消息传递.md)  

- [属性说明](/docs/属性说明/README.md)
  - [权限属性](/docs/属性说明/权限属性.md)


