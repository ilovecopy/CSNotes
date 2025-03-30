import{_ as e,c as n,b as a,o as s}from"./app-C_1bF7bM.js";const p={};function l(t,i){return s(),n("div",null,i[0]||(i[0]=[a(`<h1 id="_4-3-ipv4" tabindex="-1"><a class="header-anchor" href="#_4-3-ipv4"><span>4.3 IPv4</span></a></h1><p>IPv4 地址由 32 位正整数表示。每一台主机上的每一块网卡都要设置 IP 地址。$2^{23}=4294967296$，所以最多可以允许 43 亿台计算机连接到网络。</p><h2 id="_4-3-1-ipv4-的格式" tabindex="-1"><a class="header-anchor" href="#_4-3-1-ipv4-的格式"><span>4.3.1 IPv4 的格式</span></a></h2><h3 id="_1-ipv4-分组的格式" tabindex="-1"><a class="header-anchor" href="#_1-ipv4-分组的格式"><span>1.IPv4 分组的格式</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/IPv4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）版本（Version）。占 4 位，<code>0100</code>代表 IPv4，<code>0110</code>代表 IPv6。</p><p>（2）首部长度（IHL）。占 4 位，可以表示的最大二进制数是 15。以 32 位为单位，最小值为<code>0001</code>，代表 20B，最大值为 <code>1111</code>，代表 60B。</p><p>（3）区分服务（Type of Service）。占 8 位，</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> Bits 0-2:  Precedence.</span>
<span class="line">      Bit    3:  0 = Normal Delay,      1 = Low Delay.</span>
<span class="line">      Bits   4:  0 = Normal Throughput, 1 = High Throughput.</span>
<span class="line">      Bits   5:  0 = Normal Relibility, 1 = High Relibility.</span>
<span class="line">      Bit  6-7:  Reserved for Future Use.</span>
<span class="line"></span>
<span class="line">         0     1     2     3     4     5     6     7</span>
<span class="line">      +-----+-----+-----+-----+-----+-----+-----+-----+</span>
<span class="line">      |                 |     |     |     |     |     |</span>
<span class="line">      |   PRECEDENCE    |  D  |  T  |  R  |  0  |  0  |</span>
<span class="line">      |                 |     |     |     |     |     |</span>
<span class="line">      +-----+-----+-----+-----+-----+-----+-----+-----+</span>
<span class="line"></span>
<span class="line">        Precedence</span>
<span class="line"></span>
<span class="line">          111 - Network Control</span>
<span class="line">          110 - Internetwork Control</span>
<span class="line">          101 - CRITIC/ECP</span>
<span class="line">          100 - Flash Override</span>
<span class="line">          011 - Flash</span>
<span class="line">          010 - Immediate</span>
<span class="line">          001 - Priority</span>
<span class="line">          000 - Routine</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）总长度。占 16 位。指首部和数据之和的长度，单位为字节，最大为<code>1111111111111111</code>，因此数据报的最大长度为$2^{16}-1=65535$B。以太网帧的最大传送单元（MTU）为 1500B。因此当一个数据报封装成帧时，数据报的总长度（首部加数据）一定不能超过下面的数据链路层的 MTU 的值。</p><p>（4）标识。占 16 位。它是一个计数器，每产生一个数据报就加 1，并赋予标识字段。但它并不是“序号”（因为 IP 是无连接服务）。当一个数据报的长度超过网络的 MTU 时，必须分片，此时每个数据报片都复制一次标识号，以便正确重装成原来的数据报。</p><p>（5）标志。占 3 位。标志字段的最低位位 MF，MF=1 表示后面还有分片，MF=0 表示最后一个分片。标识字段中间的一位是 DF，DF=1 表示允许分片。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Bit 0: reserved, must be zero</span>
<span class="line">Bit 1: (DF) 0 = May Fragment,  1 = Don&#39;t Fragment.</span>
<span class="line">Bit 2: (MF) 0 = Last Fragment, 1 = More Fragments.</span>
<span class="line"></span>
<span class="line">          0   1   2</span>
<span class="line">        +---+---+---+</span>
<span class="line">        |   | D | M |</span>
<span class="line">        | 0 | F | F |</span>
<span class="line">        +---+---+---+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（6）片偏移。占 13 位。它指出较长的分组在分片后，某片在原分组的相对位置。</p><p>（7）生存时间（TTL）。占 8 位。数据报在网络中可通过的路由器数的最大值。标识分组在网络中的寿命，以确保分组不会永远在网络中循环，路由器在转发分组前，先把 TTL 减 1。若 TTL 被减为 0，则该分组必须丢弃。</p><p>（8）协议。占 8 位。该字段仅当一个 IP 数据报到达最终目的地才会使用。指出此分组携带的数据使用何种协议，即分组的数据部分应上交哪个协议进行处理，如 TCP、UDP 等。<code>00000110</code>表示 TCP。<code>00010001</code>表示 UDP。</p><p>（9）首部校验和。占 16 位。首部校验和只校验分组的首部，而不校验分组的数据部分。</p><p>（10）源地址字段。占 4B，标识发送方的 IP 地址。</p><p>（11）目的地址字段。占 4B，标识接收方的 IP 地址。</p><p>一总八片的首 4：片偏移为 8 的倍数，说明数据部分为 8 的倍数，首部长度为 4 的倍数。</p><p><a href="https://www.rfc-editor.org/rfc/rfc791.txt" target="_blank" rel="noopener noreferrer">RFC791</a></p><h3 id="_2-ip-数据报分片" tabindex="-1"><a class="header-anchor" href="#_2-ip-数据报分片"><span>2.IP 数据报分片</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/IP分片.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一个数据链路层能承载的最大数据量称为最大传送单元（MTU）。</p><p>以太网的 MTU 是 <code>1500</code>.如果 IP 层有数据包要传，而且数据包的长度超过了 MTU，那么 IP 层就要对数据包进行分片，使每一片的长度都小于或等于 MTU。</p><p>假设要传输一个 UDP 数据包，以太网的 MTU 为 1500 字节，一般 IP 首部为 20 字节，UDP 首部为 8 字节，数据的净荷（payload）部分预留是<code>1500-20-8=1472字节</code>。如果数据部分大于 1472 字节，就会出现分片现象。</p><p>当路由器准备将 IP 分组发送到网络上，而该网络又无法将整个分组一次发送时，路由器必须将该分组分片，使其长度能满足这一网络对分组长度的限制。IP 分片可以独立地通过各个路径发送，而且在传输过程中仍然存在分片的可能（不同网络的 MTU 可能不同），因此不能由中间路由器进行重组。分片后的 IP 分组直到到达目的主机后才能汇聚在一起。</p><h2 id="_4-3-2-ipv4-地址与-nat" tabindex="-1"><a class="header-anchor" href="#_4-3-2-ipv4-地址与-nat"><span>4.3.2 IPv4 地址与 NAT</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/IP地址简述.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>IP 地址是给连接在互联网上的每台主机或路由器分配的一个 32 比特的全球唯一标识符。</p><p>IP 地址当且仅当在私人网络中传递时才会改变。</p><p>网络号标识主机（路由器）连接到的网络。主机号标识该主机（路由器）。</p><h3 id="_1-ipv4-地址" tabindex="-1"><a class="header-anchor" href="#_1-ipv4-地址"><span>1.IPv4 地址</span></a></h3><p>A 类地址<code>0???????????????????????????????</code>1～126，因为 0 是“本网络”，127 是环回自检地址。</p><p>B 类地址<code>10??????????????????????????????</code>128～191</p><p>C 类地址<code>110?????????????????????????????</code>192～223</p><p>D 类地址<code>1110????????????????????????????</code>224～239</p><p>E 类地址<code>1111????????????????????????????</code>240～255</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/IP地址.drawio (1).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>特殊的不用作主机的 IP 地址：</p><ul><li><p>主机号全为 0 表示本网络本身。<img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/特殊IP地址0.drawio.png" alt="" loading="lazy"></p></li><li><p>主机号全为 1 表示本网络的广播地址。<img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/特殊IP地址1.drawio.png" alt="" loading="lazy"></p></li><li><p><code>127.x.x.x</code>保留为环回自检地址，此地址表示任意主机本身，目的地址为环回地址的 IP 数据报永远不会出现在任何网络上。<img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/特殊IP地址2.drawio.png" alt="" loading="lazy"></p></li><li><p>32 位全为 0，即<code>0.0.0.0</code>表示本网络上的本主机。<img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/特殊IP地址3.drawio.png" alt="" loading="lazy"></p></li><li><p>32 位全为 1，即<code>255.255.255.255</code>表示整个 TCP/IP 的广播地址，又称受限广播地址。实际使用时，由于路由器对广播域的隔离，<code>255.255.255.255</code>等效为本网络的广播地址。<img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/特殊IP地址4.drawio.png" alt="" loading="lazy"></p></li></ul><p>私有 IP 地址网段：</p><p>A 类：1 个 A 类网段，<code>10.0.0.0</code>~<code>10.255.255.255</code></p><p>B 类：16 个 B 类网段，<code>172.16.0.0</code>~<code>172.31.255.255</code></p><p>C 类：256 个 C 类网段，<code>192.168.0.0</code>~<code>192.168.255.255</code></p><div class="hint-container tip"><p class="hint-container-title">为什么分类会造成浪费？</p><p>架构 B 类网络时，理论上一个链路里允许 6 万 5 千多台计算机相连接</p></div><p>网络号表示主机连接的网络</p><p>如果一个主机有两个 IP 地址，说明这个主机属于两个逻辑网络。</p><p>主机号全 0 表示本网络本身。</p><p><code>0.0.0.0/32</code>可以作为本主机在网络上的源地址。<code>127.0.0.1</code>是回送地址，以它为目的 IP 地址的数据将会立即返回到本机。</p><p>主机号全 1 表示本网络广播地址。</p><p>如果局域网 A 向局域网 B 广播一个分组，目的地址是 B 的网络号 + 主机全 1。向自己广播也可以全 1。</p><p>主机地址是否为全 0 或全 1，不是就为单播地址。</p><h3 id="_2-网络地址转换-nat" tabindex="-1"><a class="header-anchor" href="#_2-网络地址转换-nat"><span>2.网络地址转换（NAT）</span></a></h3><p>NAT 是为了面临地址枯竭的 IPv4 网络开发的技术。</p><p>私有 IP 地址只用于局域网，不用于广域网。</p><p>NAT 转换表：把局域网的（不同 IP 地址，不同端口号）转换为广域网的（相同 IP 地址，不同端口号）</p><table><thead><tr><th>外网</th><th></th><th>内网</th><th></th></tr></thead><tbody><tr><td>IP 地址</td><td>端口号</td><td>IP 地址</td><td>端口号</td></tr></tbody></table><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/NAT.drawio (1).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-3-3-子网划分与子网掩码、cidr" tabindex="-1"><a class="header-anchor" href="#_4-3-3-子网划分与子网掩码、cidr"><span>4.3.3 子网划分与子网掩码、CIDR</span></a></h2><h3 id="_1-子网划分" tabindex="-1"><a class="header-anchor" href="#_1-子网划分"><span>1.子网划分</span></a></h3><p>作用：减少广播域的大小。划分子网可以增加子网的数量，子网之间的数据传输需要通过路由器进行，因此自然就减少了广播域的大小。另外，划分子网，由于子网号占用了主机号位，所以会减少主机的数量。划分子网仅提高 IP 地址的利用率，并不增加网络的数量。</p><p>IP 地址=网络号 + 子网号 + 主机号</p><h3 id="_2-子网掩码" tabindex="-1"><a class="header-anchor" href="#_2-子网掩码"><span>2.子网掩码</span></a></h3><h3 id="_3-cidr" tabindex="-1"><a class="header-anchor" href="#_3-cidr"><span>3.CIDR</span></a></h3><div class="hint-container tip"><p class="hint-container-title">CIDR 作用</p><p>把小的网络汇聚成大的超网。</p></div><p>CIDR 将网络前缀都相同的连续的 IP 地址组成 CIDR 地址块。</p><p>CIDR 用各种长度的网络前缀来代表分类地址中的网络号和子网号。</p><h3 id="_4-网络层转发分组的过程" tabindex="-1"><a class="header-anchor" href="#_4-网络层转发分组的过程"><span>4.网络层转发分组的过程</span></a></h3><p>分组转发都是基于目的主机所在的网络的。</p><h2 id="_4-3-4-arp、dhcp-和-icmp" tabindex="-1"><a class="header-anchor" href="#_4-3-4-arp、dhcp-和-icmp"><span>4.3.4 ARP、DHCP 和 ICMP</span></a></h2><h3 id="_1-ip-地址与硬件地址" tabindex="-1"><a class="header-anchor" href="#_1-ip-地址与硬件地址"><span>1.IP 地址与硬件地址</span></a></h3><p><a href="https://www.zhihu.com/question/21546408/answer/2303205686" target="_blank" rel="noopener noreferrer">有了 IP 地址，为什么还要用 MAC 地址？</a></p><h3 id="_2-地址解析协议-arp" tabindex="-1"><a class="header-anchor" href="#_2-地址解析协议-arp"><span>2.地址解析协议（ARP）</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/ARP.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-动态主机配置协议-dhcp" tabindex="-1"><a class="header-anchor" href="#_3-动态主机配置协议-dhcp"><span>3.动态主机配置协议（DHCP）</span></a></h3><p>为什么要有 DHCP 协议？</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/DHCP.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DHCP 的客户端和服务器端需要通过广播方式来进行交互，原因是 DHCP 执行初期，客户端不知道服务器端的 IP 地址，而执行中间，客户端未被分配 IP 地址，从而导致两者之间的通信必须采用广播的方式。应为不知道对方 IP 地址，所以采用 UDP。</p><p>（1）DHCP 广播“DHCP 发现”消息。源地址为<code>0.0.0.0</code>，目的地址为<code>255.255.255.255</code>。</p><p>（2）DHCP 服务器收到“DHCP 发现”消息后，广播“DHCP 提供”消息。源地址为 DHCP 服务器地址，目的地址为<code>255.255.255.255</code>。</p><p>（3）DHCP 客户机收到“DHCP 提供”消息后，广播“DHCP 请求”消息，源地址为<code>0.0.0.0</code>，目的地址为<code>255.255.255.255</code>。</p><p>（4）DHCP 服务器广播“DHCP 确认”消息，源地址为 DHCP 服务器地址，目的地址为<code>255.255.255.255</code>。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/DHCP.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-网际控制报文协议-icmp" tabindex="-1"><a class="header-anchor" href="#_4-网际控制报文协议-icmp"><span>4.网际控制报文协议（ICMP）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">ICMP 功能</p><p>确定 IP 包是否成功送达目的地址，通知在发送过程当中 IP 包被废弃的具体原因。</p></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/icmp.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果分组长度超过 MTU，那么当 DF=1 时，丢弃该分组，并且要用 ICMP 差错报文向源主机报告</p><p>提高 IP 数据报交付成功的机会。</p><p>ICMP 作为数据字段封装在 IP 分组当中，因此 IP 协议直接为 ICMP 提供服务。</p><p>ICMP 报文的种类有两种，ICMP 差错报文和 ICMP 询问报文</p><p>ICMP 差错报文是向源主机报告差错的。</p><p>ICMP 差错报文分类</p><table><thead><tr><th>内容</th><th>解释</th></tr></thead><tbody><tr><td>终点不可达</td><td>当路由器或主机不能交付数据报时，就像源点发送终点不可达报文</td></tr><tr><td>源点抑制</td><td>当路由器或主机由于拥塞而丢弃数据报时，就向源点发送源点抑制报文，使源点知道应当把数据报的发送速率放慢。</td></tr><tr><td>时间超过</td><td>当路由器收到生存时间（TTL）为零的数据报时，除丢弃该数据报外，还要向源点发送时间超过报文。当终点在预先规定的时间内不能收到一个数据报的全部数据报片时，就把已收到的数据报片都丢弃，并向源点发送时间超过报文。</td></tr><tr><td>参数问题</td><td>当路由器或目的主机收到的数据报的首部中有的字段的值不正确时，就丢弃该数据报，并向源点发送参数问题报文。</td></tr><tr><td>改变路由（重定向）</td><td>路由器把改变路由报文发送给主机，让主机知道下次应将数据报发送给另外的路由器（可通过更好的路由）。</td></tr></tbody></table><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/icmp时间超过.drawio (1).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ICMP 询问报文：</p><p>（1）回送请求和回答报文</p><p>（2）时间戳请求和回答报文</p><p>（3）地址掩码请求和回答报文</p><p>（4）路由器询问和回答报文</p>`,100)]))}const d=e(p,[["render",l],["__file","043.html.vue"]]),r=JSON.parse('{"path":"/network/043.html","title":"4.3 IPv4","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"4.3.1 IPv4 的格式","slug":"_4-3-1-ipv4-的格式","link":"#_4-3-1-ipv4-的格式","children":[{"level":3,"title":"1.IPv4 分组的格式","slug":"_1-ipv4-分组的格式","link":"#_1-ipv4-分组的格式","children":[]},{"level":3,"title":"2.IP 数据报分片","slug":"_2-ip-数据报分片","link":"#_2-ip-数据报分片","children":[]}]},{"level":2,"title":"4.3.2 IPv4 地址与 NAT","slug":"_4-3-2-ipv4-地址与-nat","link":"#_4-3-2-ipv4-地址与-nat","children":[{"level":3,"title":"1.IPv4 地址","slug":"_1-ipv4-地址","link":"#_1-ipv4-地址","children":[]},{"level":3,"title":"2.网络地址转换（NAT）","slug":"_2-网络地址转换-nat","link":"#_2-网络地址转换-nat","children":[]}]},{"level":2,"title":"4.3.3 子网划分与子网掩码、CIDR","slug":"_4-3-3-子网划分与子网掩码、cidr","link":"#_4-3-3-子网划分与子网掩码、cidr","children":[{"level":3,"title":"1.子网划分","slug":"_1-子网划分","link":"#_1-子网划分","children":[]},{"level":3,"title":"2.子网掩码","slug":"_2-子网掩码","link":"#_2-子网掩码","children":[]},{"level":3,"title":"3.CIDR","slug":"_3-cidr","link":"#_3-cidr","children":[]},{"level":3,"title":"4.网络层转发分组的过程","slug":"_4-网络层转发分组的过程","link":"#_4-网络层转发分组的过程","children":[]}]},{"level":2,"title":"4.3.4 ARP、DHCP 和 ICMP","slug":"_4-3-4-arp、dhcp-和-icmp","link":"#_4-3-4-arp、dhcp-和-icmp","children":[{"level":3,"title":"1.IP 地址与硬件地址","slug":"_1-ip-地址与硬件地址","link":"#_1-ip-地址与硬件地址","children":[]},{"level":3,"title":"2.地址解析协议（ARP）","slug":"_2-地址解析协议-arp","link":"#_2-地址解析协议-arp","children":[]},{"level":3,"title":"3.动态主机配置协议（DHCP）","slug":"_3-动态主机配置协议-dhcp","link":"#_3-动态主机配置协议-dhcp","children":[]},{"level":3,"title":"4.网际控制报文协议（ICMP）","slug":"_4-网际控制报文协议-icmp","link":"#_4-网际控制报文协议-icmp","children":[]}]}],"git":{"updatedTime":1720103859000},"filePathRelative":"network/043.md"}');export{d as comp,r as data};
