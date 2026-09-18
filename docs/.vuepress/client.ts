import type { ClientConfig } from "vuepress/client";
import LayoutWithComment from "./layouts/LayoutWithComment.vue";

// VuePress 2 自定义布局注册：
// 1) 如果用户 frontmatter 指定了 layout: 其他名字，交给主题默认
// 2) 否则所有默认 Layout 路由都使用我们带 CommentService 的扩展 Layout
export default {
  layouts: {
    // 主题默认导出的名字就是 "Layout"，所以这里同名覆盖
    // 而我们内部又 import Layout from "@vuepress/theme-default/layouts/Layout.vue"，
    // 相当于组合扩展（slot 注入 CommentService），不会循环引用
    Layout: LayoutWithComment,
  },
} satisfies ClientConfig;
