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
    sidebarDepth: 1,
    navbar: [
      {
        text: "TODO",
        link: "/todo/001.md",
      },
      // {
      //   text: "数据结构",
      //   link: "/datastructure/011.md",
      // },
      // {
      //   text: "计算机组成原理",
      //   link: "/computerOrganization/011.md",
      // },
      // {
      //   text: "操作系统",
      //   link: "/os/011.md",
      // },
      // {
      //   text: "计算机网络",
      //   link: "/network/011.md",
      // },
      {
        text: "数据库",
        link: "/database/S01_01.md",
      },
      {
        text: "Java",
        link: "/java/S01_01.md",
      },
      {
        text: "SSM",
        link: "/ssm/S01_01.md",
      },
      {
        text: "React",
        link: "/react/001.md",
      },
      {
        text: "学习路线",
        link: "/studypath/011.md",
      },
      // {
      //   text: "LeetCode",
      //   link: "/leetcode/000.md",
      // },
      // {
      //   text: "年度计划",
      //   link: "/yearplan/000.md",
      // },
      // {
      //   text: "职场",
      //   link: "/zhichang/001.md",
      // },
      {
        text: "分布式",
        link: "/fenbushi/001.md",
      },
      {
        text: "Redis",
        link: "/redis/011.md",
      },
      {
        text: "实用工具",
        link: "/others/001.md",
      },
    ],
    sidebar: {
      "/java/": [
        {
          text: "第一阶段 语言基石：OOP 与关键字",
          collapsible: true,
          children: [
            "/java/S01_01.md",
            "/java/S01_02.md",
            "/java/S01_03.md",
            "/java/S01_04.md",
            "/java/S01_05.md",
            "/java/S01_06.md",
            "/java/S01_07.md",
            "/java/S01_08.md",
            "/java/S01_09.md",
            "/java/S01_10.md",
            "/java/S01_11.md",
            "/java/S01_12.md",
            "/java/S01_13.md",
          ],
        },
        {
          text: "第二阶段 集合框架与常用工具类",
          collapsible: true,
          children: [
            "/java/S02_01.md",
            "/java/S02_02.md",
            "/java/S02_03.md",
            "/java/S02_04.md",
            "/java/S02_05.md",
            "/java/S02_06.md",
            "/java/S02_07.md",
            "/java/S02_08.md",
            "/java/S02_09.md",
            "/java/S02_10.md",
            "/java/S02_11.md",
            "/java/S02_12.md",
          ],
        },
        {
          text: "第三阶段 设计模式（Summer IOC/AOP 核心思想）",
          collapsible: true,
          children: [
            "/java/S03_01.md",
            "/java/S03_02.md",
            "/java/S03_03.md",
            "/java/S03_04.md",
          ],
        },
        {
          text: "第四阶段 异常处理机制",
          collapsible: true,
          children: [
            "/java/S04_01.md",
            "/java/S04_02.md",
          ],
        },
        {
          text: "第五阶段 并发编程",
          collapsible: true,
          children: [
            "/java/S05_01.md",
            "/java/S05_02.md",
          ],
        },
        {
          text: "第六阶段 JVM 内存模型与 GC（占位：待补）",
          collapsible: true,
          children: [],
        },
        {
          text: "第七阶段 网络通信与 RPC（造 Summer-RPC）",
          collapsible: true,
          children: ["/java/S07_01.md"],
        },
        {
          text: "第八阶段 消息队列 MQ（造 Summer-MQ）",
          collapsible: true,
          children: ["/java/S08_01.md"],
        },
      ],
      "/ssm/": [
        {
          text: "第一阶段 Spring 核心（Summer IOC & AOP）",
          collapsible: true,
          children: [
            "/ssm/S01_01.md",
            "/ssm/S01_02.md",
            "/ssm/S01_03.md",
            "/ssm/S01_04.md",
            "/ssm/S01_05.md",
            "/ssm/S01_06.md",
            "/ssm/S01_07.md",
            "/ssm/S01_08.md",
          ],
        },
        {
          text: "第二阶段 SpringMVC Web 层（Summer-MVC）",
          collapsible: true,
          children: [
            "/ssm/S02_01.md",
            "/ssm/S02_02.md",
            "/ssm/S02_03.md",
            "/ssm/S02_04.md",
            "/ssm/S02_05.md",
            "/ssm/S02_06.md",
          ],
        },
        {
          text: "第三阶段 MyBatis 数据访问（MineBatis 对照）",
          collapsible: true,
          children: [
            "/ssm/S03_01.md",
            "/ssm/S03_02.md",
            "/ssm/S03_03.md",
            "/ssm/S03_04.md",
            "/ssm/S03_05.md",
          ],
        },
        {
          text: "第四阶段 SpringBoot 自动装配（Summer-Boot）",
          collapsible: true,
          children: ["/ssm/S04_01.md"],
        },
        {
          text: "第五阶段 单元测试（JUnit & Mock）",
          collapsible: true,
          children: ["/ssm/S05_01.md"],
        },
        {
          text: "第六阶段 SpringCloud 微服务（Summer-Cloud）",
          collapsible: true,
          children: [
            "/ssm/S06_01.md",
            "/ssm/S06_02.md",
            "/ssm/S06_03.md",
            "/ssm/S06_04.md",
            "/ssm/S06_05.md",
            "/ssm/S06_06.md",
          ],
        },
      ],
      "/react/": [
        {
          text: "第一章 react",
          collapsible: true,
          children: [
            "/react/001.md",
            "/react/002.md",
            "/react/003.md",
            "/react/004.md",
            "/react/005.md",
            "/react/006.md",
            "/react/007.md",
          ],
        },
      ],
      "/computerOrganization/": [
        {
          text: "第一章 计算机系统概述",
          collapsible: true,
          children: ["/computerOrganization/011.md", "/computerOrganization/012.md"],
        },
        {
          text: "第二章 数据的表示和运算",
          collapsible: true,
          children: [
            "/computerOrganization/021.md",
            "/computerOrganization/022.md",
            "/computerOrganization/023.md",
          ],
        },
        {
          text: "第三章 存储系统",
          collapsible: true,
          children: [
            "/computerOrganization/031.md",
            "/computerOrganization/032.md",
            "/computerOrganization/033.md",
            "/computerOrganization/034.md",
            "/computerOrganization/035.md",
            "/computerOrganization/036.md",
          ],
        },
        {
          text: "第四章 指令系统",
          collapsible: true,
          children: [
            "/computerOrganization/041.md",
            "/computerOrganization/042.md",
            "/computerOrganization/043.md",
            "/computerOrganization/044.md",
          ],
        },
        {
          text: "第五章 中央处理器",
          collapsible: true,
          children: [
            "/computerOrganization/051.md",
            "/computerOrganization/052.md",
            "/computerOrganization/053.md",
            "/computerOrganization/054.md",
            "/computerOrganization/055.md",
            "/computerOrganization/056.md",
            "/computerOrganization/057.md",
          ],
        },
        {
          text: "第六章 总线",
          collapsible: true,
          children: [
            "/computerOrganization/061.md",
            "/computerOrganization/062.md",
          ],
        },
        {
          text: "第七章 输入/输出系统",
          collapsible: true,
          children: [
            "/computerOrganization/071.md",
            "/computerOrganization/072.md",
            "/computerOrganization/073.md",
          ],
        },
        {
          text: "第八章 并行",
          collapsible: true,
          children: ["/computerOrganization/081.md"],
        },
      ],
      "/datastructure/": [
        {
          text: "第一章 绪论",
          collapsible: true,
          children: ["/datastructure/011.md"],
        },
        {
          text: "第二章 线性表",
          collapsible: true,
          children: [
            "/datastructure/021.md",
            "/datastructure/022.md",
            "/datastructure/023.md",
          ],
        },
        {
          text: "第三章 栈、队列和数组",
          collapsible: true,
          children: [
            "/datastructure/031.md",
            "/datastructure/032.md",
            "/datastructure/033.md",
            "/datastructure/034.md",
          ],
        },
        {
          text: "第四章 串",
          collapsible: true,
          children: ["/datastructure/041.md", "/datastructure/042.md"],
        },
        {
          text: "第五章 树与二叉树",
          collapsible: true,
          children: [
            "/datastructure/051.md",
            "/datastructure/052.md",
            "/datastructure/053.md",
            "/datastructure/054.md",
            "/datastructure/055.md",
          ],
        },
        {
          text: "第六章 图",
          collapsible: true,
          children: [
            "/datastructure/061.md",
            "/datastructure/062.md",
            "/datastructure/063.md",
            "/datastructure/064.md",
          ],
        },
        {
          text: "第七章 查找",
          collapsible: true,
          children: [
            "/datastructure/071.md",
            "/datastructure/072.md",
            "/datastructure/073.md",
            "/datastructure/074.md",
            "/datastructure/075.md",
          ],
        },
        {
          text: "第八章 排序",
          collapsible: true,
          children: [
            "/datastructure/081.md",
            "/datastructure/082.md",
            "/datastructure/083.md",
            "/datastructure/084.md",
            "/datastructure/085.md",
            "/datastructure/086.md",
          ],
        },
        {
          text: "第九章 贪心算法",
          collapsible: true,
          children: ["/datastructure/091.md"],
        },
        {
          text: "第十章 动态规划",
          collapsible: true,
          children: ["/datastructure/101.md"],
        },
        {
          text: "第十二章 分治与回溯",
          collapsible: true,
          children: ["/datastructure/121.md"],
        },
      ],
      "/os/": [
        {
          text: "第一章 计算机系统概述",
          collapsible: true,
          children: ["/os/011.md", "/os/012.md", "/os/013.md", "/os/014.md", "/os/015.md"],
        },
        {
          text: "第二章 进程与线程",
          collapsible: true,
          children: ["/os/021.md", "/os/022.md", "/os/023.md", "/os/024.md"],
        },
        {
          text: "第三章 内存管理",
          collapsible: true,
          children: ["/os/031.md", "/os/032.md"],
        },
        {
          text: "第四章 文件管理",
          collapsible: true,
          children: ["/os/041.md", "/os/042.md", "/os/043.md"],
        },
        {
          text: "第五章 输入/输出（I/O）管理",
          collapsible: true,
          children: ["/os/051.md", "/os/052.md", "/os/053.md"],
        },
        {
          text: "第六章 死锁",
          collapsible: true,
          children: ["/os/061.md"],
        },
      ],
      "/network/": [
        {
          text: "第一章 计算机网络体系结构",
          collapsible: true,
          children: ["/network/011.md", "/network/012.md"],
        },
        {
          text: "第二章 物理层",
          collapsible: true,
          children: ["/network/021.md", "/network/022.md", "/network/023.md"],
        },
        {
          text: "第三章 数据链路层",
          collapsible: true,
          children: [
            "/network/031.md",
            "/network/032.md",
            "/network/033.md",
            "/network/034.md",
            "/network/035.md",
            "/network/036.md",
            "/network/037.md",
            "/network/038.md",
          ],
        },
        {
          text: "第四章 网络层",
          collapsible: true,
          children: [
            "/network/041.md",
            "/network/042.md",
            "/network/043.md",
            "/network/044.md",
            "/network/045.md",
            "/network/046.md",
            "/network/047.md",
            "/network/048.md",
          ],
        },
        {
          text: "第五章 传输层",
          collapsible: true,
          children: [
            "/network/051.md",
            "/network/052.md",
            "/network/053.md",
            "/network/054.md",
          ],
        },
        {
          text: "第六章 应用层",
          collapsible: true,
          children: [
            "/network/061.md",
            "/network/062.md",
            "/network/063.md",
            "/network/064.md",
            "/network/065.md",
          ],
        },
        {
          text: "HTTP",
          collapsible: true,
          children: [
            "/network/071.md",
            "/network/072.md",
            "/network/073.md",
            "/network/074.md",
            "/network/075.md",
          ],
        },
        {
          text: "网络安全",
          collapsible: true,
          children: ["/network/081.md"],
        },
      ],
      "/database/": [
        {
          text: "第一阶段 SQL 语法与使用",
          collapsible: true,
          children: [
            "/database/S01_01.md",
            "/database/S01_02.md",
            "/database/S01_03.md",
            "/database/S01_04.md",
            "/database/S01_05.md",
            "/database/S01_06.md",
            "/database/S01_07.md",
          ],
        },
        {
          text: "第二阶段 SQL 执行与优化",
          collapsible: true,
          children: [
            "/database/S02_01.md",
            "/database/S02_02.md",
          ],
        },
        {
          text: "第三阶段 数据存储结构（MyDB 轮子核心）",
          collapsible: true,
          children: [
            "/database/S03_01.md",
            "/database/S03_02.md",
            "/database/S03_03.md",
            "/database/S03_04.md",
            "/database/S03_05.md",
            "/database/S03_06.md",
          ],
        },
        {
          text: "第四阶段 索引与数据结构",
          collapsible: true,
          children: [
            "/database/S04_01.md",
            "/database/S04_02.md",
            "/database/S04_03.md",
            "/database/S04_04.md",
            "/database/S04_05.md",
            "/database/S04_06.md",
            "/database/S04_07.md",
          ],
        },
        {
          text: "第五阶段 事务、MVCC 与并发控制",
          collapsible: true,
          children: [
            "/database/S05_01.md",
            "/database/S05_02.md",
            "/database/S05_03.md",
            "/database/S05_04.md",
            "/database/S05_05.md",
          ],
        },
        {
          text: "第六阶段 预写日志 WAL 与崩溃恢复",
          collapsible: true,
          children: ["/database/S06_01.md"],
        },
        {
          text: "第七阶段 数据建模与范式",
          collapsible: true,
          children: [
            "/database/S07_01.md",
            "/database/S07_02.md",
          ],
        },
        {
          text: "第八阶段 数据库概念全景",
          collapsible: true,
          children: ["/database/S08_01.md"],
        },
        {
          text: "第九阶段 常见面试题专题（占位：待补）",
          collapsible: true,
          children: [],
        },
      ],
      "/leetcode/": [
        {
          text: "题单",
          collapsible: true,
          children: [
            "/leetcode/000.md",
            "/leetcode/001.md",
            "/leetcode/003.md",
            "/leetcode/009.md",
            "/leetcode/014.md",
            "/leetcode/026.md",
            "/leetcode/027.md",
            "/leetcode/088.md",
            "/leetcode/136.md",
          ],
        },
        {
          text: "数组/字符串",
          collapsible: true,
          children: [
            "/leetcode/026.md",
            "/leetcode/027.md",
            "/leetcode/088.md",
          ],
        },
      ],
      "/studypath/": [
        {
          text: "学习路线",
          collapsible: true,
          children: [
            "/studypath/011.md",
            "/studypath/012.md",
            "/studypath/014.md",
            "/studypath/015.md",
            "/studypath/017.md",
          ],
        },
        {
          text: "博客搭建",
          collapsible: true,
          children: ["/studypath/021.md"],
        },
        {
          text: "常用软件配置",
          collapsible: true,
          children: ["/studypath/031.md", "/studypath/032.md"],
        },
        {
          text: "刷课",
          collapsible: true,
          children: ["/studypath/041.md"],
        },
        {
          text: "刷题",
          collapsible: true,
          children: ["/studypath/051.md"],
        },
        {
          text: "收藏网站",
          collapsible: true,
          children: [
            "/studypath/061.md",
            "/studypath/062.md",
            "/studypath/063.md",
          ],
        },
      ],
      "/yearplan/": [
        {
          text: "2023",
          collapsible: true,
          children: ["/yearplan/000.md"],
        },
        {
          text: "2024",
          collapsible: true,
          children: ["/yearplan/001.md"],
        },
        {
          text: "2025",
          collapsible: true,
          children: ["/yearplan/002.md"],
        },
        {
          text: "2026",
          collapsible: true,
          children: ["/yearplan/003.md"],
        },
        {
          text: "2027",
          collapsible: true,
          children: ["/yearplan/004.md"],
        },
      ],
      "/zhichang/": [
        {
          text: "职场",
          collapsible: true,
          children: ["/zhichang/001.md", "/zhichang/002.md"],
        },
      ],
      "/project/": [
        {
          text: "项目实战",
          collapsible: true,
          children: ["/project/001.md"],
        },
      ],
      "/fenbushi/": [
        {
          text: "分布式",
          collapsible: true,
          children: ["/fenbushi/001.md"],
        },
      ],
      "/redis/": [
        {
          text: "第一章 Redis 基础",
          collapsible: true,
          children: ["/redis/011.md"],
        },
      ],
      "/others/": [
        {
          text: "常用插件",
          collapsible: true,
          children: ["/others/001.md"],
        },
        {
          text: "常用软件",
          collapsible: true,
          children: ["/others/002.md"],
        },
        {
          text: "CI/CD",
          collapsible: true,
          children: ["/others/003.md"],
        },
      ],
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
