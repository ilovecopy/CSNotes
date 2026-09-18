<template>
  <ThemeDefaultLayout>
    <template #page-bottom>
      <CommentService
        v-if="shouldShowComment"
        :darkmode="isDarkMode"
        :theme="isDarkMode ? 'dark_dimmed' : 'light'"
      />
    </template>
  </ThemeDefaultLayout>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { useData } from "vuepress/client";
import ThemeDefaultLayout from "@vuepress/theme-default/layouts/Layout.vue";

const { frontmatter, page } = useData();

const GLOBAL_COMMENT_ENABLED = true;

const isDarkMode = ref(false);
const unbindListeners = shallowRef<(() => void) | null>(null);

const detectDarkMode = (): boolean => {
  if (typeof window === "undefined") return false;
  const el = document.documentElement;
  const attr = (el.getAttribute("data-theme") || "").toLowerCase();
  if (attr === "dark") return true;
  if (attr === "light") return false;
  const cls = el.classList;
  if (cls.contains("dark")) return true;
  if (cls.contains("light")) return false;
  const themeAttr = (el.getAttribute("theme") || "").toLowerCase();
  if (themeAttr === "dark") return true;
  if (themeAttr === "light") return false;
  return false;
};

onMounted(() => {
  isDarkMode.value = detectDarkMode();
  if (typeof window === "undefined") return;

  const observer = new MutationObserver(() => {
    isDarkMode.value = detectDarkMode();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "class", "theme"],
  });

  unbindListeners.value = () => {
    observer.disconnect();
  };
});

onBeforeUnmount(() => {
  unbindListeners.value?.();
  unbindListeners.value = null;
});

const commentFromFrontmatter = computed<boolean | undefined>(() => {
  const v = frontmatter.value?.comment;
  if (v === true || v === false) return v;
  if (typeof v === "string") {
    const s = v.toLowerCase();
    if (s === "true" || s === "1" || s === "on" || s === "yes") return true;
    if (s === "false" || s === "0" || s === "off" || s === "no") return false;
  }
  return undefined;
});

const isMarkdownPage = computed(() => {
  const p = page.value.path || "";
  return (
    p.endsWith(".html") &&
    p !== "/404.html" &&
    !p.startsWith("/tag/") &&
    !p.startsWith("/category/")
  );
});

const shouldShowComment = computed(() =>
  commentFromFrontmatter.value !== undefined
    ? commentFromFrontmatter.value
    : GLOBAL_COMMENT_ENABLED && isMarkdownPage.value,
);
</script>

<style scoped>
:deep(.vp-comment) {
  padding: 24px 16px 48px;
  max-width: 960px;
  margin: 0 auto;
}
@media (min-width: 960px) {
  :deep(.vp-comment) {
    padding: 32px 48px 64px;
  }
}
</style>
