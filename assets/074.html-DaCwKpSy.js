import{_ as l,c as e,b as i,o as a}from"./app-Dt3f-5Vu.js";const r={};function n(h,t){return a(),e("div",null,t[0]||(t[0]=[i('<h1 id="_7-4-b-树和-b-树" tabindex="-1"><a class="header-anchor" href="#_7-4-b-树和-b-树"><span>7.4 B 树和 B+ 树</span></a></h1><h2 id="_7-4-1-b-树及其基本操作" tabindex="-1"><a class="header-anchor" href="#_7-4-1-b-树及其基本操作"><span>7.4.1 B 树及其基本操作</span></a></h2><p>B 树是所有结点平衡因子均等于 0 的多路平衡查找树。</p><p>B 树的所有结点的孩子个数的最大值称为 B 树的阶。</p><table><thead><tr><th>m 阶 B 树结点</th><th>子树个数</th><th>关键字个数</th></tr></thead><tbody><tr><td>根结点</td><td>$(2,m)$</td><td>$(1,m-1)$</td></tr><tr><td>除根结点外所有非叶结点</td><td>$(\\left\\lceil m/2\\right\\rceil ,m)$</td><td>$(\\left\\lceil m/2\\right\\rceil-1 ,m-1)$</td></tr></tbody></table><p>m 阶 B 树</p><ol><li>每个结点最多有 m 颗子树，最多有 m-1 个关键字。</li><li>根结点至少两颗子树。</li><li>非叶结点至少有$\\left\\lceil m/2\\right\\rceil$颗子树，至少有$\\left\\lceil m/2\\right\\rceil$-1 个关键字。</li><li>查找树。</li><li>叶结点在同一层，代表查找失败的位置。</li></ol><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/B树.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-b-树的高度-磁盘存取次数" tabindex="-1"><a class="header-anchor" href="#_1-b-树的高度-磁盘存取次数"><span>1.B 树的高度（磁盘存取次数）</span></a></h3><h3 id="_2-b-树的查找" tabindex="-1"><a class="header-anchor" href="#_2-b-树的查找"><span>2.B 树的查找</span></a></h3><p>B 树的查找包括两个操作：</p><p>1、在 B 树中找结点。</p><p>2、在结点内找关键字。</p><p>由于 B 树常存储在磁盘上，因此前一个查找操作是在磁盘上进行的，而后一个查找操作是在内存中进行的。</p><h3 id="_3-b-树的插入" tabindex="-1"><a class="header-anchor" href="#_3-b-树的插入"><span>3.B 树的插入</span></a></h3><p>（1）定位</p><p>找到最底层非叶结点的插入位置。</p><p>（2）插入</p><p>插入后检查被插入节点内关键字的个数，当插入后结点关键字个数大于 m-1 时，必须对结点进行分裂。</p><p>分裂方法：左部分包含的关键字放在原结点中，右部分包含的关键字放在新结点中，中间位置 ($\\left\\lceil m/2\\right\\rceil$) 的结点插入原结点的父结点。</p><h3 id="_4-b-树的删除-删除关键字-结点不会删除" tabindex="-1"><a class="header-anchor" href="#_4-b-树的删除-删除关键字-结点不会删除"><span>4.B 树的删除 (删除关键字，结点不会删除)</span></a></h3><p>被删除结点不在终端结点时，用 k 的前驱或后继替换，转换为删除终端结点。</p><ol><li>直接删除关键字。当被删除关键字所在结点关键字个数$\\geqslant \\left\\lceil m/2\\right\\rceil$ 。</li><li>兄弟够借。兄弟变父亲，父亲变自己。</li><li>兄弟不够借。兄弟、父亲、自己合并。</li></ol><h2 id="_7-4-2-b-树" tabindex="-1"><a class="header-anchor" href="#_7-4-2-b-树"><span>7.4.2 B+ 树</span></a></h2><ol><li><p>每个分支结点最多有 m 棵子树。</p></li><li><p>非叶根结点至少有两颗子树，其他分支结点至少有$\\left\\lceil m/2\\right\\rceil$颗子树。</p></li><li><p>结点的子树个数和关键字个数相等。</p></li><li><p>所有叶结点包含全部关键字，按大小顺序排列，相邻叶结点按大小顺序相互链接起来。</p></li><li><p>所有分支结点包含它的各个子结点的关键字最大值和指针。</p><table><thead><tr><th>n 阶 B+ 树结点</th><th>子树个数/关键字个数</th></tr></thead><tbody><tr><td>根结点</td><td>$(2,m)$</td></tr><tr><td>除根结点外所有非叶结点</td><td>$(\\left\\lceil m/2\\right\\rceil ,m)$</td></tr></tbody></table></li></ol><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/B加树.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>B+ 树所有叶结点包含全部关键字信息，因此可以顺序查找，B 树不支持顺序查找。</p>',27)]))}const p=l(r,[["render",n],["__file","074.html.vue"]]),s=JSON.parse('{"path":"/datastructure/074.html","title":"7.4 B 树和 B+ 树","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"7.4.1 B 树及其基本操作","slug":"_7-4-1-b-树及其基本操作","link":"#_7-4-1-b-树及其基本操作","children":[{"level":3,"title":"1.B 树的高度（磁盘存取次数）","slug":"_1-b-树的高度-磁盘存取次数","link":"#_1-b-树的高度-磁盘存取次数","children":[]},{"level":3,"title":"2.B 树的查找","slug":"_2-b-树的查找","link":"#_2-b-树的查找","children":[]},{"level":3,"title":"3.B 树的插入","slug":"_3-b-树的插入","link":"#_3-b-树的插入","children":[]},{"level":3,"title":"4.B 树的删除 (删除关键字，结点不会删除)","slug":"_4-b-树的删除-删除关键字-结点不会删除","link":"#_4-b-树的删除-删除关键字-结点不会删除","children":[]}]},{"level":2,"title":"7.4.2 B+ 树","slug":"_7-4-2-b-树","link":"#_7-4-2-b-树","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"datastructure/074.md"}');export{p as comp,s as data};