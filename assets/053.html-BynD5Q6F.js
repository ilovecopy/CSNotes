import{_ as p,c as n,b as a,o as i}from"./app-C_1bF7bM.js";const e={};function s(c,t){return i(),n("div",null,t[0]||(t[0]=[a('<h1 id="_5-3-tcp-协议" tabindex="-1"><a class="header-anchor" href="#_5-3-tcp-协议"><span>5.3 TCP 协议</span></a></h1><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/TCPIP.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5-3-1-tcp-协议的特点" tabindex="-1"><a class="header-anchor" href="#_5-3-1-tcp-协议的特点"><span>5.3.1 TCP 协议的特点</span></a></h2><p>TCP 是面向连接的传输层协议。</p><h2 id="_5-3-2-tcp-报文段" tabindex="-1"><a class="header-anchor" href="#_5-3-2-tcp-报文段"><span>5.3.2 TCP 报文段</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/TCP报文段.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）源端口和目的端口</p><p>各占 2B。运输层的分用、复用都是通过端口实现。</p><p>（2）序号</p><p>占 4B，TCP 传送是面向字节流的（即 TCP 传送是逐个字节传送的），所以序号字段值指的是本报文段所发送数据的第一个字节的序号。</p><p>（3）确认号 占 4B。</p><p>（4）数据偏移（首部长度）</p><p>占 4 位。TCP 数据部分起始处在哪，单位是 4B，所以 TCP 首部长度为 20～60B。</p><p>（9）复位位（RST）</p><p>当 RST=1 时，表明 TCP 连接中出现严重差错（如主机崩溃或其他原因），必须释放连接，然后再重新建立运输连接。</p><p>（11）终止位 FIN</p><p>当 FIN=1 时，表明此报文段的发送方的数据已发送完毕，并要求释放运输连接。</p><p>（12）窗口</p><p>占 2B。允许对方发送的数据量。</p><p>（13）校验和</p><p>占 2B。发送方必须发送，接收方必须检查。</p><p>（15）选项</p><p>MSS（最大报文段长度）。MSS 是 TCP 报文段中的数据字段的最大长度。</p><p>TCP 选项至少支持以下选项。</p><p>00000000：选项结束</p><p>00000001：无操作</p><p>00000010｜00000100｜MSS：只在 SYN 中使用，其他字段不能使用。</p><table><thead><tr><th>种类</th><th>长度</th><th>意思</th></tr></thead><tbody><tr><td>0</td><td>-</td><td>End of Option List Option</td></tr><tr><td>1</td><td>-</td><td>No-Operation</td></tr><tr><td>2</td><td>4</td><td>最大报文段长度（MSS）</td></tr></tbody></table><p>如果设置时没有收到 MSS 选项，IPv4 的 MSS 默认为 536，IPv6 的 MSS 默认为 1220</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/MTU与MSS.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>TCP 首部最短长度为 20B，而最大长度为 60B，因为数据偏移为 4 位，$(2^4-1) \\times 4=60B$。</p><p>确认位 ACK=1 表示正确收到</p><p>确认号 N：到序号 N-1 为止的数据都已经正确收到，期望收到的第一个字节的序号 N</p><p>序号：本报文段发送的第一个字节的序号</p><p>同步位 SYN</p><p>SYN=1，ACK=0，连接请求报文</p><p>SYN=1，ACK=1，连接接受报文</p><h2 id="tcp-以段为单位发送数据" tabindex="-1"><a class="header-anchor" href="#tcp-以段为单位发送数据"><span>TCP 以段为单位发送数据</span></a></h2><p>三次握手将在 SYN 包中确认 MSS 数据。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/MSS.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">MSS 设置多大合适？</p><p>MSS 默认值是 536B。</p></div><h2 id="_5-3-3-tcp-连接管理" tabindex="-1"><a class="header-anchor" href="#_5-3-3-tcp-连接管理"><span>5.3.3 TCP 连接管理</span></a></h2><p>TCP 中发送第一个 SYN 包的一方叫客户，接收这个的一方叫服务器。</p><p>建立一个 TCP 连接需要发送 3 个包。这个过程也称作“三次握手”。</p><p>一个连接的建立与断开，正常过程至少需要来回发送 7 个包才能完成。</p><p>在建立 TCP 连接时，也可以确认发送数据包的单位。</p><p>TCP 实现<strong>应该</strong>在每个 SYN 段中发送 MSS 选项，并且<strong>可以</strong>始终发送 TCP 是端到端通信</p><p>TCP 连接的端点是套接字</p><p>一条连接使用它们的套接字表示 (1,x)-(2,y) 是两个端口唯一的连接，后建立的连接会被阻止。</p><h3 id="_1-tcp-连接建立-三次握手" tabindex="-1"><a class="header-anchor" href="#_1-tcp-连接建立-三次握手"><span>1.TCP 连接建立（三次握手）</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/三次握手.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>SYN=1，seq=x(随机)，第一个 SYN 报文段不能携带数据，但要消耗一个序号</p><p>SYN=1,ACK=1,seq=y(随机),ack=x+1，确认报文段，不能携带数据，但要消耗掉一个序号。</p><p>ACK=1,seq=x+1,ack=y+1，该报文段可以携带数据，若不携带数据则不消耗序号。</p><p>客户机：我能和你说句话吗？</p><p>服务器：可以</p><p>客户机：好的</p><p>第 3 次握手可以携带数据，若不携带数据则不消耗序号。</p><p>SYN 洪泛攻击：</p><p>一直发送 SYN，不回复，导致服务器一直发送 ACK，占用资源直到服务器死机。</p><div class="hint-container tip"><p class="hint-container-title">为什么不采用“两次握手”建立连接？</p><p>为了防止两次握手情况下已失效的连接请求报文突然又传送到服务器而产生错误。</p></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/两次握手.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由上图可以看出，两次握手情况下已失效的连接请求报文突然又传送到服务器，导致服务器以为有新的连接请求，进而白白等待，消耗资源。</p><h3 id="_2-tcp-连接释放-四次握手" tabindex="-1"><a class="header-anchor" href="#_2-tcp-连接释放-四次握手"><span>2.TCP 连接释放（四次握手）</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/四次握手.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>FIN=1,seq=u，FIN 报文段及时不携带数据，也要消耗掉一个序号</p><p>ACK=1,seq=v,ack=u+1(半关闭状态，客户到服务器方向的连接释放)</p><p>FIN=1,ACK=1,seq=w,ack=u+1(FIN 表示单方面释放连接，表示本方已经无数据发送，但可以接收对方数据）</p><p>ACK=1,seq=u+1,ack=w+1</p><p>A（客户机）：我说完了</p><p>B（服务器）：好的，我想说。。。。</p><p>B：我说完了</p><p>A：好的</p><p>A 说完话后，TCP 状态变为 TIME_WAIT，此时 TCP 连接还没有释放，还要等 2MSL（2 个最长报文段寿命），客户机才进入 CLOSED（连接关闭）状态。</p><div class="hint-container tip"><p class="hint-container-title">为什么不采用“三次握手”释放连接？</p><p>为了防止三次握手情况下已失效的连接请求报文突然又传送到服务器而产生错误。</p></div><div class="hint-container tip"><p class="hint-container-title">为什么发送最后一次握手报文后要等待 2MSL 时间？</p><p>为了防止最后的确认报文段能够到达 B。如果最后的确认报文段未到达 B，而且 A 关闭的话，B 就无法关闭。</p></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/2MSL作用.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>没有 2MSL 的话，新进程可能会收到就进程的 TCP 报文段，从而产生错误。</p><p>参考资料：<a href="https://www.rfc-editor.org/rfc/inline-errata/rfc793.html" target="_blank" rel="noopener noreferrer">RFC793</a></p><h2 id="_5-3-4-tcp-可靠传输" tabindex="-1"><a class="header-anchor" href="#_5-3-4-tcp-可靠传输"><span>5.3.4 TCP 可靠传输</span></a></h2><h3 id="_1-序号" tabindex="-1"><a class="header-anchor" href="#_1-序号"><span>1.序号</span></a></h3><h3 id="_2-确认" tabindex="-1"><a class="header-anchor" href="#_2-确认"><span>2.确认</span></a></h3><h3 id="_3-重传" tabindex="-1"><a class="header-anchor" href="#_3-重传"><span>3.重传</span></a></h3><h4 id="_1-超时重传" tabindex="-1"><a class="header-anchor" href="#_1-超时重传"><span>（1）超时重传</span></a></h4><h4 id="_2-冗余-ack" tabindex="-1"><a class="header-anchor" href="#_2-冗余-ack"><span>（2）冗余 ACK</span></a></h4><h3 id="_4-校验" tabindex="-1"><a class="header-anchor" href="#_4-校验"><span>4.校验</span></a></h3><h2 id="_5-3-5-tcp-流量控制" tabindex="-1"><a class="header-anchor" href="#_5-3-5-tcp-流量控制"><span>5.3.5 TCP 流量控制</span></a></h2><p>流量控制是什么？发送方不会淹没接收方。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/接受窗口.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接受窗口：接收方根据自己接收缓存的大小，动态地调整发送方的发送窗口大小。</p><div class="hint-container tip"><p class="hint-container-title">TCP 中滑动窗口的值设置太大，对主机的影响是？</p><p>如果滑动窗口的值设置得太小，那么会产生过多的 ACK（因为窗口大可以累积确认，因此会有更少的 ACK）</p></div><h2 id="_5-3-6-tcp-拥塞控制-发送方如何维护拥塞窗口" tabindex="-1"><a class="header-anchor" href="#_5-3-6-tcp-拥塞控制-发送方如何维护拥塞窗口"><span>5.3.6 TCP 拥塞控制（发送方如何维护拥塞窗口）</span></a></h2><p>拥塞控制是什么？发送方不会淹没接收方。</p><p>拥塞控制包含四种算法：慢开始、拥塞避免、快重传、快恢复。</p><p>拥塞窗口 cwnd：发送方根据自己估算的网络拥塞程度而设置的窗口值。</p><p>发送窗口上限：min[接受窗口，拥塞窗口]</p><h3 id="_1-慢开始" tabindex="-1"><a class="header-anchor" href="#_1-慢开始"><span>1.慢开始</span></a></h3><p>拥塞窗口=1，2，4，8，……</p><p>发送方开始只发送一个<strong>报文段</strong>，目的是试探一下网络的拥塞情况。</p><p>初始的拥塞窗口为最大报文段长度 1KB。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/TCP慢开始.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-拥塞避免" tabindex="-1"><a class="header-anchor" href="#_2-拥塞避免"><span>2.拥塞避免</span></a></h3><p>拥塞窗口+=1</p><p>慢开始门限 ssthresh 是前一次拥塞的一半</p><ul><li>cwnd&lt;ssthresh:慢开始</li><li>cwnd = ssthresh，发送方可以使用慢启动或拥塞避免 (通常做法)。</li><li>cwnd&gt;ssthresh:拥塞避免</li></ul><p>网络拥塞后:ssthresh=cwnd/2,cwnd=1</p><p>（3）网络拥塞的处理</p><p>无论是在慢开始阶段还是在拥塞避免阶段，只要发送方判断网络出现拥塞（未按时收到确认），就要把慢开始门限设置为出现拥塞时的发送方的 cwnd 值的一半（但不能小于 2）。然后把拥塞窗口 cwnd 重新设为 1，执行慢开始算法。这样做的目的是迅速减少主机发送到网络中的分组数，使得发生拥塞的路由器有足够的时间吧队列中积压的分组处理完。</p><p>注意⚠️：慢开始不能越过 ssthresh</p><h3 id="_3-快重传" tabindex="-1"><a class="header-anchor" href="#_3-快重传"><span>3.快重传</span></a></h3><p>发送方收到三个连续的 ACK 报文后，直接重传对方未收到的报文段。减少重传时间。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/快速重传.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-快恢复" tabindex="-1"><a class="header-anchor" href="#_4-快恢复"><span>4.快恢复</span></a></h3><p>当发送方连续收到三个冗余 ACK（重复确认）时，执行“乘法减小”算法，把慢开始门限设置为此事发送方 cwnd 的一半。因为发送方现在认为网络很可能没有发生严重拥塞，否则就不会有几个报文段连续到达接收方，也不会连续收到重复确认。</p><p>网络拥塞后:ssthresh=cwnd/2,cwnd=ssthresh，然后拥塞避免</p><p>就是跳过了慢开始</p><p>TCP 连接建立和网络出现超时时：慢开始和拥塞避免</p><p>发送方收到冗余 ACK 时，采用快重传和快恢复</p><div class="hint-container tip"><p class="hint-container-title">如果所有链路传输都不出现差错，所有的结点也不会发生故障，TCP 的“可靠交付”功能是否就是多余的？</p><p>不是多余的。这时为了防止出现以下情况。</p><p>（1）每个 IP 数据报独立地选择路由，因此在到达目的主机时有可能出现失序。</p><p>（2）由于路由选择的就散出现错误，导致 IP 数据报在互联网中转圈。最后数据报首部中的生存空间（TTL）的数值下降到零。这个数据报在中途就被丢弃</p><p>（3）某个路由器突然出现很大的通信量，以至路由器来不及处理到达的数据报。因此有的数据报被丢弃。</p></div><table><thead><tr><th></th><th>cwnd（拥塞窗口）</th><th>ssthresh（慢开始门限）</th><th>触发条件</th><th>丢包超时</th></tr></thead><tbody><tr><td>慢开始</td><td>1、2、4、8......</td><td>不变</td><td>TCP 连接建立且 cwnd&lt;ssthresh</td><td>ssthresh=cwnd/2</td></tr><tr><td>拥塞避免</td><td>x、x+1、x+2</td><td>不变</td><td>cwnd&gt;ssthresh</td><td>ssthresh=cwnd/2，执行慢开始</td></tr><tr><td>快重传</td><td></td><td>cwnd/2</td><td>当发送方连续收到三个冗余 ACK</td><td></td></tr><tr><td>快恢复</td><td>cwnd/2</td><td></td><td>当发送方连续收到三个冗余 ACK</td><td></td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">为什么超时事件发生时 cwnd 被置为 1，而收到三个冗余 ACK 时 cwnd 减半？</p><p>因为收到三个冗余 ACK，网络虽然拥堵，但至少还有 ACK 交付。而当超时事件发生时，说明网络可能拥塞得连 ACK 报文段都传输不了，发送方只能等待超时后重传。所以超时事件发生后，应该最大限度限制发送方数据发送量，cwnd 置为 1。收到三个冗余 ACK 时，发送方稍微抑制一下发送量，所以 cwnd 减半。</p></div><p>TCPIP 序号到底是什么？</p><p>序号是 TCP 报文段数据部分的字节的编号，一个字节占用一个序号。</p><p>参考资料：<a href="https://www.rfc-editor.org/info/rfc5681" target="_blank" rel="noopener noreferrer">RFC5681</a></p>',124)]))}const d=p(e,[["render",s],["__file","053.html.vue"]]),h=JSON.parse('{"path":"/network/053.html","title":"5.3 TCP 协议","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.3.1 TCP 协议的特点","slug":"_5-3-1-tcp-协议的特点","link":"#_5-3-1-tcp-协议的特点","children":[]},{"level":2,"title":"5.3.2 TCP 报文段","slug":"_5-3-2-tcp-报文段","link":"#_5-3-2-tcp-报文段","children":[]},{"level":2,"title":"TCP 以段为单位发送数据","slug":"tcp-以段为单位发送数据","link":"#tcp-以段为单位发送数据","children":[]},{"level":2,"title":"5.3.3 TCP 连接管理","slug":"_5-3-3-tcp-连接管理","link":"#_5-3-3-tcp-连接管理","children":[{"level":3,"title":"1.TCP 连接建立（三次握手）","slug":"_1-tcp-连接建立-三次握手","link":"#_1-tcp-连接建立-三次握手","children":[]},{"level":3,"title":"2.TCP 连接释放（四次握手）","slug":"_2-tcp-连接释放-四次握手","link":"#_2-tcp-连接释放-四次握手","children":[]}]},{"level":2,"title":"5.3.4 TCP 可靠传输","slug":"_5-3-4-tcp-可靠传输","link":"#_5-3-4-tcp-可靠传输","children":[{"level":3,"title":"1.序号","slug":"_1-序号","link":"#_1-序号","children":[]},{"level":3,"title":"2.确认","slug":"_2-确认","link":"#_2-确认","children":[]},{"level":3,"title":"3.重传","slug":"_3-重传","link":"#_3-重传","children":[]},{"level":3,"title":"4.校验","slug":"_4-校验","link":"#_4-校验","children":[]}]},{"level":2,"title":"5.3.5 TCP 流量控制","slug":"_5-3-5-tcp-流量控制","link":"#_5-3-5-tcp-流量控制","children":[]},{"level":2,"title":"5.3.6 TCP 拥塞控制（发送方如何维护拥塞窗口）","slug":"_5-3-6-tcp-拥塞控制-发送方如何维护拥塞窗口","link":"#_5-3-6-tcp-拥塞控制-发送方如何维护拥塞窗口","children":[{"level":3,"title":"1.慢开始","slug":"_1-慢开始","link":"#_1-慢开始","children":[]},{"level":3,"title":"2.拥塞避免","slug":"_2-拥塞避免","link":"#_2-拥塞避免","children":[]},{"level":3,"title":"3.快重传","slug":"_3-快重传","link":"#_3-快重传","children":[]},{"level":3,"title":"4.快恢复","slug":"_4-快恢复","link":"#_4-快恢复","children":[]}]}],"git":{"updatedTime":1720103859000},"filePathRelative":"network/053.md"}');export{d as comp,h as data};
