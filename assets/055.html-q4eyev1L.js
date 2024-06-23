import{_ as n,c as s,o as e,b as a}from"./app-CehCU-_V.js";const i={},l=a(`<h1 id="_5-5-树和二叉树的应用" tabindex="-1"><a class="header-anchor" href="#_5-5-树和二叉树的应用"><span>5.5 树和二叉树的应用</span></a></h1><h2 id="_5-5-1-哈夫曼树和哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#_5-5-1-哈夫曼树和哈夫曼编码"><span>5.5.1 哈夫曼树和哈夫曼编码</span></a></h2><p>前缀编码：一条路径上只有一种编码。</p><p>哈夫曼树只有度为 0 和 n 的结点，是严格 n 叉树，可以补充 0 结点。</p><h2 id="_5-5-2-并查集" tabindex="-1"><a class="header-anchor" href="#_5-5-2-并查集"><span>5.5.2 并查集</span></a></h2><p>每个子集合是一棵树，并查集是一个森林。</p><p>双亲表示法能方便并和查</p><p>并：时间复杂度 O(1)</p><p>小并大</p><p>查：时间复杂度 O(n)</p><p>并查集结构定义：并查集本质上是一个双亲指针数组。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">int UFSets[10]; // 双亲指针数组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>初始化</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">void Initial(int *S)</span>
<span class="line">{</span>
<span class="line">    for (int i = 0; i &lt; 10; i++)</span>
<span class="line">    {</span>
<span class="line">        S[i] = -1;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找根</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">int Find(int *S, int x)//查找 x 的根</span>
<span class="line">{</span>
<span class="line">    while (S[x] &gt;= 0)//当 x 的双亲不是根时</span>
<span class="line">    {</span>
<span class="line">        x = S[x];</span>
<span class="line">    }</span>
<span class="line">    return x;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并两个集合</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">void Union(int *S, int Root1, int Root2)</span>
<span class="line">{</span>
<span class="line">    if (Root1 == Root2)</span>
<span class="line">    {</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    S[Root2] = Root1;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),d=[l];function c(t,p){return e(),s("div",null,d)}const v=n(i,[["render",c],["__file","055.html.vue"]]),u=JSON.parse('{"path":"/datastructure/055.html","title":"5.5 树和二叉树的应用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.5.1 哈夫曼树和哈夫曼编码","slug":"_5-5-1-哈夫曼树和哈夫曼编码","link":"#_5-5-1-哈夫曼树和哈夫曼编码","children":[]},{"level":2,"title":"5.5.2 并查集","slug":"_5-5-2-并查集","link":"#_5-5-2-并查集","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/055.md"}');export{v as comp,u as data};
