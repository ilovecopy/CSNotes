import{_ as p,c as t,b as a,a as l,d as n,e as c,f as i,r as o,o as d}from"./app-Dt3f-5Vu.js";const r={};function u(k,s){const e=o("RouteLink");return d(),t("div",null,[s[3]||(s[3]=a(`<h1 id="一、redis-数据结构" tabindex="-1"><a class="header-anchor" href="#一、redis-数据结构"><span>一、Redis 数据结构</span></a></h1><h2 id="_1-简单动态字符串" tabindex="-1"><a class="header-anchor" href="#_1-简单动态字符串"><span>1.简单动态字符串</span></a></h2><h2 id="_2-链表" tabindex="-1"><a class="header-anchor" href="#_2-链表"><span>2.链表</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre><code><span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">listNode</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">listNode</span> <span class="token operator">*</span>prev<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">listNode</span> <span class="token operator">*</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token operator">*</span>value<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> listNode<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),l("p",null,[s[1]||(s[1]=n("listNode 是一个")),c(e,{to:"/datastructure/023.html"},{default:i(()=>s[0]||(s[0]=[n("双向链表")])),_:1}),s[2]||(s[2]=n("。"))]),s[4]||(s[4]=a(`<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre><code><span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">list</span> <span class="token punctuation">{</span></span>
<span class="line">    listNode <span class="token operator">*</span>head<span class="token punctuation">;</span><span class="token comment">//表头节点</span></span>
<span class="line">    listNode <span class="token operator">*</span>tail<span class="token punctuation">;</span><span class="token comment">//表尾节点</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token operator">*</span><span class="token punctuation">(</span><span class="token operator">*</span>dup<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//节点复制函数</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>free<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//节点释放函数</span></span>
<span class="line">    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>match<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">,</span> <span class="token keyword">void</span> <span class="token operator">*</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//节点对比函数</span></span>
<span class="line">    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> len<span class="token punctuation">;</span><span class="token comment">//链表所包含的节点数量</span></span>
<span class="line"><span class="token punctuation">}</span> list<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/双向链表.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-字典" tabindex="-1"><a class="header-anchor" href="#_3-字典"><span>3.字典</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre><code><span class="line"><span class="token keyword">struct</span> <span class="token class-name">dictEntry</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token operator">*</span>key<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">union</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">void</span> <span class="token operator">*</span>val<span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">uint64_t</span> u64<span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">int64_t</span> s64<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">double</span> d<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> v<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">dictEntry</span> <span class="token operator">*</span>next<span class="token punctuation">;</span>     <span class="token comment">/* Next entry in the same hash bucket. */</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token operator">*</span>metadata<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>           <span class="token comment">/* An arbitrary number of bytes (starting at a</span>
<span class="line">                                 * pointer-aligned address) of size as returned</span>
<span class="line">                                 * by dictType&#39;s dictEntryMetadataBytes(). */</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-跳跃表" tabindex="-1"><a class="header-anchor" href="#_4-跳跃表"><span>4.跳跃表</span></a></h2><h4 id="跳跃表节点" tabindex="-1"><a class="header-anchor" href="#跳跃表节点"><span>跳跃表节点</span></a></h4><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre><code><span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token punctuation">{</span></span>
<span class="line">    sds ele<span class="token punctuation">;</span><span class="token comment">//</span></span>
<span class="line">    <span class="token keyword">double</span> score<span class="token punctuation">;</span><span class="token comment">//分值</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token operator">*</span>backward<span class="token punctuation">;</span><span class="token comment">//后退指针</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">zskiplistLevel</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token operator">*</span>forward<span class="token punctuation">;</span><span class="token comment">//前进指针</span></span>
<span class="line">        <span class="token keyword">unsigned</span> <span class="token keyword">long</span> span<span class="token punctuation">;</span><span class="token comment">//跨度</span></span>
<span class="line">    <span class="token punctuation">}</span> level<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//层</span></span>
<span class="line"><span class="token punctuation">}</span> zskiplistNode<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="跳跃表" tabindex="-1"><a class="header-anchor" href="#跳跃表"><span>跳跃表</span></a></h4><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre><code><span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">zskiplist</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">zskiplistNode</span> <span class="token operator">*</span>header<span class="token punctuation">,</span> <span class="token operator">*</span>tail<span class="token punctuation">;</span><span class="token comment">//表头指针和表尾指针</span></span>
<span class="line">    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> length<span class="token punctuation">;</span><span class="token comment">//表中节点的数量</span></span>
<span class="line">    <span class="token keyword">int</span> level<span class="token punctuation">;</span><span class="token comment">//表中层数最大的节点的层数</span></span>
<span class="line"><span class="token punctuation">}</span> zskiplist<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-整数集合" tabindex="-1"><a class="header-anchor" href="#_5-整数集合"><span>5.整数集合</span></a></h2><div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c" data-title="c"><pre><code><span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">intset</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">uint32_t</span> encoding<span class="token punctuation">;</span><span class="token comment">//编码方式</span></span>
<span class="line">    <span class="token class-name">uint32_t</span> length<span class="token punctuation">;</span><span class="token comment">//集合包含的元素数量</span></span>
<span class="line">    <span class="token class-name">int8_t</span> contents<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//保存元素的数组</span></span>
<span class="line"><span class="token punctuation">}</span> intset<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整数集合</p><h2 id="_6-压缩列表" tabindex="-1"><a class="header-anchor" href="#_6-压缩列表"><span>6.压缩列表</span></a></h2><h2 id="_7-对象" tabindex="-1"><a class="header-anchor" href="#_7-对象"><span>7.对象</span></a></h2>`,14))])}const v=p(r,[["render",u],["__file","011.html.vue"]]),h=JSON.parse('{"path":"/redis/011.html","title":"一、Redis 数据结构","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.简单动态字符串","slug":"_1-简单动态字符串","link":"#_1-简单动态字符串","children":[]},{"level":2,"title":"2.链表","slug":"_2-链表","link":"#_2-链表","children":[]},{"level":2,"title":"3.字典","slug":"_3-字典","link":"#_3-字典","children":[]},{"level":2,"title":"4.跳跃表","slug":"_4-跳跃表","link":"#_4-跳跃表","children":[]},{"level":2,"title":"5.整数集合","slug":"_5-整数集合","link":"#_5-整数集合","children":[]},{"level":2,"title":"6.压缩列表","slug":"_6-压缩列表","link":"#_6-压缩列表","children":[]},{"level":2,"title":"7.对象","slug":"_7-对象","link":"#_7-对象","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"redis/011.md"}');export{v as comp,h as data};