import{_ as n,c as a,b as e,o as p}from"./app-C_1bF7bM.js";const t={};function o(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="_009-回文数" tabindex="-1"><a class="header-anchor" href="#_009-回文数"><span>009 回文数</span></a></h1><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> x <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">int</span> rev <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>rev <span class="token operator">&lt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        rev <span class="token operator">=</span> rev <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> x <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">        x <span class="token operator">=</span> x <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> x <span class="token operator">==</span> rev <span class="token operator">||</span> x <span class="token operator">==</span> rev <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(t,[["render",o],["__file","009.html.vue"]]),i=JSON.parse('{"path":"/leetcode/009.html","title":"009 回文数","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1711380006000},"filePathRelative":"leetcode/009.md"}');export{r as comp,i as data};
