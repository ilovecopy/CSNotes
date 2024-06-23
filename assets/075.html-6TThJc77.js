import{_ as l,c as e,o as i,b as a,a as s,d as n}from"./app-CehCU-_V.js";const t={},c=a('<h1 id="_7-5-散列表-哈希表" tabindex="-1"><a class="header-anchor" href="#_7-5-散列表-哈希表"><span>7.5 散列表 (哈希表)</span></a></h1><h2 id="_7-5-1-散列表的基本概念" tabindex="-1"><a class="header-anchor" href="#_7-5-1-散列表的基本概念"><span>7.5.1 散列表的基本概念</span></a></h2><p>散列表建立了关键字和存储地址之间一种直接映射关系。</p><h2 id="_7-5-2-散列表的构造方法" tabindex="-1"><a class="header-anchor" href="#_7-5-2-散列表的构造方法"><span>7.5.2 散列表的构造方法</span></a></h2><h3 id="_1-直接定址法" tabindex="-1"><a class="header-anchor" href="#_1-直接定址法"><span>1.直接定址法</span></a></h3><p>适合连续分布。</p><h3 id="_2-除留余数法" tabindex="-1"><a class="header-anchor" href="#_2-除留余数法"><span>2.除留余数法</span></a></h3><p>除以小于等于散列表表长 m 的最大质数 p。</p><h3 id="_3-数字分析法" tabindex="-1"><a class="header-anchor" href="#_3-数字分析法"><span>3.数字分析法</span></a></h3><h3 id="_4-平方取中法" tabindex="-1"><a class="header-anchor" href="#_4-平方取中法"><span>4.平方取中法</span></a></h3><p>取关键字平方的中间几位作为散列地址。</p><h2 id="_7-5-3-处理冲突的方法" tabindex="-1"><a class="header-anchor" href="#_7-5-3-处理冲突的方法"><span>7.5.3 处理冲突的方法</span></a></h2><h3 id="_1-开放定址法" tabindex="-1"><a class="header-anchor" href="#_1-开放定址法"><span>1.开放定址法</span></a></h3><p>冲突就后移，可以放在表的任一地方。</p>',14),p=s("ol",null,[s("li",null,"线性探测法:0，1，2，3。"),s("li",null,[n("平方探测法：0，1，-1，4，-4，"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mi",null,"k"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"k^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),n(","),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("msup",null,[s("mi",null,"k"),s("mn",null,"2")])]),s("annotation",{encoding:"application/x-tex"},"-k^2")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])])])])]),n("，表长必须可以表示为 4k+3 的素数。")])],-1),d=s("h3",{id:"_2-拉链法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-拉链法"},[s("span",null,"2.拉链法")])],-1),r=s("p",null,"冲突就用一个链表串起来。",-1),m=s("p",null,[n("装填因子"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"α"),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mtext",null,"表中记录数"),s("mi",null,"n")]),s("mrow",null,[s("mtext",null,"散列表长度"),s("mi",null,"m")])])]),s("annotation",{encoding:"application/x-tex"},"\\alpha =\\frac{\\text{表中记录数} n}{\\text{散列表长度} m}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.2173em","vertical-align":"-0.345em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8723em"}},[s("span",{style:{top:"-2.655em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord cjk_fallback mtight"},"散列表长度")]),s("span",{class:"mord mathnormal mtight"},"m")])])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.394em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord text mtight"},[s("span",{class:"mord cjk_fallback mtight"},"表中记录数")]),s("span",{class:"mord mathnormal mtight"},"n")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.345em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),n("。")],-1),v=a(`<h2 id="leetcode001-两数之和" tabindex="-1"><a class="header-anchor" href="#leetcode001-两数之和"><span>LeetCode001 两数之和</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">vector&lt;int&gt; twoSum(vector&lt;int&gt; &amp;nums, int target)</span>
<span class="line">    {</span>
<span class="line">        unordered_map&lt;int, int&gt; q;</span>
<span class="line">        for (int i = 0; i &lt; nums.size(); i++)</span>
<span class="line">        {</span>
<span class="line">            auto it = q.find(target - nums[i]);</span>
<span class="line">            if (it != q.end())</span>
<span class="line">            {</span>
<span class="line">                return {it-&gt;second, i};</span>
<span class="line">            }</span>
<span class="line">            q[nums[i]] = i;</span>
<span class="line">        }</span>
<span class="line">        return {};</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度 O(1)</p><h2 id="实现-unordered-map-哈希表" tabindex="-1"><a class="header-anchor" href="#实现-unordered-map-哈希表"><span>实现 unordered_map（哈希表）</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre class="language-c++"><code><span class="line">#include &lt;iostream&gt;</span>
<span class="line">#include &lt;list&gt;//双向链表</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">template&lt;typename K, typename V, int MAX_SIZE&gt;</span>
<span class="line">class UnorderedMap {</span>
<span class="line">private:</span>
<span class="line">    list&lt;pair&lt;K, V&gt;&gt; mapList[MAX_SIZE];//键 - 值对双向链表数组</span>
<span class="line">    int hash(K key) {</span>
<span class="line">        return key % MAX_SIZE;//类似除留余数</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    // 添加元素</span>
<span class="line">    void insert(K key, V value) {</span>
<span class="line">        int index = hash(key);</span>
<span class="line">        for (auto it = mapList[index].begin(); it != mapList[index].end(); it++) {</span>
<span class="line">            if (it-&gt;first == key) {</span>
<span class="line">                it-&gt;second = value;</span>
<span class="line">                return;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        mapList[index].push_back({key, value});//拉链法：如果冲突，将新元素插入到双向链表尾部</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 删除元素</span>
<span class="line">    void erase(K key) {</span>
<span class="line">        int index = hash(key);</span>
<span class="line">        for (auto it = mapList[index].begin(); it != mapList[index].end(); it++) {</span>
<span class="line">            if (it-&gt;first == key) {</span>
<span class="line">                mapList[index].erase(it);</span>
<span class="line">                return;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 查找元素</span>
<span class="line">    V find(K key) {</span>
<span class="line">        int index = hash(key);</span>
<span class="line">        for (auto it = mapList[index].begin(); it != mapList[index].end(); it++) {</span>
<span class="line">            if (it-&gt;first == key) {</span>
<span class="line">                return it-&gt;second;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        return NULL;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 获取元素数量</span>
<span class="line">    int size() {</span>
<span class="line">        int count = 0;</span>
<span class="line">        for (int i = 0; i &lt; MAX_SIZE; i++) {</span>
<span class="line">            count += mapList[i].size();</span>
<span class="line">        }</span>
<span class="line">        return count;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">    // 测试</span>
<span class="line">    UnorderedMap&lt;int, string, 10&gt; map;</span>
<span class="line"></span>
<span class="line">    map.insert(1, &quot;one&quot;);</span>
<span class="line">    map.insert(2, &quot;two&quot;);</span>
<span class="line">    map.insert(3, &quot;three&quot;);</span>
<span class="line">    map.insert(11, &quot;eleven&quot;);</span>
<span class="line">    map.insert(12, &quot;twelve&quot;);</span>
<span class="line">    map.insert(13, &quot;thirteen&quot;);</span>
<span class="line"></span>
<span class="line">    cout &lt;&lt; map.find(2) &lt;&lt; endl;</span>
<span class="line">    cout &lt;&lt; map.find(4) &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">    map.erase(3);</span>
<span class="line"></span>
<span class="line">    cout &lt;&lt; map.find(3) &lt;&lt; endl;</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u=[c,p,d,r,m,v];function h(o,b){return i(),e("div",null,u)}const _=l(t,[["render",h],["__file","075.html.vue"]]),x=JSON.parse('{"path":"/datastructure/075.html","title":"7.5 散列表 (哈希表)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"7.5.1 散列表的基本概念","slug":"_7-5-1-散列表的基本概念","link":"#_7-5-1-散列表的基本概念","children":[]},{"level":2,"title":"7.5.2 散列表的构造方法","slug":"_7-5-2-散列表的构造方法","link":"#_7-5-2-散列表的构造方法","children":[{"level":3,"title":"1.直接定址法","slug":"_1-直接定址法","link":"#_1-直接定址法","children":[]},{"level":3,"title":"2.除留余数法","slug":"_2-除留余数法","link":"#_2-除留余数法","children":[]},{"level":3,"title":"3.数字分析法","slug":"_3-数字分析法","link":"#_3-数字分析法","children":[]},{"level":3,"title":"4.平方取中法","slug":"_4-平方取中法","link":"#_4-平方取中法","children":[]}]},{"level":2,"title":"7.5.3 处理冲突的方法","slug":"_7-5-3-处理冲突的方法","link":"#_7-5-3-处理冲突的方法","children":[{"level":3,"title":"1.开放定址法","slug":"_1-开放定址法","link":"#_1-开放定址法","children":[]},{"level":3,"title":"2.拉链法","slug":"_2-拉链法","link":"#_2-拉链法","children":[]}]},{"level":2,"title":"LeetCode001 两数之和","slug":"leetcode001-两数之和","link":"#leetcode001-两数之和","children":[]},{"level":2,"title":"实现 unordered_map（哈希表）","slug":"实现-unordered-map-哈希表","link":"#实现-unordered-map-哈希表","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/075.md"}');export{_ as comp,x as data};
