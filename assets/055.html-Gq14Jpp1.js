import{_ as e,o as i,c as n,a}from"./app-XWLI5M5X.js";const d={},s=a(`<h1 id="_5-5-树和二叉树的应用" tabindex="-1"><a class="header-anchor" href="#_5-5-树和二叉树的应用"><span>5.5 树和二叉树的应用</span></a></h1><h2 id="_5-5-1-哈夫曼树和哈夫曼编码" tabindex="-1"><a class="header-anchor" href="#_5-5-1-哈夫曼树和哈夫曼编码"><span>5.5.1 哈夫曼树和哈夫曼编码</span></a></h2><p>前缀编码：一条路径上只有一种编码。</p><p>哈夫曼树只有度为 0 和 n 的结点，是严格 n 叉树，可以补充 0 结点。</p><h2 id="_5-5-2-并查集" tabindex="-1"><a class="header-anchor" href="#_5-5-2-并查集"><span>5.5.2 并查集</span></a></h2><p>每个子集合是一棵树，并查集是一个森林。</p><p>双亲表示法能方便并和查</p><p>并：时间复杂度 O(1)</p><p>小并大</p><p>查：时间复杂度 O(n)</p><p>并查集结构定义：并查集本质上是一个双亲指针数组。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int UFSets[10]; // 双亲指针数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>初始化</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Initial(int *S)
{
    for (int i = 0; i &lt; 10; i++)
    {
        S[i] = -1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找根</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int Find(int *S, int x)//查找 x 的根
{
    while (S[x] &gt;= 0)//当 x 的双亲不是根时
    {
        x = S[x];
    }
    return x;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>合并两个集合</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void Union(int *S, int Root1, int Root2)
{
    if (Root1 == Root2)
    {
        return;
    }
    S[Root2] = Root1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[s];function t(c,r){return i(),n("div",null,l)}const u=e(d,[["render",t],["__file","055.html.vue"]]),o=JSON.parse('{"path":"/datastructure/055.html","title":"5.5 树和二叉树的应用","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.5.1 哈夫曼树和哈夫曼编码","slug":"_5-5-1-哈夫曼树和哈夫曼编码","link":"#_5-5-1-哈夫曼树和哈夫曼编码","children":[]},{"level":2,"title":"5.5.2 并查集","slug":"_5-5-2-并查集","link":"#_5-5-2-并查集","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/055.md"}');export{u as comp,o as data};
