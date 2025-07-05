import{_ as n,c as a,a as e,o as l}from"./app-DKkA6jZv.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="_9-1-贪心算法" tabindex="-1"><a class="header-anchor" href="#_9-1-贪心算法"><span>9.1 贪心算法</span></a></h1><h2 id="_455-分发饼干" tabindex="-1"><a class="header-anchor" href="#_455-分发饼干"><span>455.分发饼干</span></a></h2><p>假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。</p><p>对每个孩子 <code>i</code>，都有一个胃口值 <code>g[i]</code>，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 <code>j</code>，都有一个尺寸 <code>s[j]</code> 。如果 <code>s[j] &gt;= g[i]</code>，我们可以将这个饼干 <code>j</code> 分配给孩子 <code>i</code> ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入: g = [1,2,3], s = [1,1]</span>
<span class="line">输出: 1</span>
<span class="line">解释: </span>
<span class="line">你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。</span>
<span class="line">虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。</span>
<span class="line">所以你应该输出1。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p><strong>示例 2:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入: g = [1,2], s = [1,2,3]</span>
<span class="line">输出: 2</span>
<span class="line">解释: </span>
<span class="line">你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。</span>
<span class="line">你拥有的饼干数量和尺寸都足以让所有孩子满足。</span>
<span class="line">所以你应该输出2.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>从贪心的角度考虑，应该按照孩子的胃口从小到大的顺序依次满足每个孩子，且对于每个孩子，应该选择可以满足这个孩子的胃口且尺寸最小的饼干。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">int findContentChildren(vector&lt;int&gt; &amp;g, vector&lt;int&gt; &amp;s)</span>
<span class="line">    {</span>
<span class="line">        sort(g.begin(), g.end());</span>
<span class="line">        sort(s.begin(), s.end());</span>
<span class="line">        int count = 0;</span>
<span class="line">        int m = g.size();</span>
<span class="line">        int n = s.size();</span>
<span class="line">        for (int i = 0, j = 0; i &lt; m &amp;&amp; j &lt; n; i++, j++)</span>
<span class="line">        {</span>
<span class="line">            while (j &lt; n &amp;&amp; g[i] &gt; s[j])</span>
<span class="line">            {</span>
<span class="line">                j++;</span>
<span class="line">            }</span>
<span class="line">            if (j &lt; n)</span>
<span class="line">            {</span>
<span class="line">                count++;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return count;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_135-分发糖果" tabindex="-1"><a class="header-anchor" href="#_135-分发糖果"><span>135.分发糖果</span></a></h2><p><code>n</code> 个孩子站成一排。给你一个整数数组 <code>ratings</code> 表示每个孩子的评分。</p><p>你需要按照以下要求，给这些孩子分发糖果：</p><ul><li>每个孩子至少分配到 <code>1</code> 个糖果。</li><li>相邻两个孩子评分更高的孩子会获得更多的糖果。</li></ul><p>请你给每个孩子分发糖果，计算并返回需要准备的 <strong>最少糖果数目</strong> 。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入：ratings = [1,0,2]</span>
<span class="line">输出：5</span>
<span class="line">解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入：ratings = [1,2,2]</span>
<span class="line">输出：4</span>
<span class="line">解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。</span>
<span class="line">     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>先从左向右遍历一次，如果右边的孩子分数比左边的高，那么右边的孩子比左边的多一颗糖。</p><p>再从右向左遍历一次，如果左边的孩子分数比右边高，那么左边孩子的糖加到比右边孩子多一颗。<img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/糖果.gif" alt="" loading="lazy"></p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">int candy(vector&lt;int&gt; &amp;ratings)</span>
<span class="line">    {</span>
<span class="line">        int n = ratings.size();</span>
<span class="line">        vector&lt;int&gt; left(n);</span>
<span class="line">        for (int i = 0; i &lt; n; i++)</span>
<span class="line">        {</span>
<span class="line">            if (i &gt; 0 &amp;&amp; ratings[i] &gt; ratings[i - 1])</span>
<span class="line">            {</span>
<span class="line">                left[i] = left[i - 1] + 1;</span>
<span class="line">            }</span>
<span class="line">            else</span>
<span class="line">            {</span>
<span class="line">                left[i] = 1;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        int right = 0, ret = 0;</span>
<span class="line">        for (int i = n - 1; i &gt;= 0; i--)</span>
<span class="line">        {</span>
<span class="line">            if (i &lt; n - 1 &amp;&amp; ratings[i] &gt; ratings[i + 1])</span>
<span class="line">            {</span>
<span class="line">                right++;</span>
<span class="line">            }</span>
<span class="line">            else</span>
<span class="line">            {</span>
<span class="line">                right = 1;</span>
<span class="line">            }</span>
<span class="line">            ret += max(left[i], right);</span>
<span class="line">        }</span>
<span class="line">        return ret;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,22)]))}const r=n(i,[["render",p]]),d=JSON.parse('{"path":"/datastructure/091.html","title":"9.1 贪心算法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":2,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/091.md"}');export{r as comp,d as data};
