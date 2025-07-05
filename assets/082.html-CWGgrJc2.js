import{_ as n,c as s,a as e,o as l}from"./app-DKkA6jZv.js";const t={};function p(i,a){return l(),s("div",null,a[0]||(a[0]=[e(`<h1 id="_8-2-插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-插入排序"><span>8.2 插入排序</span></a></h1><h2 id="_8-2-1-直接插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-1-直接插入排序"><span>8.2.1 直接插入排序</span></a></h2><p>空间复杂度$O(1)$</p><p>时间复杂度$O(n^2)$</p><p>稳定。</p><h2 id="leetcode147-对链表进行插入排序" tabindex="-1"><a class="header-anchor" href="#leetcode147-对链表进行插入排序"><span>LeetCode147. 对链表进行插入排序</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line"> ListNode *insertionSortList(ListNode *head)</span>
<span class="line">    {</span>
<span class="line">        if (head == nullptr)</span>
<span class="line">        {</span>
<span class="line">            return head;</span>
<span class="line">        }</span>
<span class="line">        ListNode *dummyHead = new ListNode(0);</span>
<span class="line">        dummyHead-&gt;next = head;</span>
<span class="line">        ListNode *lastSorted = head;</span>
<span class="line">        ListNode *curr = head-&gt;next;</span>
<span class="line">        while (curr != nullptr)</span>
<span class="line">        {</span>
<span class="line">            if (lastSorted-&gt;val &lt;= curr-&gt;val)</span>
<span class="line">            {</span>
<span class="line">                lastSorted = lastSorted-&gt;next;</span>
<span class="line">            }</span>
<span class="line">            else</span>
<span class="line">            {</span>
<span class="line">                ListNode *prev = dummyHead;</span>
<span class="line">                while (prev-&gt;next-&gt;val &lt;= curr-&gt;val)</span>
<span class="line">                {</span>
<span class="line">                    prev = prev-&gt;next;</span>
<span class="line">                }</span>
<span class="line">                lastSorted-&gt;next = curr-&gt;next;</span>
<span class="line">                curr-&gt;next = prev-&gt;next;</span>
<span class="line">                prev-&gt;next = curr;</span>
<span class="line">            }</span>
<span class="line">            curr = lastSorted-&gt;next;</span>
<span class="line">        }</span>
<span class="line">        return dummyHead-&gt;next;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_8-2-2-折半插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-2-折半插入排序"><span>8.2.2 折半插入排序</span></a></h2><p>时间复杂度$O(n^2)$</p><h2 id="_8-2-3-希尔排序-缩小增量排序" tabindex="-1"><a class="header-anchor" href="#_8-2-3-希尔排序-缩小增量排序"><span>8.2.3 希尔排序 (缩小增量排序)</span></a></h2><p>使步长 d 逐步减小至 1，间隔为 d 的元素之间排序。</p><p>时间复杂度$O(n^2)$</p>`,12)]))}const r=n(t,[["render",p]]),d=JSON.parse('{"path":"/datastructure/082.html","title":"8.2 插入排序","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1698592164000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":1,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/082.md"}');export{r as comp,d as data};
