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
      {
        text: "LeetCode",
        link: "/leetcode/001.md",
      },
      {
        text: "数据结构",
        link: "/datastructure/011.md",
      },
      {
        text: "计算机组成原理",
        link: "/computerOrganization/011.md",
      },
      {
        text: "操作系统",
        link: "/os/011.md",
      },
      {
        text: "计算机网络",
        link: "/network/011.md",
      },
      {
        text: "数据库",
        link: "/database/011.md",
      },
      {
        text: "Java",
        link: "/java/001.md",
      },
      {
        text: "SSM",
        link: "/ssm/001.md",
      },
      {
        text: "React",
        link: "/react/001.md",
      },
      // {
      //   text: "Redis",
      //   link: "/redis/011.md",
      // },
      // {
      //   text: "学习路线",
      //   link: "/studypath/011.md",
      // },
      // {
      //  text:"年度总结",
      //  link:"/yearplan/000.md"
      // },
      // {
      //     text: '常用工具',
      //     children: [{
      //         text: "Markdown 增强",
      //         link: "https://plugin-md-enhance.vuejs.press/zh/",
      //     }, {
      //         text: "VuePress 文档",
      //         link: "https://v2.vuepress.vuejs.org/zh/",
      //     }, {
      //         text: "Github 秘籍",
      //         link: "https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.zh-cn.md",
      //     }, {
      //         text: "C++",
      //         link: "https://www.bilibili.com/video/BV1Ps411w73m?share_source=copy_web",
      //     },
      //     {
      //         text: "LeetCode 高频",
      //         link: "https://codetop.cc/",
      //     },
      //     {
      //         text: "评论插件",
      //         link: "https://plugin-comment2.vuejs.press/zh/",
      //     },
      //     {
      //         text: "代码复制插件",
      //         link: "https://plugin-copy-code2.vuejs.press/zh/",
      //     }],
      // },
      {
        text: "实用工具",
        link: "/others/001.md",
      },
    ],
    sidebar: {
      "/java/": [
        {
          text: "第一章 Java基础类型",
          collapsible: true,
          children: [
            "/java/001.md",
            "/java/002.md",
            "/java/004.md",
            "/java/005.md",
            "/java/006.md",
            "/java/007.md",
            "/java/008.md",
            "/java/009.md",
            "/java/010.md",
            "/java/011.md",
            "/java/0111.md",
            "/java/012.md",
            "/java/013.md",
            "/java/014.md",
            "/java/015.md",
            "/java/016.md",
            "/java/017.md",
            "/java/018.md",
            "/java/019.md",
          ],
        },
        {
          text: "第二章 设计模式",
          collapsible: true,
          children: ["/java/021.md","/java/022.md","/java/023.md"],
        },
        {
          text: "第四章",
          collapsible: true,
          children: ["/java/041.md"],
        },
        {
          text: "第六章",
          collapsible: true,
          children: ["/java/061.md", "/java/062.md", "/java/063.md"],
        },
      ],
      "/ssm/": [
        {
          text: "第一章 Spring",
          collapsible: true,
          children: [
            "/ssm/001.md",
            "/ssm/002.md",
            "/ssm/003.md",
            "/ssm/004.md",
            "/ssm/005.md",
            "/ssm/006.md",
            "/ssm/007.md",
            "/ssm/008.md",
            "/ssm/009.md",
            "/ssm/0011.md",
          ],
        },
        {
          text: "第二章 SpringMVC",
          collapsible: true,
          children: [
            "/ssm/011.md",
            "/ssm/012.md",
            "/ssm/013.md",
            "/ssm/014.md",
          ],
        },
        {
          text: "第三章 MyBatis",
          collapsible: true,
          children: ["/ssm/021.md", "/ssm/022.md", "/ssm/023.md"],
        },
        {
          text: "第四章 SpringBoot",
          collapsible: true,
          children: ["/ssm/031.md"],
        },
        {
          text: "第五章 单元测试",
          collapsible: true,
          children: ["/ssm/041.md"],
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
          children: ["/computerOrganization/011.md"],
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
      ],
      "/os/": [
        {
          text: "第一章 计算机系统概述",
          collapsible: true,
          children: ["/os/011.md", "/os/012.md", "/os/013.md", "/os/014.md"],
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
      ],
      "/database/": [
        {
          text: "第一章 SQL语法",
          collapsible: true,
          children: [
            "/database/011.md",
            "/database/012.md",
            "/database/013.md",
            "/database/014.md",
            "/database/015.md",
            "/database/016.md",
            "/database/017.md",
          ],
        },
        {
          text: "第二章 了解 SQL",
          collapsible: true,
          children: [
            "/database/021.md",
            "/database/022.md",
            "/database/023.md",
            "/database/024.md",
            "/database/025.md",
          ],
        },
        {
          text: "第三章 数据库概念",
          collapsible: true,
          children: [
            "/database/031.md",
            "/database/032.md",
            "/database/033.md",
          ],
        },
        {
          text: "第四章 数据库数据结构",
          collapsible: true,
          children: ["/database/041.md"],
        },
        {
          text: "第五章 索引",
          collapsible: true,
          children: [
            "/database/051.md",
            "/database/052.md",
            "/database/053.md",
            "/database/054.md",
          ],
        },
        {
          text: "第六章 范式",
          collapsible: true,
          children: ["/database/061.md"],
        },
        {
          text: "第七章 日志",
          collapsible: true,
          children: ["/database/071.md"],
        },
        {
          text: "第八章 事务",
          collapsible: true,
          children: ["/database/081.md", "/database/082.md", "/database/083.md"],
        },
        {
          text: "第九章 InnoDB 页",
          collapsible: true,
          children: ["/database/091.md"],
        },
        {
          text: "第十章 常见面试题",
          collapsible: true,
          children: ["/database/101.md", "/database/102.md"],
        },
      ],
      "/leetcode/": [
        {
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
      ],
      "/zhichang/": [
        {
          text: "职场",
          collapsible: true,
          children: ["/zhichang/000.md"],
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
      mermaid: true,
    }),
    commentPlugin({
      provider: "Giscus",
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
