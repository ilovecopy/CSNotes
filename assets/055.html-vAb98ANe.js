import{_ as a,c as s,a as e,o as i}from"./app-DKkA6jZv.js";const l={};function p(t,n){return i(),s("div",null,n[0]||(n[0]=[e(`<h1 id="_5-5-树和二叉树的应用" tabindex="-1"><a class="header-anchor" href="#_5-5-树和二叉树的应用"><span>5.5 树和二叉树的应用</span></a></h1><h2 id="_5-5-1-哈夫曼树和哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#_5-5-1-哈夫曼树和哈夫曼编码"><span>5.5.1 哈夫曼树和哈夫曼编码</span></a></h2><p>前缀编码：一条路径上只有一种编码。</p><p>哈夫曼树只有度为 0 和 n 的结点，是严格 n 叉树，可以补充 0 结点。</p><h2 id="_5-5-2-并查集" tabindex="-1"><a class="header-anchor" href="#_5-5-2-并查集"><span>5.5.2 并查集</span></a></h2><p>每个子集合是一棵树，并查集是一个森林。</p><p>双亲表示法能方便并和查</p><p>并：时间复杂度 O(1)</p><p>小并大</p><p>查：时间复杂度 O(n)</p><p>并查集结构定义：并查集本质上是一个双亲指针数组。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">int UFSets[10]; // 双亲指针数组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>初始化</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">void Initial(int *S)</span>
<span class="line">{</span>
<span class="line">    for (int i = 0; i &lt; 10; i++)</span>
<span class="line">    {</span>
<span class="line">        S[i] = -1;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>查找根</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">int Find(int *S, int x)//查找 x 的根</span>
<span class="line">{</span>
<span class="line">    while (S[x] &gt;= 0)//当 x 的双亲不是根时</span>
<span class="line">    {</span>
<span class="line">        x = S[x];</span>
<span class="line">    }</span>
<span class="line">    return x;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>合并两个集合</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">void Union(int *S, int Root1, int Root2)</span>
<span class="line">{</span>
<span class="line">    if (Root1 == Root2)</span>
<span class="line">    {</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    S[Root2] = Root1;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,18)]))}const r=a(l,[["render",p]]),d=JSON.parse('{"path":"/datastructure/055.html","title":"5.5 树和二叉树的应用","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1698592164000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":1,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/055.md"}');export{r as comp,d as data};
