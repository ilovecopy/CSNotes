# CSNotes - 计算机科学学习笔记

[![GitHub stars](https://img.shields.io/github/stars/ilovecopy/CSNotes?logo=github)](https://github.com/ilovecopy/CSNotes)
[![GitHub forks](https://img.shields.io/github/forks/ilovecopy/CSNotes?logo=github)](https://github.com/ilovecopy/CSNotes)
[![GitHub license](https://img.shields.io/github/license/ilovecopy/CSNotes)](https://github.com/ilovecopy/CSNotes/blob/main/LICENSE)
[![VuePress](https://img.shields.io/badge/VuePress-2.0-blue)](https://v2.vuepress.vuejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-≥18-green)](https://nodejs.org/)

一个基于 VuePress 2 构建的计算机科学学习笔记网站，涵盖数据结构、算法、操作系统、网络、Java、React 等核心计算机科学知识。

## 🌐 在线访问

- 主站：https://ilovecopy.github.io/CSNotes
- GitHub 仓库：https://github.com/ilovecopy/CSNotes

## 📚 内容涵盖

- **数据结构** - 数组、栈、队列、链表、树、图、查找、排序等
- **算法** - LeetCode 题解、算法思想、复杂度分析
- **计算机组成原理** - 存储系统、指令系统、CPU、输入输出
- **操作系统** - 进程管理、内存管理、文件系统、设备管理
- **计算机网络** - 物理层到应用层、TCP/IP、HTTP、WebSocket
- **数据库** - MySQL、索引、事务、锁、SQL 优化
- **Java** - Spring Boot、JVM、多线程、集合框架
- **前端** - React、Vue、JavaScript、TypeScript
- **其他** - Git、Redis、Linux、设计模式等

## 🚀 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- npm 8.0.0 或更高版本

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:8080 查看效果。

### 构建生产版本

```bash
npm run build
```

构建结果将生成在 `docs/.vuepress/dist` 目录。

### 预览构建结果

```bash
npm run preview
```

### 部署到 GitHub Pages

```bash
npm run deploy
```

## 🛠️ 开发指南

### 项目结构

```
CSNotes/
├── docs/                    # 文档目录
│   ├── .vuepress/          # VuePress 配置
│   │   ├── config.ts       # 配置文件
│   │   ├── public/         # 静态资源
│   │   └── styles/         # 样式文件
│   ├── datastructure/      # 数据结构笔记
│   ├── computerOrganization/ # 计算机组成原理
│   ├── os/                # 操作系统
│   ├── network/           # 计算机网络
│   ├── java/              # Java 相关
│   ├── leetcode/          # LeetCode 题解
│   └── ...                # 其他目录
├── package.json           # 项目配置
├── deploy.sh             # 部署脚本
└── README.md             # 项目说明
```

### 添加新内容

1. 在相应的目录下创建新的 Markdown 文件
2. 使用正确的 Frontmatter 格式：

```markdown
---
title: 文章标题
date: 2024-01-01
category: 分类
tags:
  - 标签 1
  - 标签 2
---

# 文章内容

使用 Markdown 语法编写内容...
```

3. 如果需要更新侧边栏，修改 `docs/.vuepress/config.ts` 中的 `sidebar` 配置

### 代码规范

- 使用 Prettier 格式化代码：`npm run format`
- 提交前自动格式化：项目已配置 Husky 和 lint-staged
- Markdown 文件使用统一的格式规范

## 🤝 贡献指南

欢迎贡献内容！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/your-feature`
5. 提交 Pull Request

### 贡献内容类型

- 修正错别字或错误信息
- 补充知识点或示例代码
- 添加新的学习主题
- 改进文档结构或导航
- 修复技术问题或更新过时内容

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为这个项目做出贡献的人！

- VuePress 团队 - 优秀的静态网站生成器
- 所有计算机科学教育资源的作者
- 开源社区的贡献者们

## 📞 联系

- 问题反馈：请使用 [GitHub Issues](https://github.com/ilovecopy/CSNotes/issues)

---

如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！