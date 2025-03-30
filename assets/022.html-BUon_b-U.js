import{_ as a,c as e,b as d,o as h}from"./app-C_1bF7bM.js";const n={};function r(l,t){return h(),e("div",null,t[0]||(t[0]=[d('<h1 id="_2-2-运算方法和运算电路" tabindex="-1"><a class="header-anchor" href="#_2-2-运算方法和运算电路"><span>2.2 运算方法和运算电路</span></a></h1><h2 id="_2-2-1-基本运算部件" tabindex="-1"><a class="header-anchor" href="#_2-2-1-基本运算部件"><span>2.2.1 基本运算部件</span></a></h2><h2 id="_2-2-2-定点数的移位运算" tabindex="-1"><a class="header-anchor" href="#_2-2-2-定点数的移位运算"><span>2.2.2 定点数的移位运算</span></a></h2><h3 id="_1-算数移位" tabindex="-1"><a class="header-anchor" href="#_1-算数移位"><span>1.算数移位</span></a></h3><p>算数移位的对象是有符号数，在移位过程中符号位保持不变。</p><table><thead><tr><th></th><th>码制</th><th>添加代码</th></tr></thead><tbody><tr><td>正数</td><td>原码、补码、反码</td><td>0</td></tr><tr><td>负数</td><td>原码</td><td>0</td></tr><tr><td></td><td>补码</td><td>左移添 0</td></tr><tr><td></td><td></td><td>右移添 0</td></tr><tr><td></td><td>反码</td><td>1</td></tr></tbody></table><h2 id="_2-逻辑移位" tabindex="-1"><a class="header-anchor" href="#_2-逻辑移位"><span>2.逻辑移位</span></a></h2><p>逻辑移位将操作数视为无符号数。</p><p>移位后补 0.</p><h3 id="_3-循环移位" tabindex="-1"><a class="header-anchor" href="#_3-循环移位"><span>3.循环移位</span></a></h3><p>带进位标志位和不带进位位的循环。</p><h2 id="_2-2-4-定点数的乘除运算" tabindex="-1"><a class="header-anchor" href="#_2-2-4-定点数的乘除运算"><span>2.2.4 定点数的乘除运算</span></a></h2><h3 id="_1-定点数的乘法运算" tabindex="-1"><a class="header-anchor" href="#_1-定点数的乘法运算"><span>1.定点数的乘法运算</span></a></h3><h4 id="_1-原码一位乘法" tabindex="-1"><a class="header-anchor" href="#_1-原码一位乘法"><span>（1）原码一位乘法</span></a></h4><p>符号位和数值位是分开求的，乘积符号由两个数的符号位“异或”形成，而乘积的数值部分则是两个数的绝对值相乘之积。</p><h4 id="_2-补码的一位乘法" tabindex="-1"><a class="header-anchor" href="#_2-补码的一位乘法"><span>（2）补码的一位乘法</span></a></h4><p>比原码多一次加法。</p><p>移位规则</p><table><thead><tr><th>$y_{n}$（高位）</th><th>$y_{n+1}$（低位）</th><th>操作</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>部分积右移一位</td></tr><tr><td>0</td><td>1</td><td>部分积加 [X] 补，右移一位</td></tr><tr><td>1</td><td>0</td><td>部分积加 [-X] 补，右移一位</td></tr><tr><td>1</td><td>1</td><td>部分积右移一位</td></tr></tbody></table><h2 id="_2-2-5-c-语言中的整数类型及类型转换" tabindex="-1"><a class="header-anchor" href="#_2-2-5-c-语言中的整数类型及类型转换"><span>2.2.5 C 语言中的整数类型及类型转换</span></a></h2><h2 id="_2-2-6-数据的存储和排列" tabindex="-1"><a class="header-anchor" href="#_2-2-6-数据的存储和排列"><span>2.2.6 数据的存储和排列</span></a></h2><h4 id="_1-数据的-大端方式-和-小端方式-存储" tabindex="-1"><a class="header-anchor" href="#_1-数据的-大端方式-和-小端方式-存储"><span>1.数据的“大端方式”和“小端方式”存储</span></a></h4>',22)]))}const i=a(n,[["render",r],["__file","022.html.vue"]]),_=JSON.parse('{"path":"/computerOrganization/022.html","title":"2.2 运算方法和运算电路","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.2.1 基本运算部件","slug":"_2-2-1-基本运算部件","link":"#_2-2-1-基本运算部件","children":[]},{"level":2,"title":"2.2.2 定点数的移位运算","slug":"_2-2-2-定点数的移位运算","link":"#_2-2-2-定点数的移位运算","children":[{"level":3,"title":"1.算数移位","slug":"_1-算数移位","link":"#_1-算数移位","children":[]}]},{"level":2,"title":"2.逻辑移位","slug":"_2-逻辑移位","link":"#_2-逻辑移位","children":[{"level":3,"title":"3.循环移位","slug":"_3-循环移位","link":"#_3-循环移位","children":[]}]},{"level":2,"title":"2.2.4 定点数的乘除运算","slug":"_2-2-4-定点数的乘除运算","link":"#_2-2-4-定点数的乘除运算","children":[{"level":3,"title":"1.定点数的乘法运算","slug":"_1-定点数的乘法运算","link":"#_1-定点数的乘法运算","children":[]}]},{"level":2,"title":"2.2.5 C 语言中的整数类型及类型转换","slug":"_2-2-5-c-语言中的整数类型及类型转换","link":"#_2-2-5-c-语言中的整数类型及类型转换","children":[]},{"level":2,"title":"2.2.6 数据的存储和排列","slug":"_2-2-6-数据的存储和排列","link":"#_2-2-6-数据的存储和排列","children":[]}],"git":{"updatedTime":1699757844000},"filePathRelative":"computerOrganization/022.md"}');export{i as comp,_ as data};
