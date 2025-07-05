import{_ as a,c as e,a as n,o as t}from"./app-DKkA6jZv.js";const i={};function l(r,s){return t(),e("div",null,s[0]||(s[0]=[n(`<h1 id="_10-1-动态规划" tabindex="-1"><a class="header-anchor" href="#_10-1-动态规划"><span>10.1 动态规划</span></a></h1><h2 id="_53-最大子数组和" tabindex="-1"><a class="header-anchor" href="#_53-最大子数组和"><span>53.最大子数组和</span></a></h2><p>给你一个整数数组 <code>nums</code> ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。</p><p><strong>子数组</strong> 是数组中的一个连续部分。</p><p><strong>示例 1：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入：nums = [-2,1,-3,4,-1,2,1,-5,4]</span>
<span class="line">输出：6</span>
<span class="line">解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p><strong>示例 2：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入：nums = [1]</span>
<span class="line">输出：1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p><strong>示例 3：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">输入：nums = [5,4,-1,7,8]</span>
<span class="line">输出：23</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>解答：遍历一次，求出以每个元素结尾的最大和。对于每个元素，如果该元素之前元素的最大和&lt;0，那么该元素的最大和为自己。否则为最大和 + 自己。记录一每个元素为结尾的最大值。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/最大子数组和-20230226102924248.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">int maxSubArray(vector&lt;int&gt; &amp;nums)</span>
<span class="line">    {</span>
<span class="line">        int pre = 0, ans = 0;</span>
<span class="line">        for (auto &amp;num : nums)</span>
<span class="line">        {</span>
<span class="line">            pre = max(pre + num, num);</span>
<span class="line">            ans = max(ans, pre);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,13)]))}const c=a(i,[["render",l]]),d=JSON.parse('{"path":"/datastructure/101.html","title":"10.1 动态规划","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":2,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/101.md"}');export{c as comp,d as data};
