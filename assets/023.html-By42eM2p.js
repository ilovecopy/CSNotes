import{_ as a,c as n,a as e,o as l}from"./app-DKkA6jZv.js";const i={};function p(t,s){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="_2-3-线性表的链式表示" tabindex="-1"><a class="header-anchor" href="#_2-3-线性表的链式表示"><span>2.3 线性表的链式表示</span></a></h1><h2 id="_2-3-1-单链表的定义" tabindex="-1"><a class="header-anchor" href="#_2-3-1-单链表的定义"><span>2.3.1 单链表的定义</span></a></h2><h2 id="_2-3-3-双向链表" tabindex="-1"><a class="header-anchor" href="#_2-3-3-双向链表"><span>2.3.3 双向链表</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/双链表.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">#include&lt;iostream&gt;</span>
<span class="line">#include&lt;list&gt;</span>
<span class="line">int main(){</span>
<span class="line">  list&lt;int&gt; myList;</span>
<span class="line">  myList.push_back(1);</span>
<span class="line">  myList.push_front(0);</span>
<span class="line">  myList.pop_back(1);</span>
<span class="line">  myList.pop_front(0);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_2-3-4-循环链表" tabindex="-1"><a class="header-anchor" href="#_2-3-4-循环链表"><span>2.3.4 循环链表</span></a></h2><p>LeetCode141:判断链表是否为环形链表</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">bool hasCycle(ListNode *head)</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_2-3-5-静态链表" tabindex="-1"><a class="header-anchor" href="#_2-3-5-静态链表"><span>2.3.5 静态链表</span></a></h2><h3 id="常见笔试题-反转链表" tabindex="-1"><a class="header-anchor" href="#常见笔试题-反转链表"><span>常见笔试题：反转链表</span></a></h3><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">class Solution {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,12)]))}const r=a(i,[["render",p]]),d=JSON.parse('{"path":"/datastructure/023.html","title":"2.3 线性表的链式表示","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":2,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/023.md"}');export{r as comp,d as data};
