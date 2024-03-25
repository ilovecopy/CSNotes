import{_ as l,o as i,c as a,a as e,b as s,d as n}from"./app-XWLI5M5X.js";const t={},d=e(`<h1 id="_7-3-树型查找" tabindex="-1"><a class="header-anchor" href="#_7-3-树型查找"><span>7.3 树型查找</span></a></h1><h2 id="_7-3-1-二叉排序树-bst" tabindex="-1"><a class="header-anchor" href="#_7-3-1-二叉排序树-bst"><span>7.3.1 二叉排序树 (BST)</span></a></h2><p>构造二叉排序树目的：提高查找、插入和删除关键字的速度。</p><h3 id="_1-二叉排序树的定义" tabindex="-1"><a class="header-anchor" href="#_1-二叉排序树的定义"><span>1.二叉排序树的定义</span></a></h3><p>二叉排序树或者是一颗空树，或者是具有下列特性的二叉树：</p><p>（1）若左子树非空，则左子树上所有结点的值均小于根结点的值。</p><p>（2）若右子树非空，则右子树上所有结点的值均大于根结点的值。</p><p>（3）左、右子树也分别是一颗二叉排序树。</p><h3 id="leetcode-109-有序链表转换二叉搜索树" tabindex="-1"><a class="header-anchor" href="#leetcode-109-有序链表转换二叉搜索树"><span>LeetCode[109] 有序链表转换二叉搜索树</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>class Solution
{
public:
    ListNode *findMidNode(ListNode *left, ListNode *right)
    {
        ListNode *slow = left;
        ListNode *fast = left;
        while (fast != right &amp;&amp; fast-&gt;next != right)
        {
            slow = slow-&gt;next;
            fast = fast-&gt;next-&gt;next;
        }
        return slow;
    }
    TreeNode *buildBST(ListNode *left, ListNode *right)
    {
        if (left == right)
        {
            return nullptr;
        }
        ListNode *mid = findMidNode(left, right);
        TreeNode *root = new TreeNode(mid-&gt;val);
        root-&gt;left = buildBST(left, mid);
        root-&gt;right = buildBST(mid-&gt;next, right);
        return root;
    }
    TreeNode *sortedListToBST(ListNode *head)
    {
        return buildBST(head, nullptr);
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-2-平衡二叉树" tabindex="-1"><a class="header-anchor" href="#_7-3-2-平衡二叉树"><span>7.3.2 平衡二叉树</span></a></h2><p>任意节点左右子树高度差绝对值不超过 1。</p>`,12),r=s("p",null,[n("构成平衡二叉树最少结点数递推公式 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"n"),s("mn",null,"0")]),s("mo",null,"="),s("mn",null,"0"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"n"),s("mn",null,"1")]),s("mo",null,"="),s("mn",null,"1"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",null,"="),s("mn",null,"2"),s("mo",{separator:"true"},","),s("msub",null,[s("mi",null,"n"),s("mi",null,"h")]),s("mo",null,"="),s("mn",null,"1"),s("mo",null,"+"),s("msub",null,[s("mi",null,"n"),s("mrow",null,[s("mi",null,"h"),s("mo",null,"−"),s("mn",null,"1")])]),s("mo",null,"+"),s("msub",null,[s("mi",null,"n"),s("mrow",null,[s("mi",null,"h"),s("mo",null,"−"),s("mn",null,"2")])])]),s("annotation",{encoding:"application/x-tex"},"n_{0}=0,n_{1}=1,n_{2}=2,n_{h}=1+n_{h-1}+n_{h-2}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.5806em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"0")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"0"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8389em","vertical-align":"-0.1944em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"h")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7917em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"h"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"1")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6389em","vertical-align":"-0.2083em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3361em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"h"),s("span",{class:"mbin mtight"},"−"),s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2083em"}},[s("span")])])])])])])])]),n("，")],-1),m=e('<h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h3><p>LL（右单旋转）、</p><p>RR（左单旋转）、</p><p>LR（先左后右双旋转）：在 A 的左孩子的右子树上插入新结点</p><p>RL（先右后左双旋转）：在 A 的右孩子的左子树上插入新结点</p><p>平衡因子为 2 和 1 的结点重新排列，再把其他结点接上去。</p><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><p>向上回溯，找到第一个不平衡的节点，进行调整</p><h2 id="_7-3-3-红黑树" tabindex="-1"><a class="header-anchor" href="#_7-3-3-红黑树"><span>7.3.3 红黑树</span></a></h2><p><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/红黑树.png" alt="红黑树.drawio"></p><div class="custom-container tip"><p class="custom-container-title">为什么要有红黑树？</p><p>因为平衡二叉树的要求太严格，导致每次进行插入/删除结点时，几乎都会破坏平衡二叉树。在频繁插入/删除结点的场景中，性能会大幅度下降。所以有了红黑树。</p></div><p>左右高度不超过两倍</p><p>红黑树是二叉排序树</p><ol><li>每个结点是红色或黑色</li><li>根结点是黑色的</li><li>叶结点（NULL 结点）都是黑色的</li><li>红结点的父结点和孩子结点都是黑色的</li><li>每个结点，从该结点到任一叶结点的简单路径上，所含黑结点的数量相同。记为黑高，根结点的黑高记为红黑树的黑高。</li></ol><p>“左根右，根叶黑，不红红，黑路同”</p><h3 id="插入-1" tabindex="-1"><a class="header-anchor" href="#插入-1"><span>插入</span></a></h3><p>新插入红黑树的结点 z 初始为红色。如果 z 是根结点就是黑色。</p><p>违反“不红红”的：</p><p>黑叔：</p><ol><li>LR:左旋 + 右旋，儿换爷 + 染色</li><li>LL：右单旋，父换爷 + 染色</li><li>RR：左单选，父换爷 + 染色</li><li>RL：右旋 + 左旋，儿换爷 + 染色</li></ol><p>红叔：</p><p>叔父爷染色 + 爷变新</p><h3 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1"><span>删除</span></a></h3>',23),c=s("p",null,[n("时间复杂度"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mrow",null,[s("mo",{fence:"true"},"("),s("msub",null,[s("mrow",null,[s("mi",null,"log"),s("mo",null,"⁡")]),s("mn",null,"2")]),s("mi",null,"n"),s("mo",{fence:"true"},")")])]),s("annotation",{encoding:"application/x-tex"},"O\\left( \\log_{2} n\\right)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"minner"},[s("span",{class:"mopen delimcenter",style:{top:"0em"}},"("),s("span",{class:"mop"},[s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.207em"}},[s("span",{style:{top:"-2.4559em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2441em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose delimcenter",style:{top:"0em"}},")")])])])])],-1),v=e(`<div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;

using namespace std;

enum Color {
    RED, BLACK
};

struct Node {
    int key;
    Color color;
    Node *left;
    Node *right;

    Node(int k) : key(k), color(RED), left(nullptr), right(nullptr) {}
};

class RedBlackTree {
public:
    RedBlackTree() : root(nullptr) {}

    void insert(int key);

    bool find(int key);

private:
    void insert(Node *&amp;node, int key);

    bool find(Node *node, int key);

    void rotate_left(Node *&amp;node);

    void rotate_right(Node *&amp;node);

    void flip_colors(Node *&amp;node);

    Node *root;
};

void RedBlackTree::insert(int key) {
    insert(root, key);
    root-&gt;color = BLACK; // 根节点始终为黑色
}

void RedBlackTree::insert(Node *&amp;node, int key) {
    if (node == nullptr) {
        node = new Node(key);
        return;
    }
    if (key &lt; node-&gt;key) { insert(node-&gt;left, key); }
    else if (key &gt; node-&gt;key) { insert(node-&gt;right, key); }
    else {
        return; // 已存在该键值，不插入
    }

// 红黑树自平衡
    if (node-&gt;right &amp;&amp; node-&gt;right-&gt;color == RED &amp;&amp; (!node-&gt;left || node-&gt;left-&gt;color == BLACK)) {
        rotate_left(node);
    }
    if (node-&gt;left &amp;&amp; node-&gt;left-&gt;color == RED &amp;&amp; node-&gt;left-&gt;left &amp;&amp; node-&gt;left-&gt;left-&gt;color == RED) {
        rotate_right(node);
    }
    if (node-&gt;left &amp;&amp; node-&gt;left-&gt;color == RED &amp;&amp; node-&gt;right &amp;&amp; node-&gt;right-&gt;color == RED) {
        flip_colors(node);
    }
}


bool RedBlackTree::find(int key) { return find(root, key); }

bool RedBlackTree::find(Node *node, int key) {
    if (node == nullptr) { return false; }
    if (key &lt; node-&gt;key) { return find(node-&gt;left, key); }
    else if (key &gt; node-&gt;key) {
        return find(node-&gt;right, key);
    } else { return true; }
}

void RedBlackTree::rotate_left(Node *&amp;node) {
    Node *tmp = node-&gt;right;
    node-&gt;right = tmp-&gt;left;
    tmp-&gt;left = node;
    tmp-&gt;color = node-&gt;color;
    node-&gt;color = RED;
    node = tmp;
}

void RedBlackTree::rotate_right(Node *&amp;node) {
    Node *tmp = node-&gt;left;
    node-&gt;left = tmp-&gt;right;
    tmp-&gt;right = node;
    tmp-&gt;color = node-&gt;color;
    node-&gt;color = RED;
    node = tmp;
}

void RedBlackTree::flip_colors(Node *&amp;node) {
    node-&gt;color = RED;
    node-&gt;left-&gt;color = BLACK;
    node-&gt;right-&gt;color = BLACK;
}


int main() {
    RedBlackTree tree;
    tree.insert(5);
    tree.insert(2);
    tree.insert(8);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);
    tree.insert(9);
    tree.insert(3);
    tree.insert(6);

    cout &lt;&lt; &quot;Find 5: &quot; &lt;&lt; tree.find(5) &lt;&lt; endl; // 输出 1
    cout &lt;&lt; &quot;Find 10: &quot; &lt;&lt; tree.find(10) &lt;&lt; endl; // 输出 0

    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p=[d,r,m,c,v];function o(u,h){return i(),a("div",null,p)}const b=l(t,[["render",o],["__file","073.html.vue"]]),f=JSON.parse('{"path":"/datastructure/073.html","title":"7.3 树型查找","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"7.3.1 二叉排序树 (BST)","slug":"_7-3-1-二叉排序树-bst","link":"#_7-3-1-二叉排序树-bst","children":[{"level":3,"title":"1.二叉排序树的定义","slug":"_1-二叉排序树的定义","link":"#_1-二叉排序树的定义","children":[]},{"level":3,"title":"LeetCode[109] 有序链表转换二叉搜索树","slug":"leetcode-109-有序链表转换二叉搜索树","link":"#leetcode-109-有序链表转换二叉搜索树","children":[]}]},{"level":2,"title":"7.3.2 平衡二叉树","slug":"_7-3-2-平衡二叉树","link":"#_7-3-2-平衡二叉树","children":[{"level":3,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]},{"level":2,"title":"7.3.3 红黑树","slug":"_7-3-3-红黑树","link":"#_7-3-3-红黑树","children":[{"level":3,"title":"插入","slug":"插入-1","link":"#插入-1","children":[]},{"level":3,"title":"删除","slug":"删除-1","link":"#删除-1","children":[]}]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/073.md"}');export{b as comp,f as data};
