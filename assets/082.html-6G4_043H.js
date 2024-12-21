import{_ as s,c as e,b as a,o as l}from"./app-Dt3f-5Vu.js";const i={};function d(t,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h1 id="_8-2-插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-插入排序"><span>8.2 插入排序</span></a></h1><h2 id="_8-2-1-直接插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-1-直接插入排序"><span>8.2.1 直接插入排序</span></a></h2><p>空间复杂度$O(1)$</p><p>时间复杂度$O(n^2)$</p><p>稳定。</p><h2 id="leetcode147-对链表进行插入排序" tabindex="-1"><a class="header-anchor" href="#leetcode147-对链表进行插入排序"><span>LeetCode147. 对链表进行插入排序</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line"> ListNode *insertionSortList(ListNode *head)</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-2-折半插入排序" tabindex="-1"><a class="header-anchor" href="#_8-2-2-折半插入排序"><span>8.2.2 折半插入排序</span></a></h2><p>时间复杂度$O(n^2)$</p><h2 id="_8-2-3-希尔排序-缩小增量排序" tabindex="-1"><a class="header-anchor" href="#_8-2-3-希尔排序-缩小增量排序"><span>8.2.3 希尔排序 (缩小增量排序)</span></a></h2><p>使步长 d 逐步减小至 1，间隔为 d 的元素之间排序。</p><p>时间复杂度$O(n^2)$</p>`,12)]))}const c=s(i,[["render",d],["__file","082.html.vue"]]),p=JSON.parse('{"path":"/datastructure/082.html","title":"8.2 插入排序","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"8.2.1 直接插入排序","slug":"_8-2-1-直接插入排序","link":"#_8-2-1-直接插入排序","children":[]},{"level":2,"title":"LeetCode147. 对链表进行插入排序","slug":"leetcode147-对链表进行插入排序","link":"#leetcode147-对链表进行插入排序","children":[]},{"level":2,"title":"8.2.2 折半插入排序","slug":"_8-2-2-折半插入排序","link":"#_8-2-2-折半插入排序","children":[]},{"level":2,"title":"8.2.3 希尔排序 (缩小增量排序)","slug":"_8-2-3-希尔排序-缩小增量排序","link":"#_8-2-3-希尔排序-缩小增量排序","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/082.md"}');export{c as comp,p as data};
