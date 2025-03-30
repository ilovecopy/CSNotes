import{_ as i,c as n,b as e,o as t}from"./app-C_1bF7bM.js";const s={};function o(c,a){return t(),n("div",null,a[0]||(a[0]=[e('<h1 id="_3-2-innodb-行格式" tabindex="-1"><a class="header-anchor" href="#_3-2-innodb-行格式"><span>3.2 InnoDB 行格式</span></a></h1><p>以记录为单位向表中插入数据，这些记录在磁盘上的存放形式也被称为行格式。</p><p>四种行格式：分为</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/记录.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-2-1-compact-行格式" tabindex="-1"><a class="header-anchor" href="#_3-2-1-compact-行格式"><span>3.2.1 COMPACT 行格式</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/COMPACT行格式.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-2-2-dynamic-行格式" tabindex="-1"><a class="header-anchor" href="#_3-2-2-dynamic-行格式"><span>3.2.2 DYNAMIC 行格式</span></a></h2><p>数据库从磁盘中读写以块为单位 因为根据局部性原理。</p><p>记录被存放在数据页中。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/数据页.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么记录怎样排序呢</p><h2 id="分组" tabindex="-1"><a class="header-anchor" href="#分组"><span>分组</span></a></h2><p>Infimum 伪记录单独分为 1 个组</p><p>Supremum 伪记录所在分组记录条数只能在 1～8 条之间</p><p>其余分组的记录条数只能在 4～8 条之间。</p><p>每个组有一个组长和几个组员。组长的 n_owned 值记录本组成员个数。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/n_owned.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/槽.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/索引.drawio (1).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="主键索引" tabindex="-1"><a class="header-anchor" href="#主键索引"><span>主键索引</span></a></h2><p>按照主键的大小对用户记录和数据页进行排序，记录用单向链表进行连接，数据页用双向链表进行连接。</p><p>主键索引是根据主键查数据</p><p>二级索引是根据 A 列查主键，再根据主键查数据</p><p>联合索引是根据 A、B 两列查主键，再根据主键查数据</p>',24)]))}const l=i(s,[["render",o],["__file","032.html.vue"]]),r=JSON.parse('{"path":"/database/032.html","title":"3.2 InnoDB 行格式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"3.2.1 COMPACT 行格式","slug":"_3-2-1-compact-行格式","link":"#_3-2-1-compact-行格式","children":[]},{"level":2,"title":"3.2.2 DYNAMIC 行格式","slug":"_3-2-2-dynamic-行格式","link":"#_3-2-2-dynamic-行格式","children":[]},{"level":2,"title":"分组","slug":"分组","link":"#分组","children":[]},{"level":2,"title":"主键索引","slug":"主键索引","link":"#主键索引","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"database/032.md"}');export{l as comp,r as data};
