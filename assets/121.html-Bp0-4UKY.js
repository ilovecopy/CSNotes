import{_ as n,c as a,a as e,o as l}from"./app-DKkA6jZv.js";const i={};function t(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="_12-1-哈希表" tabindex="-1"><a class="header-anchor" href="#_12-1-哈希表"><span>12.1 哈希表</span></a></h1><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">unordered_set&lt;char&gt; occ;//定义</span>
<span class="line">occ.insert(s);//插入，O(1)</span>
<span class="line">occ.erase(s);//删除，O(n)</span>
<span class="line">occ.count(s);//查找，返回 s 的个数，O(1)</span>
<span class="line">unordered_map&lt;int ,int&gt; hash_table;//定义</span>
<span class="line">hash_table.find(k);//查找，返回 k 的位置</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_1-两数之和" tabindex="-1"><a class="header-anchor" href="#_1-两数之和"><span>1.两数之和</span></a></h2><hr><p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> <em><code>target</code></em> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">vector&lt;int&gt; twoSum(vector&lt;int&gt; &amp;nums, int target)</span>
<span class="line">    {</span>
<span class="line">        unordered_map&lt;int, int&gt; hash_table;</span>
<span class="line">        for (int i = 0; i &lt; nums.size(); i++)</span>
<span class="line">        {</span>
<span class="line">            auto it = hash_table.find(target - nums[i]);</span>
<span class="line">            if (it != hash_table.end())</span>
<span class="line">            {</span>
<span class="line">                return {it-&gt;second, i};</span>
<span class="line">            }</span>
<span class="line">            hash_table[nums[i]] = i;</span>
<span class="line">        }</span>
<span class="line">        return {};</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_3-无重复字符的最长子串" tabindex="-1"><a class="header-anchor" href="#_3-无重复字符的最长子串"><span>3.无重复字符的最长子串</span></a></h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入: s = &quot;abcabcbb&quot;</span>
<span class="line">输出: 3 </span>
<span class="line">解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">int lengthOfLongestSubstring(string s)</span>
<span class="line">    {</span>
<span class="line">        unordered_set&lt;char&gt; occ;</span>
<span class="line">        int n = s.size();</span>
<span class="line">        int rk = -1, ans = 0;</span>
<span class="line">        for (int i = 0; i &lt; n; i++)</span>
<span class="line">        {</span>
<span class="line">            if (i != 0)</span>
<span class="line">            {</span>
<span class="line">                occ.erase(s[i - 1]);</span>
<span class="line">            }</span>
<span class="line">            while (rk &lt; n - 1 &amp;&amp; !occ.count(s[rk + 1]))</span>
<span class="line">            {</span>
<span class="line">                occ.insert(s[rk + 1]);</span>
<span class="line">                rk++;</span>
<span class="line">            }</span>
<span class="line">            ans = max(rk - i + 1, ans);</span>
<span class="line">        }</span>
<span class="line">        return ans;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,13)]))}const r=n(i,[["render",t]]),o=JSON.parse('{"path":"/datastructure/121.html","title":"12.1 哈希表","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1698592164000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":1,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/121.md"}');export{r as comp,o as data};
