import{_ as t,c as a,b as i,o as l}from"./app-Dt3f-5Vu.js";const n={};function r(p,e){return l(),a("div",null,e[0]||(e[0]=[i('<h1 id="_6-5-万维网-www" tabindex="-1"><a class="header-anchor" href="#_6-5-万维网-www"><span>6.5 万维网 (WWW)</span></a></h1><h2 id="_6-5-1-www-的概念与组成结构" tabindex="-1"><a class="header-anchor" href="#_6-5-1-www-的概念与组成结构"><span>6.5.1 WWW 的概念与组成结构</span></a></h2><p>万维网内核组成部分：</p><ol><li>统一资源定位符（URL）：标识万维网上各种文档</li><li>超文本传输协议（HTTP）：</li><li>超文本标记语言（HTML）：</li></ol><p>URL 格式：协议://主机：端口/路径</p><p><a href="https://www.rfc-editor.org/rfc/rfc8615.html" target="_blank" rel="noopener noreferrer">RFC8615</a></p><h2 id="_6-5-2-超文本传输协议-http" tabindex="-1"><a class="header-anchor" href="#_6-5-2-超文本传输协议-http"><span>6.5.2 超文本传输协议 (HTTP)</span></a></h2><p>HTTP 规定了浏览器怎样向万维网服务器请求万维网文档，以及服务器怎样把文档传送给服务器</p><p><a href="https://www.zhihu.com/question/20085992/answer/2049378419" target="_blank" rel="noopener noreferrer">HTTP 是基于 TCP 还是 UDP 的？</a></p><h3 id="_1-http-的操作过程" tabindex="-1"><a class="header-anchor" href="#_1-http-的操作过程"><span>1.HTTP 的操作过程</span></a></h3><p>单击一个链接后发生了什么？</p><ol><li>浏览器分析链接🔗指向页面的 URL</li><li>浏览器向 DNS 请求解析 www.baidu.com 的 IP 地址</li><li>域名系统解析</li><li>浏览器与该服务器建立 TCP 连接</li><li>浏览器发出 HTTP 请求</li><li>服务器发送响应报文</li><li>释放 TCP 连接</li></ol><h3 id="_2-http-的报文结构" tabindex="-1"><a class="header-anchor" href="#_2-http-的报文结构"><span>2.HTTP 的报文结构</span></a></h3><ul><li>请求报文：从客户向服务器发送的请求报文。</li></ul><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/http请求报文.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>CR:Carriage Return，回车符，16 进制 0x0d</p><p>LF:Line Feed，换行符，16 进制 0x0a</p><ul><li><p>响应报文：从服务器道客户的回答</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/http响应报文.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="_3-http-的特点" tabindex="-1"><a class="header-anchor" href="#_3-http-的特点"><span>3.HTTP 的特点</span></a></h3><p>Cookie 是存储在用户主机中的文本文件，记录一段时间内某用户的访问记录：提供个性化服务</p><p>持久连接：</p><h3 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码"><span>状态码</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/HTTP状态码drawio.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/HTTP.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><a href="https://datatracker.ietf.org/doc/html/rfc9110#name-status-codes" target="_blank" rel="noopener noreferrer">RFC9110</a></p><p><a href="https://www.rfc-editor.org/info/rfc9113" target="_blank" rel="noopener noreferrer">RFC9113</a></p>',26)]))}const s=t(n,[["render",r],["__file","065.html.vue"]]),h=JSON.parse('{"path":"/network/065.html","title":"6.5 万维网 (WWW)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"6.5.1 WWW 的概念与组成结构","slug":"_6-5-1-www-的概念与组成结构","link":"#_6-5-1-www-的概念与组成结构","children":[]},{"level":2,"title":"6.5.2 超文本传输协议 (HTTP)","slug":"_6-5-2-超文本传输协议-http","link":"#_6-5-2-超文本传输协议-http","children":[{"level":3,"title":"1.HTTP 的操作过程","slug":"_1-http-的操作过程","link":"#_1-http-的操作过程","children":[]},{"level":3,"title":"2.HTTP 的报文结构","slug":"_2-http-的报文结构","link":"#_2-http-的报文结构","children":[]},{"level":3,"title":"3.HTTP 的特点","slug":"_3-http-的特点","link":"#_3-http-的特点","children":[]},{"level":3,"title":"状态码","slug":"状态码","link":"#状态码","children":[]}]}],"git":{"updatedTime":1720103859000},"filePathRelative":"network/065.md"}');export{s as comp,h as data};