import{_ as n,c as e,b as a,o as i}from"./app-Dt3f-5Vu.js";const l={};function d(c,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_2-3-线性表的链式表示" tabindex="-1"><a class="header-anchor" href="#_2-3-线性表的链式表示"><span>2.3 线性表的链式表示</span></a></h1><h2 id="_2-3-1-单链表的定义" tabindex="-1"><a class="header-anchor" href="#_2-3-1-单链表的定义"><span>2.3.1 单链表的定义</span></a></h2><h2 id="_2-3-3-双向链表" tabindex="-1"><a class="header-anchor" href="#_2-3-3-双向链表"><span>2.3.3 双向链表</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/双链表.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">#include&lt;iostream&gt;</span>
<span class="line">#include&lt;list&gt;</span>
<span class="line">int main(){</span>
<span class="line">  list&lt;int&gt; myList;</span>
<span class="line">  myList.push_back(1);</span>
<span class="line">  myList.push_front(0);</span>
<span class="line">  myList.pop_back(1);</span>
<span class="line">  myList.pop_front(0);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-4-循环链表" tabindex="-1"><a class="header-anchor" href="#_2-3-4-循环链表"><span>2.3.4 循环链表</span></a></h2><p>LeetCode141:判断链表是否为环形链表</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">bool hasCycle(ListNode *head)</span>
<span class="line">  {</span>
<span class="line">      ListNode *dummy = new ListNode(0, head);</span>
<span class="line">      ListNode *slow = dummy;</span>
<span class="line">      ListNode *fast = head;</span>
<span class="line">      while (fast &amp;&amp; fast-&gt;next)</span>
<span class="line">      {</span>
<span class="line">          if (slow == fast)</span>
<span class="line">          {</span>
<span class="line">              return true;</span>
<span class="line">          }</span>
<span class="line">          slow = slow-&gt;next;</span>
<span class="line">          fast = fast-&gt;next-&gt;next;</span>
<span class="line">      }</span>
<span class="line">      return false;</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-5-静态链表" tabindex="-1"><a class="header-anchor" href="#_2-3-5-静态链表"><span>2.3.5 静态链表</span></a></h2><h3 id="常见笔试题-反转链表" tabindex="-1"><a class="header-anchor" href="#常见笔试题-反转链表"><span>常见笔试题：反转链表</span></a></h3><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">class Solution {</span>
<span class="line">public:</span>
<span class="line">    ListNode* reverseList(ListNode* head) {</span>
<span class="line">        ListNode* prev = nullptr;</span>
<span class="line">        ListNode* curr = head;</span>
<span class="line">        while (curr) {</span>
<span class="line">            ListNode* next = curr-&gt;next;</span>
<span class="line">            curr-&gt;next = prev;</span>
<span class="line">            prev = curr;</span>
<span class="line">            curr = next;</span>
<span class="line">        }</span>
<span class="line">        return prev;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const t=n(l,[["render",d],["__file","023.html.vue"]]),p=JSON.parse('{"path":"/datastructure/023.html","title":"2.3 线性表的链式表示","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.3.1 单链表的定义","slug":"_2-3-1-单链表的定义","link":"#_2-3-1-单链表的定义","children":[]},{"level":2,"title":"2.3.3 双向链表","slug":"_2-3-3-双向链表","link":"#_2-3-3-双向链表","children":[]},{"level":2,"title":"2.3.4 循环链表","slug":"_2-3-4-循环链表","link":"#_2-3-4-循环链表","children":[]},{"level":2,"title":"2.3.5 静态链表","slug":"_2-3-5-静态链表","link":"#_2-3-5-静态链表","children":[{"level":3,"title":"常见笔试题：反转链表","slug":"常见笔试题-反转链表","link":"#常见笔试题-反转链表","children":[]}]}],"git":{"updatedTime":1720103859000},"filePathRelative":"datastructure/023.md"}');export{t as comp,p as data};
