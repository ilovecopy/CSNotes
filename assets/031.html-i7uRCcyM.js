import{_ as e,o as n,c as i,a}from"./app-XWLI5M5X.js";const s={},d=a(`<h1 id="_3-1-栈" tabindex="-1"><a class="header-anchor" href="#_3-1-栈"><span>3.1 栈</span></a></h1><h2 id="_3-1-1-栈的基本概念" tabindex="-1"><a class="header-anchor" href="#_3-1-1-栈的基本概念"><span>3.1.1 栈的基本概念</span></a></h2><p>只允许在一端进行插入或删除操作的线性表。</p><h2 id="_3-1-2-栈的顺序存储结构" tabindex="-1"><a class="header-anchor" href="#_3-1-2-栈的顺序存储结构"><span>3.1.2 栈的顺序存储结构</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>typedef struct{
  int data[50];
  int top;
}Sqstack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-1-3-栈的链式存储结构" tabindex="-1"><a class="header-anchor" href="#_3-1-3-栈的链式存储结构"><span>3.1.3 栈的链式存储结构</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>typedef struct Linknode{
  int data;
  struct Linknode *next；
}*LiStack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、实现-stack" tabindex="-1"><a class="header-anchor" href="#二、实现-stack"><span>二、实现 stack</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

using namespace std;

template&lt;typename T&gt;
class Stack {
public:
    void push(const T &amp;value) {
        data.push_back(value); // 将元素插入 vector 尾部
    }

    void pop() {
        if (empty()) {
            throw underflow_error(&quot;pop from empty stack&quot;); // 如果栈为空，则抛出异常
        }
        data.pop_back(); // 移除 vector 尾部元素
    }

    T &amp;top() {
        if (empty()) {
            throw underflow_error(&quot;top from empty stack&quot;); // 如果栈为空，则抛出异常
        }
        return data.back(); // 返回 vector 尾部元素
    }

    bool empty() const {
        return data.empty(); // 判断 vector 是否为空
    }

private:
    vector&lt;T&gt; data; // 用 vector 存储栈中的元素
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[d];function t(c,r){return n(),i("div",null,l)}const u=e(s,[["render",t],["__file","031.html.vue"]]),m=JSON.parse('{"path":"/datastructure/031.html","title":"3.1 栈","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"3.1.1 栈的基本概念","slug":"_3-1-1-栈的基本概念","link":"#_3-1-1-栈的基本概念","children":[]},{"level":2,"title":"3.1.2 栈的顺序存储结构","slug":"_3-1-2-栈的顺序存储结构","link":"#_3-1-2-栈的顺序存储结构","children":[]},{"level":2,"title":"3.1.3 栈的链式存储结构","slug":"_3-1-3-栈的链式存储结构","link":"#_3-1-3-栈的链式存储结构","children":[]},{"level":2,"title":"二、实现 stack","slug":"二、实现-stack","link":"#二、实现-stack","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/031.md"}');export{u as comp,m as data};
