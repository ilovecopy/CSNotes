import{_ as e,c as n,b as i,o as t}from"./app-Dt3f-5Vu.js";const l={};function s(h,a){return t(),n("div",null,a[0]||(a[0]=[i('<h1 id="_5-2-指令执行过程" tabindex="-1"><a class="header-anchor" href="#_5-2-指令执行过程"><span>5.2 指令执行过程</span></a></h1><h2 id="_5-2-1-指令周期" tabindex="-1"><a class="header-anchor" href="#_5-2-1-指令周期"><span>5.2.1 指令周期</span></a></h2><p>CPU 从主存中取出并执行一条指令的时间称为指令周期。</p><p>时钟周期是计算机操作的最小单位时间，由计算机的主频决定，是主频的倒数。工作脉冲是控制器的最小时间单位，起定时触发作用。</p><table><thead><tr><th>取指周期</th><th>间址周期</th><th>执行周期</th><th>中断周期</th></tr></thead></table><p>合成指令周期</p><p>取指周期：取指令</p><p>间址周期：取操作数有效地址</p><p>执行周期：取操作数</p><p>中断周期：保存程序断点</p><p>CPU 区分指令和数据的依据，取指周期取出的是指令，执行周期取出的是数据。</p><h2 id="_5-2-2-指令周期的数据流" tabindex="-1"><a class="header-anchor" href="#_5-2-2-指令周期的数据流"><span>5.2.2 指令周期的数据流</span></a></h2><h3 id="_1-取指周期" tabindex="-1"><a class="header-anchor" href="#_1-取指周期"><span>1.取指周期</span></a></h3><p>取指周期的任务是根据 PC 中的内容从主存中取出指令代码并存放在 IR 中。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/取指周期.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-间址周期" tabindex="-1"><a class="header-anchor" href="#_2-间址周期"><span>2.间址周期</span></a></h3><p>取指周期的任务取操作数有效地址。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/间址周期.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-执行周期" tabindex="-1"><a class="header-anchor" href="#_3-执行周期"><span>3.执行周期</span></a></h3><p>执行周期的任务是取操作数。</p><h3 id="_4-中断周期" tabindex="-1"><a class="header-anchor" href="#_4-中断周期"><span>4.中断周期</span></a></h3><p>中断周期的任务是处理中断请求。其实就是把 PC 的值写入主存。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/中断周期.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5-2-3-指令执行方案" tabindex="-1"><a class="header-anchor" href="#_5-2-3-指令执行方案"><span>5.2.3 指令执行方案</span></a></h2><h3 id="_1-单指令周期" tabindex="-1"><a class="header-anchor" href="#_1-单指令周期"><span>1.单指令周期</span></a></h3><p>所有指令都选用相同的执行时间来完成，称为单指令周期方案。</p><h3 id="_2-多指令周期" tabindex="-1"><a class="header-anchor" href="#_2-多指令周期"><span>2.多指令周期</span></a></h3><p>可选用不同个时钟周期来完成不同指令的执行过程。</p><h3 id="_3-流水线方案" tabindex="-1"><a class="header-anchor" href="#_3-流水线方案"><span>3.流水线方案</span></a></h3><p>指令之间可以并行执行的方案，称为流水线方案。</p>',30)]))}const r=e(l,[["render",s],["__file","052.html.vue"]]),c=JSON.parse('{"path":"/computerOrganization/052.html","title":"5.2 指令执行过程","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.2.1 指令周期","slug":"_5-2-1-指令周期","link":"#_5-2-1-指令周期","children":[]},{"level":2,"title":"5.2.2 指令周期的数据流","slug":"_5-2-2-指令周期的数据流","link":"#_5-2-2-指令周期的数据流","children":[{"level":3,"title":"1.取指周期","slug":"_1-取指周期","link":"#_1-取指周期","children":[]},{"level":3,"title":"2.间址周期","slug":"_2-间址周期","link":"#_2-间址周期","children":[]},{"level":3,"title":"3.执行周期","slug":"_3-执行周期","link":"#_3-执行周期","children":[]},{"level":3,"title":"4.中断周期","slug":"_4-中断周期","link":"#_4-中断周期","children":[]}]},{"level":2,"title":"5.2.3 指令执行方案","slug":"_5-2-3-指令执行方案","link":"#_5-2-3-指令执行方案","children":[{"level":3,"title":"1.单指令周期","slug":"_1-单指令周期","link":"#_1-单指令周期","children":[]},{"level":3,"title":"2.多指令周期","slug":"_2-多指令周期","link":"#_2-多指令周期","children":[]},{"level":3,"title":"3.流水线方案","slug":"_3-流水线方案","link":"#_3-流水线方案","children":[]}]}],"git":{"updatedTime":1720103859000},"filePathRelative":"computerOrganization/052.md"}');export{r as comp,c as data};