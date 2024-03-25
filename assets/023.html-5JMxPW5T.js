import{_ as e,o as i,c as n,a as s}from"./app-XWLI5M5X.js";const a={},l=s(`<h1 id="_2-3-线性表的链式表示" tabindex="-1"><a class="header-anchor" href="#_2-3-线性表的链式表示"><span>2.3 线性表的链式表示</span></a></h1><h2 id="_2-3-1-单链表的定义" tabindex="-1"><a class="header-anchor" href="#_2-3-1-单链表的定义"><span>2.3.1 单链表的定义</span></a></h2><h2 id="_2-3-3-双向链表" tabindex="-1"><a class="header-anchor" href="#_2-3-3-双向链表"><span>2.3.3 双向链表</span></a></h2><p><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/双链表.png" alt="双链表"></p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include&lt;iostream&gt;
#include&lt;list&gt;
int main(){
  list&lt;int&gt; myList;
  myList.push_back(1);
  myList.push_front(0);
  myList.pop_back(1);
  myList.pop_front(0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-4-循环链表" tabindex="-1"><a class="header-anchor" href="#_2-3-4-循环链表"><span>2.3.4 循环链表</span></a></h2><p>LeetCode141:判断链表是否为环形链表</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>bool hasCycle(ListNode *head)
  {
      ListNode *dummy = new ListNode(0, head);
      ListNode *slow = dummy;
      ListNode *fast = head;
      while (fast &amp;&amp; fast-&gt;next)
      {
          if (slow == fast)
          {
              return true;
          }
          slow = slow-&gt;next;
          fast = fast-&gt;next-&gt;next;
      }
      return false;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-5-静态链表" tabindex="-1"><a class="header-anchor" href="#_2-3-5-静态链表"><span>2.3.5 静态链表</span></a></h2><h3 id="常见笔试题-反转链表" tabindex="-1"><a class="header-anchor" href="#常见笔试题-反转链表"><span>常见笔试题：反转链表</span></a></h3><p>给你单链表的头节点 <code>head</code> ，请你反转链表，并返回反转后的链表。</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        while (curr) {
            ListNode* next = curr-&gt;next;
            curr-&gt;next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function t(r,c){return i(),n("div",null,d)}const u=e(a,[["render",t],["__file","023.html.vue"]]),m=JSON.parse('{"path":"/datastructure/023.html","title":"2.3 线性表的链式表示","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.3.1 单链表的定义","slug":"_2-3-1-单链表的定义","link":"#_2-3-1-单链表的定义","children":[]},{"level":2,"title":"2.3.3 双向链表","slug":"_2-3-3-双向链表","link":"#_2-3-3-双向链表","children":[]},{"level":2,"title":"2.3.4 循环链表","slug":"_2-3-4-循环链表","link":"#_2-3-4-循环链表","children":[]},{"level":2,"title":"2.3.5 静态链表","slug":"_2-3-5-静态链表","link":"#_2-3-5-静态链表","children":[{"level":3,"title":"常见笔试题：反转链表","slug":"常见笔试题-反转链表","link":"#常见笔试题-反转链表","children":[]}]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/023.md"}');export{u as comp,m as data};
