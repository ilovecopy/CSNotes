import { viteBundler } from "@vuepress/bundler-vite";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { markdownImagePlugin } from "@vuepress/plugin-markdown-image";
import { searchPlugin } from "@vuepress/plugin-search";

import { commentPlugin } from "@vuepress/plugin-comment";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"; //markown 增强

// const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

export default defineUserConfig({
  bundler: viteBundler(),
  base: "/",
  lang: "zh-CN",
  title: "CSNotes",
  description: "计算机学习笔记",
  theme: defaultTheme({
    colorMode: "auto",
    colorModeSwitch: true,
    logo: "/images/logo.png",
    repo: "ilovecopy/CSNotes",
    docsDir: "docs",
    editLinkText: "编辑此页",
    lastUpdatedText: "上次更新",
    contributors: false,
    sidebarDepth: 2,
    navbar: [
      {
        text: "TODO",
        link: "/todo/0101.md",
      },
      // {
      //   text: "数据结构",
      //   link: "/datastructure/0101.md",
      // },
      // {
      //   text: "计算机组成原理",
      //   link: "/computerOrganization/0101.md",
      // },
      // {
      //   text: "操作系统",
      //   link: "/os/0101.md",
      // },
      // {
      //   text: "计算机网络",
      //   link: "/network/0101.md",
      // },
      {
        text: "MySQL",
        link: "/database/0101.md",
      },
      {
        text: "Java",
        link: "/java/0101.md",
      },
      {
        text: "SSM",
        link: "/ssm/0101.md",
      },
      {
        text: "React",
        link: "/react/0101.md",
      },
      {
        text: "学习路线",
        link: "/studypath/0101.md",
      },
      // {
      //   text: "LeetCode",
      //   link: "/leetcode/0101.md",
      // },
      // {
      //   text: "年度计划",
      //   link: "/yearplan/0101.md",
      // },
      // {
      //   text: "职场",
      //   link: "/zhichang/0101.md",
      // },
      {
        text: "分布式",
        link: "/fenbushi/0101.md",
      },
      {
        text: "Redis",
        link: "/redis/0101.md",
      },
      {
        text: "实用工具",
        link: "/others/0101.md",
      },
    ],
    sidebar: {
  "/java/": [
    { text: "第一章 Java 基础", children: ["/java/0101.md", "/java/0102.md", "/java/0103.md", "/java/0104.md", "/java/0105.md", "/java/0106.md", "/java/0107.md", "/java/0108.md", "/java/0109.md", "/java/0110.md", "/java/0111.md", "/java/0112.md", "/java/0113.md", "/java/0114.md", "/java/0115.md", "/java/0116.md"] },
    { text: "第二章 集合", children: ["/java/0201.md", "/java/0202.md", "/java/0203.md", "/java/0204.md", "/java/0205.md", "/java/0206.md", "/java/0207.md", "/java/0208.md", "/java/0209.md", "/java/0210.md", "/java/0211.md"] },
    { text: "第三章 设计模式", children: ["/java/0301.md", "/java/0302.md", "/java/0303.md", "/java/0304.md"] },
    { text: "第四章 异常", children: ["/java/0401.md", "/java/0402.md"] },
    { text: "第五章 并发", children: ["/java/0501.md", "/java/0502.md"] },
    { text: "第六章 JVM", children: ["/java/0601.md","/java/0602.md","/java/0603.md","/java/0604.md","/java/0605.md","/java/0606.md"] },
    { text: "第七章 RPC", children: ["/java/0701.md"] },
    { text: "第八章 消息队列", children: ["/java/0801.md"] }
  ],
  "/ssm/": [
    { text: "第一章 Spring 核心", children: ["/ssm/0101.md", "/ssm/0102.md", "/ssm/0103.md", "/ssm/0104.md", "/ssm/0105.md", "/ssm/0106.md", "/ssm/0107.md", "/ssm/0108.md"] },
    { text: "第二章 SpringMVC", children: ["/ssm/0201.md", "/ssm/0202.md", "/ssm/0203.md", "/ssm/0204.md", "/ssm/0205.md", "/ssm/0206.md"] },
    { text: "第三章 MyBatis", children: ["/ssm/0301.md", "/ssm/0302.md", "/ssm/0303.md", "/ssm/0304.md", "/ssm/0305.md"] },
    { text: "第四章 SpringBoot 自动装配", children: ["/ssm/0401.md"] },
    { text: "第五章 单元测试", children: ["/ssm/0501.md"] },
    { text: "第六章 SpringCloud 微服务", children: ["/ssm/0601.md", "/ssm/0602.md", "/ssm/0603.md", "/ssm/0604.md", "/ssm/0605.md", "/ssm/0606.md"] }
  ],
  "/react/": [
    { text: "第一章 React", children: ["/react/0101.md", "/react/0102.md", "/react/0103.md", "/react/0104.md", "/react/0105.md", "/react/0106.md", "/react/0107.md"] }
  ],
  "/computerOrganization/": [
    { text: "第一章 计算机系统概述", children: ["/computerOrganization/0101.md", "/computerOrganization/0102.md"] },
    { text: "第二章 数据的表示和运算", children: ["/computerOrganization/0201.md", "/computerOrganization/0202.md", "/computerOrganization/0203.md"] },
    { text: "第三章 存储系统", children: ["/computerOrganization/0301.md", "/computerOrganization/0302.md", "/computerOrganization/0303.md", "/computerOrganization/0304.md", "/computerOrganization/0305.md", "/computerOrganization/0306.md"] },
    { text: "第四章 指令系统", children: ["/computerOrganization/0401.md", "/computerOrganization/0402.md", "/computerOrganization/0403.md", "/computerOrganization/0404.md"] },
    { text: "第五章 中央处理器", children: ["/computerOrganization/0501.md", "/computerOrganization/0502.md", "/computerOrganization/0503.md", "/computerOrganization/0504.md", "/computerOrganization/0505.md", "/computerOrganization/0506.md", "/computerOrganization/0507.md"] },
    { text: "第六章 总线", children: ["/computerOrganization/0601.md", "/computerOrganization/0602.md"] },
    { text: "第七章 输入/输出系统", children: ["/computerOrganization/0701.md", "/computerOrganization/0702.md", "/computerOrganization/0703.md"] },
    { text: "第八章 并行", children: ["/computerOrganization/0801.md"] }
  ],
  "/datastructure/": [
    { text: "第一章 绪论", children: ["/datastructure/0101.md"] },
    { text: "第二章 线性表", children: ["/datastructure/0201.md", "/datastructure/0202.md", "/datastructure/0203.md"] },
    { text: "第三章 栈、队列和数组", children: ["/datastructure/0301.md", "/datastructure/0302.md", "/datastructure/0303.md", "/datastructure/0304.md"] },
    { text: "第四章 串", children: ["/datastructure/0401.md", "/datastructure/0402.md"] },
    { text: "第五章 树与二叉树", children: ["/datastructure/0501.md", "/datastructure/0502.md", "/datastructure/0503.md", "/datastructure/0504.md", "/datastructure/0505.md"] },
    { text: "第六章 图", children: ["/datastructure/0601.md", "/datastructure/0602.md", "/datastructure/0603.md", "/datastructure/0604.md"] },
    { text: "第七章 查找", children: ["/datastructure/0701.md", "/datastructure/0702.md", "/datastructure/0703.md", "/datastructure/0704.md", "/datastructure/0705.md"] },
    { text: "第八章 排序", children: ["/datastructure/0801.md", "/datastructure/0802.md", "/datastructure/0803.md", "/datastructure/0804.md", "/datastructure/0805.md", "/datastructure/0806.md"] },
    { text: "第九章 贪心算法", children: ["/datastructure/0901.md"] },
    { text: "第十章 动态规划", children: ["/datastructure/1001.md"] },
    { text: "第十一章 分治与回溯", children: ["/datastructure/1101.md"] }
  ],
  "/os/": [
    { text: "第一章 计算机系统概述", children: ["/os/0101.md", "/os/0102.md", "/os/0103.md", "/os/0104.md", "/os/0105.md"] },
    { text: "第二章 进程与线程", children: ["/os/0201.md", "/os/0202.md", "/os/0203.md", "/os/0204.md"] },
    { text: "第三章 内存管理", children: ["/os/0301.md", "/os/0302.md"] },
    { text: "第四章 文件管理", children: ["/os/0401.md", "/os/0402.md", "/os/0403.md"] },
    { text: "第五章 输入/输出（I/O）管理", children: ["/os/0501.md", "/os/0502.md", "/os/0503.md"] },
    { text: "第六章 死锁", children: ["/os/0601.md"] }
  ],
  "/network/": [
    { text: "第一章 计算机网络体系结构", children: ["/network/0101.md", "/network/0102.md"] },
    { text: "第二章 物理层", children: ["/network/0201.md", "/network/0202.md", "/network/0203.md"] },
    { text: "第三章 数据链路层", children: ["/network/0301.md", "/network/0302.md", "/network/0303.md", "/network/0304.md", "/network/0305.md", "/network/0306.md", "/network/0307.md", "/network/0308.md"] },
    { text: "第四章 网络层", children: ["/network/0401.md", "/network/0402.md", "/network/0403.md", "/network/0404.md", "/network/0405.md", "/network/0406.md", "/network/0407.md", "/network/0408.md"] },
    { text: "第五章 传输层", children: ["/network/0501.md", "/network/0502.md", "/network/0503.md", "/network/0504.md"] },
    { text: "第六章 应用层", children: ["/network/0601.md", "/network/0602.md", "/network/0603.md", "/network/0604.md", "/network/0605.md"] },
    { text: "第七章 HTTP 协议", children: ["/network/0701.md", "/network/0702.md", "/network/0703.md", "/network/0704.md", "/network/0705.md"] },
    { text: "第八章 网络安全", children: ["/network/0801.md"] }
  ],
  "/database/": [
    { text: "第一章 SQL 语法", children: ["/database/0101.md", "/database/0102.md", "/database/0103.md", "/database/0104.md", "/database/0105.md", "/database/0106.md", "/database/0107.md", "/database/0108.md"] },
    { text: "第二章 SQL 执行", children: ["/database/0201.md", "/database/0202.md", "/database/0206.md", "/database/0207.md"] },
    { text: "第三章 存储结构", children: ["/database/0301.md", "/database/0302.md", "/database/0303.md", "/database/0304.md", "/database/0305.md", "/database/0306.md"] },
    { text: "第四章 索引", children: ["/database/0401.md", "/database/0402.md", "/database/0403.md", "/database/0404.md", "/database/0405.md", "/database/0406.md", "/database/0407.md", "/database/0409.md"] },
    { text: "第五章 事务", children: ["/database/0501.md", "/database/0502.md", "/database/0503.md", "/database/0504.md", "/database/0505.md"] },
    { text: "第六章 日志", children: ["/database/0601.md","/database/0602.md","/database/0603.md","/database/0604.md","/database/0605.md","/database/0606.md"] },
    { text: "第七章 锁", children: ["/database/0701.md"] },
  ],
  "/leetcode/": [
    { text: "第一章 题单总览", children: ["/leetcode/0101.md", "/leetcode/0102.md", "/leetcode/0103.md", "/leetcode/0104.md", "/leetcode/0105.md", "/leetcode/0106.md", "/leetcode/0107.md", "/leetcode/0108.md", "/leetcode/0109.md"] },
    { text: "第二章 数组与字符串", children: ["/leetcode/0106.md", "/leetcode/0107.md", "/leetcode/0108.md"] }
  ],
  "/studypath/": [
    { text: "第一章 学习路线", children: ["/studypath/0101.md", "/studypath/0102.md", "/studypath/0103.md", "/studypath/0104.md", "/studypath/0105.md"] },
    { text: "第二章 博客搭建", children: ["/studypath/0201.md"] },
    { text: "第三章 常用软件配置", children: ["/studypath/0301.md", "/studypath/0302.md"] },
    { text: "第四章 刷课记录", children: ["/studypath/0401.md"] },
    { text: "第五章 刷题计划", children: ["/studypath/0501.md"] },
    { text: "第六章 收藏网站", children: ["/studypath/0601.md", "/studypath/0602.md", "/studypath/0603.md"] }
  ],
  "/yearplan/": [
    { text: "第一章 2023 年度计划", children: ["/yearplan/0101.md"] },
    { text: "第二章 2024 年度计划", children: ["/yearplan/0201.md"] },
    { text: "第三章 2025 年度计划", children: ["/yearplan/0301.md"] },
    { text: "第四章 2026 年度计划", children: ["/yearplan/0401.md"] },
    { text: "第五章 2027 年度计划", children: ["/yearplan/0501.md"] }
  ],
  "/zhichang/": [
    { text: "第一章 职场经验", children: ["/zhichang/0101.md", "/zhichang/0102.md"] }
  ],
  "/project/": [
    { text: "第一章 项目实战", children: ["/project/0101.md"] }
  ],
  "/fenbushi/": [
    { text: "第一章 分布式基础理论", children: ["/fenbushi/0101.md"] }
  ],
  "/redis/": [
    { text: "第一章 Redis 基础", children: ["/redis/0101.md"] }
  ],
  "/todo/": [
    { text: "第一章 工作看板", children: ["/todo/0101.md"] }
  ],
  "/others/": [
    { text: "第一章 常用插件", children: ["/others/0101.md"] },
    { text: "第二章 常用软件", children: ["/others/0201.md"] },
    { text: "第三章 CI/CD 实践", children: ["/others/0301.md"] }
  ]
    },
  }),

  plugins: [
    mdEnhancePlugin({
      // mermaid: true,
    }),
    commentPlugin({
      provider: "Giscus",
      comment: true,
      darkTheme: "dark_protanopia",
      lightTheme: "light_protanopia",
      repo: "ilovecopy/CSNotes",
      repoId: "R_kgDOKmkqaw",
      category: "Announcements",
      categoryId: "DIC_kwDOKmkqa84Cah9r",
      strict: false,
      reactionsEnabled: true,
      lazyLoading: true,
      inputPosition: "bottom",
      mapping: "pathname",
    }),
    copyCodePlugin({
      // 配置复制代码插件
    }),
    markdownImagePlugin({
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    }),
    searchPlugin({
      // 配置搜索插件
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    // docsearchPlugin({
    //   appId: "NGDYRTIYPA",
    //   apiKey: "29c4b288451deef1653461bdea656b89",
    //   indexName: "csxiaotang",
    //   // container: "### REPLACE ME WITH A CONTAINER (e.g. div) ###",
    //   // debug: false,
    // }),
  ],
});
