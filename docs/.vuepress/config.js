const { defaultTheme } = require('@vuepress/theme-default')
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");//markown 增强
const { searchPlugin } = require('@vuepress/plugin-search')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { VssuePlugin } = require("@laoergege/vuepress-plugin-vssue-next-compat");
import 'vssue/dist/vssue.css'
module.exports = {
    title: 'CSNotes',
    plugins: [
        mdEnhancePlugin({
            mermaid: true,
            tex: true,
        }),
        searchPlugin({
            // 配置项
        }),
        VssuePlugin({
            platform: "github",
            owner: "ilovecopy",
            repo: "CSNotes",
            clientId: "7f87443e06058efece7e",
            clientSecret: "18b3e8cc2830a5fb980623e4bf606af2323311a4",
            labels: ["comment"],
            prefix: [""],
        }),
        // docsearchPlugin({
        //     appId: 'N3XTRN5Y4Z',
        //     indexName: 'search',
        //     apiKey: 'c91078bed372683bfafe3db149c95c68',
        //     searchParameters: {
        //         facetFilters: ['tags:v2'],
        //     },
        // }),
    ],
    theme: defaultTheme({
        lang: 'zh-CN',
        logo: "/images/avatar.jpeg",
        repo: 'ilovecopy/CSNotes',
        docsDir: 'docs',
        editLinkText: "编辑此页",
        contributors: false,
        lastUpdatedText: '上次更新',
        colorMode: 'auto',
        colorModeSwitch: true,
        navbar: [
            {
                text: '数据结构',
                link: '/datastructure/081.md',
            },
            {
                text: '组成原理',
                link: '/computerOrganization/001.md',
            },
            {
                text: '操作系统',
                link: '/os/031.md',
            },
            {
                text: '计算机网络',
                link: '/network/011.md',
            },
            {
                text: '常用工具',
                children: [{
                    text: "Markdown 增强",
                    link: "https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",
                }, {
                    text: "VuePress 文档",
                    link: "https://v2.vuepress.vuejs.org/zh/",
                }, {
                    text: "Github 秘籍",
                    link: "https://github.com/tiimgreen/github-cheat-sheet/blob/master/README.zh-cn.md",
                }, {
                    text: "C++",
                    link: "https://www.bilibili.com/video/BV1Ps411w73m?share_source=copy_web",
                }],
            },
            {
                text: '国外公开课',
                children: [{
                    text: '计算机教育中缺失的一课',
                    link: "https://missing-semester-cn.github.io/"
                }],
            }
        ],
        sidebar: {
            '/computerOrganization/': [{
                text: '第一章',
                collapsable: true,
                children: ['/computerOrganization/001.md'],
            }],
            '/datastructure/': [{
                text: '第一章',
                collapsible: true,
                children: ['/datastructure/001.md'],
            },
            {
                text: '第八章 排序',
                collapsible: true,
                children: ['/datastructure/081.md', '/datastructure/082.md', '/datastructure/083.md'],
            }],
            '/os/': [{
                text: '第三章内存管理',
                collapsible: true,
                children: ['/os/031.md', '/os/032.md'],
            }],
            '/network/': [{
                text: '第一章 计算机网络体系结构',
                collapsible: true,
                children: ['/network/011.md', '/network/012.md'],
            },
            {
                text: '第二章 物理层',
                collapsible: true,
                children: ['/network/021.md', '/network/022.md', '/network/023.md'],
            },
            {
                text: '第三章 数据链路层',
                collapsible: true,
                children: ['/network/031.md', '/network/032.md', '/network/033.md', '/network/034.md', '/network/035.md', '/network/036.md', '/network/037.md', '/network/038.md'],
            },
            {
                text: '第四章 网络层',
                collapsible: true,
                children: ['/network/041.md', '/network/042.md', '/network/043.md', '/network/044.md', '/network/045.md', '/network/046.md', '/network/047.md', '/network/048.md'],
            },
            {
                text: '第五章 传输层',
                collapsible: true,
                children: ['/network/051.md', '/network/052.md', '/network/053.md'],
            },
            {
                text: '第六章 应用层',
                collapsible: true,
                children: ['/network/061.md', '/network/062.md', '/network/063.md', '/network/064.md', '/network/065.md'],
            },
            ],
        },
        sidebarDepth: 1,
    })
}