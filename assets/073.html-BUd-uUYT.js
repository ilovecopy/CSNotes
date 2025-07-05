import{_ as s,c as a,a as e,o as l}from"./app-DKkA6jZv.js";const p={};function i(t,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="_7-3-树型查找" tabindex="-1"><a class="header-anchor" href="#_7-3-树型查找"><span>7.3 树型查找</span></a></h1><h2 id="_7-3-1-二叉排序树-bst" tabindex="-1"><a class="header-anchor" href="#_7-3-1-二叉排序树-bst"><span>7.3.1 二叉排序树 (BST)</span></a></h2><p>构造二叉排序树目的：提高查找、插入和删除关键字的速度。</p><h3 id="_1-二叉排序树的定义" tabindex="-1"><a class="header-anchor" href="#_1-二叉排序树的定义"><span>1.二叉排序树的定义</span></a></h3><p>二叉排序树或者是一颗空树，或者是具有下列特性的二叉树：</p><p>（1）若左子树非空，则左子树上所有结点的值均小于根结点的值。</p><p>（2）若右子树非空，则右子树上所有结点的值均大于根结点的值。</p><p>（3）左、右子树也分别是一颗二叉排序树。</p><h3 id="leetcode-109-有序链表转换二叉搜索树" tabindex="-1"><a class="header-anchor" href="#leetcode-109-有序链表转换二叉搜索树"><span>LeetCode[109] 有序链表转换二叉搜索树</span></a></h3><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">class Solution</span>
<span class="line">{</span>
<span class="line">public:</span>
<span class="line">    ListNode *findMidNode(ListNode *left, ListNode *right)</span>
<span class="line">    {</span>
<span class="line">        ListNode *slow = left;</span>
<span class="line">        ListNode *fast = left;</span>
<span class="line">        while (fast != right &amp;&amp; fast-&gt;next != right)</span>
<span class="line">        {</span>
<span class="line">            slow = slow-&gt;next;</span>
<span class="line">            fast = fast-&gt;next-&gt;next;</span>
<span class="line">        }</span>
<span class="line">        return slow;</span>
<span class="line">    }</span>
<span class="line">    TreeNode *buildBST(ListNode *left, ListNode *right)</span>
<span class="line">    {</span>
<span class="line">        if (left == right)</span>
<span class="line">        {</span>
<span class="line">            return nullptr;</span>
<span class="line">        }</span>
<span class="line">        ListNode *mid = findMidNode(left, right);</span>
<span class="line">        TreeNode *root = new TreeNode(mid-&gt;val);</span>
<span class="line">        root-&gt;left = buildBST(left, mid);</span>
<span class="line">        root-&gt;right = buildBST(mid-&gt;next, right);</span>
<span class="line">        return root;</span>
<span class="line">    }</span>
<span class="line">    TreeNode *sortedListToBST(ListNode *head)</span>
<span class="line">    {</span>
<span class="line">        return buildBST(head, nullptr);</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_7-3-2-平衡二叉树" tabindex="-1"><a class="header-anchor" href="#_7-3-2-平衡二叉树"><span>7.3.2 平衡二叉树</span></a></h2><p>任意节点左右子树高度差绝对值不超过 1。</p><p>构成平衡二叉树最少结点数递推公式 $n_{0}=0,n_{1}=1,n_{2}=2,n_{h}=1+n_{h-1}+n_{h-2}$，</p><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h3><p>LL（右单旋转）、</p><p>RR（左单旋转）、</p><p>LR（先左后右双旋转）：在 A 的左孩子的右子树上插入新结点</p><p>RL（先右后左双旋转）：在 A 的右孩子的左子树上插入新结点</p><p>平衡因子为 2 和 1 的结点重新排列，再把其他结点接上去。</p><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><p>向上回溯，找到第一个不平衡的节点，进行调整</p><h2 id="_7-3-3-红黑树" tabindex="-1"><a class="header-anchor" href="#_7-3-3-红黑树"><span>7.3.3 红黑树</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/红黑树.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">为什么要有红黑树？</p><p>因为平衡二叉树的要求太严格，导致每次进行插入/删除结点时，几乎都会破坏平衡二叉树。在频繁插入/删除结点的场景中，性能会大幅度下降。所以有了红黑树。</p></div><p>左右高度不超过两倍</p><p>红黑树是二叉排序树</p><ol><li>每个结点是红色或黑色</li><li>根结点是黑色的</li><li>叶结点（NULL 结点）都是黑色的</li><li>红结点的父结点和孩子结点都是黑色的</li><li>每个结点，从该结点到任一叶结点的简单路径上，所含黑结点的数量相同。记为黑高，根结点的黑高记为红黑树的黑高。</li></ol><p>“左根右，根叶黑，不红红，黑路同”</p><h3 id="插入-1" tabindex="-1"><a class="header-anchor" href="#插入-1"><span>插入</span></a></h3><p>新插入红黑树的结点 z 初始为红色。如果 z 是根结点就是黑色。</p><p>违反“不红红”的：</p><p>黑叔：</p><ol><li>LR:左旋 + 右旋，儿换爷 + 染色</li><li>LL：右单旋，父换爷 + 染色</li><li>RR：左单选，父换爷 + 染色</li><li>RL：右旋 + 左旋，儿换爷 + 染色</li></ol><p>红叔：</p><p>叔父爷染色 + 爷变新</p><h3 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1"><span>删除</span></a></h3><p>时间复杂度$O\\left( \\log_{2} n\\right)$</p><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++"><pre><code class="language-c++"><span class="line">#include &lt;iostream&gt;</span>
<span class="line"></span>
<span class="line">using namespace std;</span>
<span class="line"></span>
<span class="line">enum Color {</span>
<span class="line">    RED, BLACK</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">struct Node {</span>
<span class="line">    int key;</span>
<span class="line">    Color color;</span>
<span class="line">    Node *left;</span>
<span class="line">    Node *right;</span>
<span class="line"></span>
<span class="line">    Node(int k) : key(k), color(RED), left(nullptr), right(nullptr) {}</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">class RedBlackTree {</span>
<span class="line">public:</span>
<span class="line">    RedBlackTree() : root(nullptr) {}</span>
<span class="line"></span>
<span class="line">    void insert(int key);</span>
<span class="line"></span>
<span class="line">    bool find(int key);</span>
<span class="line"></span>
<span class="line">private:</span>
<span class="line">    void insert(Node *&amp;node, int key);</span>
<span class="line"></span>
<span class="line">    bool find(Node *node, int key);</span>
<span class="line"></span>
<span class="line">    void rotate_left(Node *&amp;node);</span>
<span class="line"></span>
<span class="line">    void rotate_right(Node *&amp;node);</span>
<span class="line"></span>
<span class="line">    void flip_colors(Node *&amp;node);</span>
<span class="line"></span>
<span class="line">    Node *root;</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">void RedBlackTree::insert(int key) {</span>
<span class="line">    insert(root, key);</span>
<span class="line">    root-&gt;color = BLACK; // 根节点始终为黑色</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void RedBlackTree::insert(Node *&amp;node, int key) {</span>
<span class="line">    if (node == nullptr) {</span>
<span class="line">        node = new Node(key);</span>
<span class="line">        return;</span>
<span class="line">    }</span>
<span class="line">    if (key &lt; node-&gt;key) { insert(node-&gt;left, key); }</span>
<span class="line">    else if (key &gt; node-&gt;key) { insert(node-&gt;right, key); }</span>
<span class="line">    else {</span>
<span class="line">        return; // 已存在该键值，不插入</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">// 红黑树自平衡</span>
<span class="line">    if (node-&gt;right &amp;&amp; node-&gt;right-&gt;color == RED &amp;&amp; (!node-&gt;left || node-&gt;left-&gt;color == BLACK)) {</span>
<span class="line">        rotate_left(node);</span>
<span class="line">    }</span>
<span class="line">    if (node-&gt;left &amp;&amp; node-&gt;left-&gt;color == RED &amp;&amp; node-&gt;left-&gt;left &amp;&amp; node-&gt;left-&gt;left-&gt;color == RED) {</span>
<span class="line">        rotate_right(node);</span>
<span class="line">    }</span>
<span class="line">    if (node-&gt;left &amp;&amp; node-&gt;left-&gt;color == RED &amp;&amp; node-&gt;right &amp;&amp; node-&gt;right-&gt;color == RED) {</span>
<span class="line">        flip_colors(node);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">bool RedBlackTree::find(int key) { return find(root, key); }</span>
<span class="line"></span>
<span class="line">bool RedBlackTree::find(Node *node, int key) {</span>
<span class="line">    if (node == nullptr) { return false; }</span>
<span class="line">    if (key &lt; node-&gt;key) { return find(node-&gt;left, key); }</span>
<span class="line">    else if (key &gt; node-&gt;key) {</span>
<span class="line">        return find(node-&gt;right, key);</span>
<span class="line">    } else { return true; }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void RedBlackTree::rotate_left(Node *&amp;node) {</span>
<span class="line">    Node *tmp = node-&gt;right;</span>
<span class="line">    node-&gt;right = tmp-&gt;left;</span>
<span class="line">    tmp-&gt;left = node;</span>
<span class="line">    tmp-&gt;color = node-&gt;color;</span>
<span class="line">    node-&gt;color = RED;</span>
<span class="line">    node = tmp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void RedBlackTree::rotate_right(Node *&amp;node) {</span>
<span class="line">    Node *tmp = node-&gt;left;</span>
<span class="line">    node-&gt;left = tmp-&gt;right;</span>
<span class="line">    tmp-&gt;right = node;</span>
<span class="line">    tmp-&gt;color = node-&gt;color;</span>
<span class="line">    node-&gt;color = RED;</span>
<span class="line">    node = tmp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">void RedBlackTree::flip_colors(Node *&amp;node) {</span>
<span class="line">    node-&gt;color = RED;</span>
<span class="line">    node-&gt;left-&gt;color = BLACK;</span>
<span class="line">    node-&gt;right-&gt;color = BLACK;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">int main() {</span>
<span class="line">    RedBlackTree tree;</span>
<span class="line">    tree.insert(5);</span>
<span class="line">    tree.insert(2);</span>
<span class="line">    tree.insert(8);</span>
<span class="line">    tree.insert(1);</span>
<span class="line">    tree.insert(4);</span>
<span class="line">    tree.insert(7);</span>
<span class="line">    tree.insert(9);</span>
<span class="line">    tree.insert(3);</span>
<span class="line">    tree.insert(6);</span>
<span class="line"></span>
<span class="line">    cout &lt;&lt; &quot;Find 5: &quot; &lt;&lt; tree.find(5) &lt;&lt; endl; // 输出 1</span>
<span class="line">    cout &lt;&lt; &quot;Find 10: &quot; &lt;&lt; tree.find(10) &lt;&lt; endl; // 输出 0</span>
<span class="line"></span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,38)]))}const o=s(p,[["render",i]]),r=JSON.parse('{"path":"/datastructure/073.html","title":"7.3 树型查找","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":2,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"datastructure/073.md"}');export{o as comp,r as data};
