import{_ as a,c as i,b as e,o as n}from"./app-Dt3f-5Vu.js";const s={};function l(p,t){return n(),i("div",null,t[0]||(t[0]=[e('<h1 id="_4-2-指令的寻址方式" tabindex="-1"><a class="header-anchor" href="#_4-2-指令的寻址方式"><span>4.2 指令的寻址方式</span></a></h1><p>寻址方式是寻找指令或操作数有效地址的方式。有效地址（EA）是操作数在存储器中的真实地址。 形式地址（A）是指令中的地址码字段。</p><p>指令系统中采用不同的寻址方式的目的是可缩短指令字长，扩大寻址空间，提高编程的灵活度。</p><h2 id="_4-2-1-指令寻址和数据寻址" tabindex="-1"><a class="header-anchor" href="#_4-2-1-指令寻址和数据寻址"><span>4.2.1 指令寻址和数据寻址</span></a></h2><p>指令寻址：寻找下一条将要执行的指令地址。</p><p>数据寻址：寻找本条指令的数据地址。</p><h3 id="_1-指令寻址" tabindex="-1"><a class="header-anchor" href="#_1-指令寻址"><span>1.指令寻址</span></a></h3><p>（1）顺序寻址</p><p>PC+1（1 个指令字长）</p><p>（2）跳跃寻址</p><h3 id="_2-数据寻址" tabindex="-1"><a class="header-anchor" href="#_2-数据寻址"><span>2.数据寻址</span></a></h3><table><thead><tr><th>操作码</th><th>寻址特征（指明属于哪种寻址方式）</th><th>形式地址 A</th></tr></thead></table><h2 id="_4-2-2-常见的数据寻址方式" tabindex="-1"><a class="header-anchor" href="#_4-2-2-常见的数据寻址方式"><span>4.2.2 常见的数据寻址方式</span></a></h2><h3 id="_1-隐含寻址" tabindex="-1"><a class="header-anchor" href="#_1-隐含寻址"><span>1.隐含寻址</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/隐含寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-立即-数-寻址" tabindex="-1"><a class="header-anchor" href="#_2-立即-数-寻址"><span>2.立即（数）寻址</span></a></h3><p>地址字段是操作数本身。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/立即寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-直接寻址" tabindex="-1"><a class="header-anchor" href="#_3-直接寻址"><span>3.直接寻址</span></a></h3><p>$EA=A$</p><p>一次访存。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/直接寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-间接寻址" tabindex="-1"><a class="header-anchor" href="#_4-间接寻址"><span>4.间接寻址</span></a></h3><p>$EA=(A)$</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/间接寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-寄存器寻址" tabindex="-1"><a class="header-anchor" href="#_5-寄存器寻址"><span>5.寄存器寻址</span></a></h3><p>$EA=R_{i}$</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/寄存器寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_6-寄存器间接寻址" tabindex="-1"><a class="header-anchor" href="#_6-寄存器间接寻址"><span>6.寄存器间接寻址</span></a></h3><p>$EA=(R_{i})$</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/寄存器间接寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_7-相对寻址" tabindex="-1"><a class="header-anchor" href="#_7-相对寻址"><span>7.相对寻址</span></a></h3><p>$EA=(PC)+A$</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/相对寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>相对寻址中，执行本条指令时，PC 已完成 +1 操作，PC 中保存的是下一条指令的地址，因此以下一条指令的地址为基准位置的偏移量。</p><h3 id="_8-基址寻址" tabindex="-1"><a class="header-anchor" href="#_8-基址寻址"><span>8.基址寻址</span></a></h3><p>$EA=(BR)+A$</p><p>重定位寄存器就是基址寄存器</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/基址寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/基址寻址2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>x=BR[A]</p><h3 id="_9-变址寻址" tabindex="-1"><a class="header-anchor" href="#_9-变址寻址"><span>9.变址寻址</span></a></h3><p>$EA=(IX)+A$</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/变址寻址.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>x=A[IX]</p><p>基址寻址和变址寻址的区别？</p><table><thead><tr><th></th><th>基址寻址</th><th>变址寻址</th></tr></thead><tbody><tr><td>有效地址</td><td>EA=（BR）+A</td><td>EA=（IX）+A</td></tr><tr><td>访问次数</td><td>1</td><td>1</td></tr><tr><td>寄存器内容</td><td>由操作系统或管理程序确定</td><td>由用户设定</td></tr><tr><td>程序执行过程中值可变与否</td><td>不可变</td><td>可变</td></tr><tr><td>特点</td><td>有利于多道程序设计和编制浮动程序</td><td>有利于处理数组问题和编制循环程序</td></tr></tbody></table><h3 id="_10-堆栈寻址" tabindex="-1"><a class="header-anchor" href="#_10-堆栈寻址"><span>10.堆栈寻址</span></a></h3>',48)]))}const c=a(s,[["render",l],["__file","042.html.vue"]]),d=JSON.parse('{"path":"/computerOrganization/042.html","title":"4.2 指令的寻址方式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"4.2.1 指令寻址和数据寻址","slug":"_4-2-1-指令寻址和数据寻址","link":"#_4-2-1-指令寻址和数据寻址","children":[{"level":3,"title":"1.指令寻址","slug":"_1-指令寻址","link":"#_1-指令寻址","children":[]},{"level":3,"title":"2.数据寻址","slug":"_2-数据寻址","link":"#_2-数据寻址","children":[]}]},{"level":2,"title":"4.2.2 常见的数据寻址方式","slug":"_4-2-2-常见的数据寻址方式","link":"#_4-2-2-常见的数据寻址方式","children":[{"level":3,"title":"1.隐含寻址","slug":"_1-隐含寻址","link":"#_1-隐含寻址","children":[]},{"level":3,"title":"2.立即（数）寻址","slug":"_2-立即-数-寻址","link":"#_2-立即-数-寻址","children":[]},{"level":3,"title":"3.直接寻址","slug":"_3-直接寻址","link":"#_3-直接寻址","children":[]},{"level":3,"title":"4.间接寻址","slug":"_4-间接寻址","link":"#_4-间接寻址","children":[]},{"level":3,"title":"5.寄存器寻址","slug":"_5-寄存器寻址","link":"#_5-寄存器寻址","children":[]},{"level":3,"title":"6.寄存器间接寻址","slug":"_6-寄存器间接寻址","link":"#_6-寄存器间接寻址","children":[]},{"level":3,"title":"7.相对寻址","slug":"_7-相对寻址","link":"#_7-相对寻址","children":[]},{"level":3,"title":"8.基址寻址","slug":"_8-基址寻址","link":"#_8-基址寻址","children":[]},{"level":3,"title":"9.变址寻址","slug":"_9-变址寻址","link":"#_9-变址寻址","children":[]},{"level":3,"title":"10.堆栈寻址","slug":"_10-堆栈寻址","link":"#_10-堆栈寻址","children":[]}]}],"git":{"updatedTime":1720103859000},"filePathRelative":"computerOrganization/042.md"}');export{c as comp,d as data};