import{_ as a,c as t,b as p,o as i}from"./app-Dt3f-5Vu.js";const n={};function s(l,e){return i(),t("div",null,e[0]||(e[0]=[p('<h1 id="_6-4-电子邮件" tabindex="-1"><a class="header-anchor" href="#_6-4-电子邮件"><span>6.4 电子邮件</span></a></h1><h2 id="_6-4-1-电子邮件系统的组成结构" tabindex="-1"><a class="header-anchor" href="#_6-4-1-电子邮件系统的组成结构"><span>6.4.1 电子邮件系统的组成结构</span></a></h2><p>用户代理：用户与电子邮件系统的接口：QQ 邮箱</p><p>邮件服务器：采用客户/服务器方式工作，必须能同时充当客户和服务器。</p><p>SMTP：“推”，用户代理——&gt;服务器，服务器——&gt;服务器</p><p>POP：“拉”，服务器——&gt;用户代理</p><h2 id="_6-4-2-电子邮件格式与-mime" tabindex="-1"><a class="header-anchor" href="#_6-4-2-电子邮件格式与-mime"><span>6.4.2 电子邮件格式与 MIME</span></a></h2><h3 id="多用途网际邮箱扩充-mime" tabindex="-1"><a class="header-anchor" href="#多用途网际邮箱扩充-mime"><span>多用途网际邮箱扩充 (MIME)</span></a></h3><p>中文等非 ASCII 码传输。</p><h2 id="_6-4-3-smtp-和-pop3" tabindex="-1"><a class="header-anchor" href="#_6-4-3-smtp-和-pop3"><span>6.4.3 SMTP 和 POP3</span></a></h2><p>用户代理——&gt;SMTP 发件服务器——&gt;SMTP 收件服务器——&gt;POP3 用户代理。</p><p>SMTP 协议只传输 7 比特 ASCII 码的内容。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/电子邮件.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>SMTP（TCP 连接，25 端口）：</p><p>1.连接建立</p><p>2.邮件传送</p><p>3.连接释放</p><p>SMTP 只能传输 7 位 ASCII 码。</p>',18)]))}const h=a(n,[["render",s],["__file","064.html.vue"]]),c=JSON.parse('{"path":"/network/064.html","title":"6.4 电子邮件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"6.4.1 电子邮件系统的组成结构","slug":"_6-4-1-电子邮件系统的组成结构","link":"#_6-4-1-电子邮件系统的组成结构","children":[]},{"level":2,"title":"6.4.2 电子邮件格式与 MIME","slug":"_6-4-2-电子邮件格式与-mime","link":"#_6-4-2-电子邮件格式与-mime","children":[{"level":3,"title":"多用途网际邮箱扩充 (MIME)","slug":"多用途网际邮箱扩充-mime","link":"#多用途网际邮箱扩充-mime","children":[]}]},{"level":2,"title":"6.4.3 SMTP 和 POP3","slug":"_6-4-3-smtp-和-pop3","link":"#_6-4-3-smtp-和-pop3","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"network/064.md"}');export{h as comp,c as data};