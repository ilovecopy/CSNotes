import{_ as s,c as n,o as a,b as e}from"./app-BKL5x2Aa.js";const l={},i=e(`<h1 id="_3-1-栈" tabindex="-1"><a class="header-anchor" href="#_3-1-栈"><span>3.1 栈</span></a></h1><h2 id="_3-1-1-栈的基本概念" tabindex="-1"><a class="header-anchor" href="#_3-1-1-栈的基本概念"><span>3.1.1 栈的基本概念</span></a></h2><p>只允许在一端进行插入或删除操作的线性表。</p><h2 id="_3-1-2-栈的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#_3-1-2-栈的顺序存储结构"><span>3.1.2 栈的顺序存储结构</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">typedef struct{</span>
<span class="line">  int data[50];</span>
<span class="line">  int top;</span>
<span class="line">}Sqstack;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-1-3-栈的链式存储结构" tabindex="-1"><a class="header-anchor" href="#_3-1-3-栈的链式存储结构"><span>3.1.3 栈的链式存储结构</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">typedef struct Linknode{</span>
<span class="line">  int data;</span>
<span class="line">  struct Linknode *next；</span>
<span class="line">}*LiStack;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、实现-stack" tabindex="-1"><a class="header-anchor" href="#二、实现-stack"><span>二、实现 stack</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;vector&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">template&lt;typename T&gt;</span>
<span class="line">class Stack {</span>
<span class="line">public:</span>
<span class="line">    void push(const T &amp;value) {</span>
<span class="line">        data.push_back(value); // 将元素插入 vector 尾部</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    void pop() {</span>
<span class="line">        if (empty()) {</span>
<span class="line">            throw underflow_error(&quot;pop from empty stack&quot;); // 如果栈为空，则抛出异常</span>
<span class="line">        }</span>
<span class="line">        data.pop_back(); // 移除 vector 尾部元素</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    T &amp;top() {</span>
<span class="line">        if (empty()) {</span>
<span class="line">            throw underflow_error(&quot;top from empty stack&quot;); // 如果栈为空，则抛出异常</span>
<span class="line">        }</span>
<span class="line">        return data.back(); // 返回 vector 尾部元素</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    bool empty() const {</span>
<span class="line">        return data.empty(); // 判断 vector 是否为空</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">private:</span>
<span class="line">    vector&lt;T&gt; data; // 用 vector 存储栈中的元素</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[i];function d(t,p){return a(),n("div",null,c)}const v=s(l,[["render",d],["__file","031.html.vue"]]),u=JSON.parse('{"path":"/datastructure/031.html","title":"3.1 栈","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"3.1.1 栈的基本概念","slug":"_3-1-1-栈的基本概念","link":"#_3-1-1-栈的基本概念","children":[]},{"level":2,"title":"3.1.2 栈的顺序存储结构","slug":"_3-1-2-栈的顺序存储结构","link":"#_3-1-2-栈的顺序存储结构","children":[]},{"level":2,"title":"3.1.3 栈的链式存储结构","slug":"_3-1-3-栈的链式存储结构","link":"#_3-1-3-栈的链式存储结构","children":[]},{"level":2,"title":"二、实现 stack","slug":"二、实现-stack","link":"#二、实现-stack","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/031.md"}');export{v as comp,u as data};
