import{_ as e,o as n,c as i,a as r}from"./app-XWLI5M5X.js";const d={},s=r(`<h1 id="_5-3-二叉树的遍历和线索二叉树" tabindex="-1"><a class="header-anchor" href="#_5-3-二叉树的遍历和线索二叉树"><span>5.3 二叉树的遍历和线索二叉树</span></a></h1><h2 id="_5-3-1-二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#_5-3-1-二叉树的遍历"><span>5.3.1 二叉树的遍历</span></a></h2><h3 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历"><span>先序遍历</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void preorder(TreeNode *root, vector&lt;int&gt; &amp;res)
    {
        if (!root)
        {
            return;
        }
        res.push_back(root-&gt;val);
        preorder(root-&gt;left, res);
        preorder(root-&gt;right, res);
    }
    vector&lt;int&gt; preorderTraversal(TreeNode *root)
    {
        vector&lt;int&gt; res;
        preorder(root, res);
        return res;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历"><span>中序遍历</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void inorder(TreeNode *root, vector&lt;int&gt; &amp;res)
    {
        if (!root)
        {
            return;
        }
        inorder(root-&gt;left, res);
        res.push_back(root-&gt;val);
        inorder(root-&gt;right, res);
    };
    vector&lt;int&gt; inorderTraversal(TreeNode *root)
    {
        vector&lt;int&gt; res;
        inorder(root, res);
        return res;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历"><span>后序遍历</span></a></h3><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void postorder(TreeNode *root, vector&lt;int&gt; &amp;res)
    {
        if (!root)
        {
            return;
        }
        postorder(root-&gt;left, res);
        postorder(root-&gt;right, res);
        res.push_back(root-&gt;val);
    }
    vector&lt;int&gt; postorderTraversal(TreeNode *root)
    {
        vector&lt;int&gt; res;
        postorder(root, res);
        return res;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="层次遍历" tabindex="-1"><a class="header-anchor" href="#层次遍历"><span>层次遍历</span></a></h3><p>队头出队，孩子入队</p><h3 id="由遍历序列构造二叉树" tabindex="-1"><a class="header-anchor" href="#由遍历序列构造二叉树"><span>由遍历序列构造二叉树</span></a></h3><p>由（先序遍历、后序遍历、层次遍历）三选一，加上中序遍历可以唯一确定一棵二叉树。</p><h2 id="_5-3-2-线索二叉树" tabindex="-1"><a class="header-anchor" href="#_5-3-2-线索二叉树"><span>5.3.2 线索二叉树</span></a></h2><p>加快查找结点前驱和后继的速度。</p><table><thead><tr><th>树</th><th>森林</th><th>二叉树</th></tr></thead><tbody><tr><td>先根遍历</td><td>先序遍历</td><td>先序遍历</td></tr><tr><td>后根遍历</td><td>中序遍历</td><td>中序遍历</td></tr></tbody></table>`,15),l=[s];function a(t,v){return n(),i("div",null,l)}const o=e(d,[["render",a],["__file","053.html.vue"]]),u=JSON.parse('{"path":"/datastructure/053.html","title":"5.3 二叉树的遍历和线索二叉树","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.3.1 二叉树的遍历","slug":"_5-3-1-二叉树的遍历","link":"#_5-3-1-二叉树的遍历","children":[{"level":3,"title":"先序遍历","slug":"先序遍历","link":"#先序遍历","children":[]},{"level":3,"title":"中序遍历","slug":"中序遍历","link":"#中序遍历","children":[]},{"level":3,"title":"后序遍历","slug":"后序遍历","link":"#后序遍历","children":[]},{"level":3,"title":"层次遍历","slug":"层次遍历","link":"#层次遍历","children":[]},{"level":3,"title":"由遍历序列构造二叉树","slug":"由遍历序列构造二叉树","link":"#由遍历序列构造二叉树","children":[]}]},{"level":2,"title":"5.3.2 线索二叉树","slug":"_5-3-2-线索二叉树","link":"#_5-3-2-线索二叉树","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/053.md"}');export{o as comp,u as data};
