import{_ as e,o as n,c as i,a as s}from"./app-XWLI5M5X.js";const a={},d=s(`<h1 id="_12-1-哈希表" tabindex="-1"><a class="header-anchor" href="#_12-1-哈希表"><span>12.1 哈希表</span></a></h1><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>unordered_set&lt;char&gt; occ;//定义
occ.insert(s);//插入，O(1)
occ.erase(s);//删除，O(n)
occ.count(s);//查找，返回 s 的个数，O(1)
unordered_map&lt;int ,int&gt; hash_table;//定义
hash_table.find(k);//查找，返回 k 的位置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-两数之和" tabindex="-1"><a class="header-anchor" href="#_1-两数之和"><span>1.两数之和</span></a></h2><hr><p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值</strong> <em><code>target</code></em> 的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>vector&lt;int&gt; twoSum(vector&lt;int&gt; &amp;nums, int target)
    {
        unordered_map&lt;int, int&gt; hash_table;
        for (int i = 0; i &lt; nums.size(); i++)
        {
            auto it = hash_table.find(target - nums[i]);
            if (it != hash_table.end())
            {
                return {it-&gt;second, i};
            }
            hash_table[nums[i]] = i;
        }
        return {};
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-无重复字符的最长子串" tabindex="-1"><a class="header-anchor" href="#_3-无重复字符的最长子串"><span>3.无重复字符的最长子串</span></a></h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p><p><strong>示例 1:</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>输入: s = &quot;abcabcbb&quot;
输出: 3 
解释: 因为无重复字符的最长子串是 &quot;abc&quot;，所以其长度为 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>int lengthOfLongestSubstring(string s)
    {
        unordered_set&lt;char&gt; occ;
        int n = s.size();
        int rk = -1, ans = 0;
        for (int i = 0; i &lt; n; i++)
        {
            if (i != 0)
            {
                occ.erase(s[i - 1]);
            }
            while (rk &lt; n - 1 &amp;&amp; !occ.count(s[rk + 1]))
            {
                occ.insert(s[rk + 1]);
                rk++;
            }
            ans = max(rk - i + 1, ans);
        }
        return ans;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[d];function t(r,c){return n(),i("div",null,l)}const u=e(a,[["render",t],["__file","121.html.vue"]]),m=JSON.parse('{"path":"/datastructure/121.html","title":"12.1 哈希表","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.两数之和","slug":"_1-两数之和","link":"#_1-两数之和","children":[]},{"level":2,"title":"3.无重复字符的最长子串","slug":"_3-无重复字符的最长子串","link":"#_3-无重复字符的最长子串","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/121.md"}');export{u as comp,m as data};
