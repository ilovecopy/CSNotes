<template>
  <ThemeDefaultLayout>
    <template #page-bottom>
      <CommentService v-if="shouldShowComment" :darkmode="!!isDarkMode" />
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
  return (
    el.getAttribute("data-theme") === "dark" ||
    el.classList.contains("dark") ||
    el.getAttribute("theme") === "dark" ||
    window.matchMedia?.("(prefers-color-scheme: dark)").matches === true
  );
};

onMounted(() => {
  isDarkMode.value = detectDarkMode();
  if (typeof window === "undefined") return;

  const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
  const onMedia = () => {
    isDarkMode.value = detectDarkMode();
  };
  if (mql?.addEventListener) mql.addEventListener("change", onMedia);
  else if (mql?.addListener) mql.addListener(onMedia);

  const observer = new MutationObserver(() => {
    isDarkMode.value = detectDarkMode();
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "class", "theme"],
  });

  unbindListeners.value = () => {
    observer.disconnect();
    if (mql?.removeEventListener) mql.removeEventListener("change", onMedia);
    else if (mql?.removeListener) mql.removeListener(onMedia);
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
