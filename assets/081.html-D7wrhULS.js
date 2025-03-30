import{_ as s,c as a,b as e,o as t}from"./app-C_1bF7bM.js";const i={};function p(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="_8-1-从零造一个计算机" tabindex="-1"><a class="header-anchor" href="#_8-1-从零造一个计算机"><span>8.1 从零造一个计算机</span></a></h1><h2 id="_1-半加器" tabindex="-1"><a class="header-anchor" href="#_1-半加器"><span>1.半加器</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>实现两个二进制数相加，获得结果和进位。</p></div><p>单位二进制加法：<code>0 + 0 = 0(无进位)</code>、<code>0 + 1 = 1(无进位)</code>、<code>1 + 0 = 1(无进位)</code>、<code>1 + 1 = 0(进位1)</code></p><p>写成真值表 (A,B 输入，S 输出，C 进位输出) 为</p><table><thead><tr><th>A</th><th>B</th><th>S</th><th>C</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><p>实现这样一个运算的逻辑电路称为<code>半加器</code></p><p>$S=\\overline{A} B+A\\overline{B} =A\\oplus B$</p><p>$C=AB$</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230801232736431.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-一位全加器" tabindex="-1"><a class="header-anchor" href="#_2-一位全加器"><span>2.一位全加器</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>实现两个二进制数和进位位相加，获得结果和进位。</p></div><table><thead><tr><th>A</th><th>B</th><th>CI</th><th>S</th><th>CO</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody></table><p>其实</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802002214673.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_8-位全加器" tabindex="-1"><a class="header-anchor" href="#_8-位全加器"><span>8 位全加器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802205903340.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_8-位取反器" tabindex="-1"><a class="header-anchor" href="#_8-位取反器"><span>8 位取反器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802205835348.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="sr-锁存器" tabindex="-1"><a class="header-anchor" href="#sr-锁存器"><span>SR 锁存器</span></a></h2><p>作用：SR 都为 0 是可以保存 1 比特。</p><table><thead><tr><th style="text-align:center;">R</th><th style="text-align:center;">S</th><th style="text-align:center;">Q</th><th style="text-align:center;">Q&#39;</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">不变</td><td style="text-align:center;">不变</td></tr><tr><td style="text-align:center;">0</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td><td style="text-align:center;">0</td></tr></tbody></table><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802014916831.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>该电路有以下特点：</p><ul><li>刚上电时，输出的状态是不确定的，只确定两个输出是相反的。</li><li>当其中一个输出为 1 时，输出状态立刻确定，见上面真值表。</li><li>当两个输出都为 0 时，输出状态保持不变。</li><li>当两个输出都为 1 时，输出都为 0，则无法通过单个输出判断状态，此时触发器状态不确定 (应避免此情况)。</li></ul><h2 id="门控-sr-锁存器" tabindex="-1"><a class="header-anchor" href="#门控-sr-锁存器"><span>门控 SR 锁存器</span></a></h2><blockquote><p>添加一个 EN，作为锁存功能 (这样做的目的是方便对锁存功能进行统一管理)。</p></blockquote><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802083305833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="d-锁存器" tabindex="-1"><a class="header-anchor" href="#d-锁存器"><span>D 锁存器</span></a></h2><blockquote><p>抛弃掉 RS 的锁存功能，R 和 S 总是相反的，将 D 接到 S 端，D 取反接到 R 端，两个输入合成一个输入，就构成了 D 触发器。</p></blockquote><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802083532961.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="d-边沿触发器" tabindex="-1"><a class="header-anchor" href="#d-边沿触发器"><span>D 边沿触发器</span></a></h2><blockquote><p>在上升沿存数</p></blockquote><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802084625996.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决初始状态问题" tabindex="-1"><a class="header-anchor" href="#解决初始状态问题"><span>解决初始状态问题</span></a></h4><blockquote><p>上面的不管是 RS 触发器还是 D 触发器还是 D 边沿触发器，都存在刚上电时状态不确定的情况，因此，需要添加设置其初始状态的功能。</p></blockquote><h2 id="t-触发器" tabindex="-1"><a class="header-anchor" href="#t-触发器"><span>T 触发器</span></a></h2><blockquote><p>T 触发器的 T 的意思是 Toggle，即翻转，如果说 D 边沿触发器是一个周期做一个动作，T 触发器就是一个周期翻转一次状态 (具体的动作)，原理就是把输出的非再接入到输入。</p></blockquote><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802102054843.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="计数器" tabindex="-1"><a class="header-anchor" href="#计数器"><span>计数器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802174836575.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三态门" tabindex="-1"><a class="header-anchor" href="#三态门"><span>三态门</span></a></h2><p>总线冲突问题：如果将多个<code>存储器</code>连到一起做数据交换，那么就会存在一个输入会连到多个输出的问题，就会发生数据冲突，那么有没有办法在需要数据交换时将两个寄存器单独连接在一起。这个办法就是三态门。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802112732865.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1byte-寄存器" tabindex="-1"><a class="header-anchor" href="#_1byte-寄存器"><span>1byte 寄存器</span></a></h2><ul><li>端口 S 仅做比较有三态门和无三态门时的区别，实际并无此端口</li><li>当 W 使能时，和时钟信号一起作用，可以将存储器输入写到存储器输出</li><li>当 R 使能时，三态门连通，存储器输出连到寄存器输出；当 R 不使能时，寄存器输出处于高阻态。</li></ul><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802140610237.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Set：置 1</p><p>Clear：清零</p><p>WSignal：写时钟信号</p><p>W：允许写</p><p>R：允许读</p><h2 id="_8x1byte-存储器" tabindex="-1"><a class="header-anchor" href="#_8x1byte-存储器"><span>8x1byte 存储器</span></a></h2><blockquote><p>上面提到的 D 边沿触发器可以在上升沿中将输入写入输出，利用这样的功能我们可以实现一个<code>单字节存储器</code>。</p></blockquote><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802145658222.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>功能：通过 Clear 清 0，Pre 置 1，在 DI 端输入 8 位数据，给 CP 一个上升沿，DI 数据就被写入到 DO 上</p><p>Din：输入</p><p>Clear：全部清零</p><p>Set：全部置 1</p><p>WSignal：写信号</p><p>Rin：写允许</p><p>Win：读允许</p><p>Ain：控制选择哪个寄存器</p><h2 id="_8x2byte-存储器" tabindex="-1"><a class="header-anchor" href="#_8x2byte-存储器"><span>8x2byte 存储器</span></a></h2><p>位扩展法</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802151705110.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_16x1byte-存储器" tabindex="-1"><a class="header-anchor" href="#_16x1byte-存储器"><span>16x1byte 存储器</span></a></h2><p>字扩展法</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802160225539.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改寄存器-将读写位合一" tabindex="-1"><a class="header-anchor" href="#修改寄存器-将读写位合一"><span>修改寄存器：将读写位合一</span></a></h2><h4 id="同时读写的问题" tabindex="-1"><a class="header-anchor" href="#同时读写的问题"><span>同时读写的问题</span></a></h4><p>可以参考 D 触发器中 Reset 和 Set 不能同时为 1 的处理逻辑。将输入从 R 和 W，调整位 WE，表示写启用。</p><h4 id="接入片选信号" tabindex="-1"><a class="header-anchor" href="#接入片选信号"><span>接入片选信号</span></a></h4><p>将片选信号作为输入，作为 3 态门的输入条件之一。</p><h3 id="修改-1byte-寄存器" tabindex="-1"><a class="header-anchor" href="#修改-1byte-寄存器"><span>修改 1byte 寄存器</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802163248245.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>WE：WE=1，写有效。WE=0，读有效。</p><p>CS：片选，CS=1 芯片才有效。</p><h3 id="修改-8x1byte-存储器" tabindex="-1"><a class="header-anchor" href="#修改-8x1byte-存储器"><span>修改 8x1Byte 存储器</span></a></h3><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802173231036.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改-8x2byte-存储器" tabindex="-1"><a class="header-anchor" href="#修改-8x2byte-存储器"><span>修改 8x2Byte 存储器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802173345966.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改-16x1byte-存储器" tabindex="-1"><a class="header-anchor" href="#修改-16x1byte-存储器"><span>修改 16x1Byte 存储器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802201020476.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于 Ain 需要逐步增加，所以改成计数器</p><h2 id="修改计数器" tabindex="-1"><a class="header-anchor" href="#修改计数器"><span>修改计数器</span></a></h2><p>增加一个开关</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230802175449022.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="pc" tabindex="-1"><a class="header-anchor" href="#pc"><span>PC</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803111931771.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>En=1，为计数</p><p>En=0，为写入</p><h2 id="alu-改进" tabindex="-1"><a class="header-anchor" href="#alu-改进"><span>ALU 改进</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803162929507.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>PSW 第 0 位为加减溢出位，第 1 位为 0 检测位。第 2 位为结果奇偶位。</p><h2 id="pc-改进" tabindex="-1"><a class="header-anchor" href="#pc-改进"><span>PC 改进</span></a></h2><p>将改进的 ALU 放进 PC</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803164019457.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改寄存器" tabindex="-1"><a class="header-anchor" href="#修改寄存器"><span>修改寄存器</span></a></h2><p>合成一位</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803201000483.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改存储器" tabindex="-1"><a class="header-anchor" href="#修改存储器"><span>修改存储器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803201905681.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改-pc" tabindex="-1"><a class="header-anchor" href="#修改-pc"><span>修改 PC</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803202219360.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="内存控制器" tabindex="-1"><a class="header-anchor" href="#内存控制器"><span>内存控制器</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230804122350991.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="接到总线上" tabindex="-1"><a class="header-anchor" href="#接到总线上"><span>接到总线上</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230804122516297.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="把内存控制器内存移出去" tabindex="-1"><a class="header-anchor" href="#把内存控制器内存移出去"><span>把内存控制器内存移出去</span></a></h2><p>控制存储器（CM）用于存放微程序，在 CPU 内部，用 ROM 实现</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230805201926459.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="重大修改" tabindex="-1"><a class="header-anchor" href="#重大修改"><span>重大修改</span></a></h2><p>RAM 为上升沿、异步读取。</p><p>RAM 时钟信号接入非门。</p><p>ROM 时钟信号不接非门。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230806140300387.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> os</span>
<span class="line">dirname<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span></span>
<span class="line">filename<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>dirname<span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line">WE_A <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">0</span></span>
<span class="line">CS_A <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">WE_B <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">2</span></span>
<span class="line">CS_B <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span></span>
<span class="line"></span>
<span class="line">WE_C <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">4</span></span>
<span class="line">CS_C <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">5</span></span>
<span class="line"></span>
<span class="line">ALU_ADD<span class="token operator">=</span><span class="token number">0</span></span>
<span class="line">ALU_SUB<span class="token operator">=</span><span class="token number">2</span><span class="token operator">**</span><span class="token number">6</span></span>
<span class="line">ALU_OUT <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">7</span></span>
<span class="line"></span>
<span class="line">WE_M <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">8</span></span>
<span class="line">CS_M <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">9</span></span>
<span class="line"></span>
<span class="line">CS_PC <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">10</span></span>
<span class="line">WE_PC <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">11</span></span>
<span class="line">EN_PC <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">12</span></span>
<span class="line"></span>
<span class="line">HLT <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">15</span></span>
<span class="line"></span>
<span class="line">micro <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    CS_M<span class="token operator">|</span>CS_A<span class="token operator">|</span>WE_A<span class="token operator">|</span>WE_PC<span class="token operator">|</span>EN_PC<span class="token operator">|</span>CS_PC<span class="token punctuation">,</span><span class="token comment">#将内存读入寄存器 A</span></span>
<span class="line">    CS_M<span class="token operator">|</span>CS_B<span class="token operator">|</span>WE_B<span class="token operator">|</span>WE_PC<span class="token operator">|</span>EN_PC<span class="token operator">|</span>CS_PC<span class="token punctuation">,</span><span class="token comment">#将内存读入寄存器 B</span></span>
<span class="line">    ALU_OUT<span class="token operator">|</span>CS_C<span class="token operator">|</span>WE_C<span class="token punctuation">,</span><span class="token comment">#alu 写入寄存器 C</span></span>
<span class="line">    CS_C<span class="token operator">|</span>WE_M<span class="token operator">|</span>CS_M<span class="token operator">|</span>WE_PC<span class="token operator">|</span>EN_PC<span class="token operator">|</span>CS_PC<span class="token punctuation">,</span><span class="token comment">#写入内存</span></span>
<span class="line">    HLT</span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;micro.bin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">for</span> var <span class="token keyword">in</span> micro<span class="token punctuation">:</span></span>
<span class="line">        byte <span class="token operator">=</span> var<span class="token punctuation">.</span>to_bytes<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> byteorder<span class="token operator">=</span><span class="token string">&#39;little&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>byte<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">,</span> byte<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;生成成功&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># print((CS_M|CS_A|WE_A).to_bytes(2,&#39;big&#39;))</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-alu" tabindex="-1"><a class="header-anchor" href="#修改-alu"><span>修改 ALU</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230803202356602.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="制作-5-32-译码器" tabindex="-1"><a class="header-anchor" href="#制作-5-32-译码器"><span>制作 5-32 译码器</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> os</span>
<span class="line">dirname<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span></span>
<span class="line">filename<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>dirname<span class="token punctuation">,</span><span class="token string">&#39;532decoder.bin&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span><span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">for</span> var <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        value<span class="token operator">=</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span>var</span>
<span class="line">        result<span class="token operator">=</span>value<span class="token punctuation">.</span>to_bytes<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span>byteorder<span class="token operator">=</span><span class="token string">&#39;little&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230806161110915.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_4-个-8-位异或门做成-32-位异或门" tabindex="-1"><a class="header-anchor" href="#_4-个-8-位异或门做成-32-位异或门"><span>4 个 8 位异或门做成 32 位异或门</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230806161226689.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="将寄存器-cs-we-合并成-io" tabindex="-1"><a class="header-anchor" href="#将寄存器-cs-we-合并成-io"><span>将寄存器 CS/WE 合并成 IO</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230806190831670.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="cpu-框架" tabindex="-1"><a class="header-anchor" href="#cpu-框架"><span>CPU 框架</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230806194632771.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu"><span>CPU</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20230807145914466.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,131)]))}const o=s(i,[["render",p],["__file","081.html.vue"]]),r=JSON.parse('{"path":"/computerOrganization/081.html","title":"8.1 从零造一个计算机","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.半加器","slug":"_1-半加器","link":"#_1-半加器","children":[]},{"level":2,"title":"2.一位全加器","slug":"_2-一位全加器","link":"#_2-一位全加器","children":[]},{"level":2,"title":"8 位全加器","slug":"_8-位全加器","link":"#_8-位全加器","children":[]},{"level":2,"title":"8 位取反器","slug":"_8-位取反器","link":"#_8-位取反器","children":[]},{"level":2,"title":"SR 锁存器","slug":"sr-锁存器","link":"#sr-锁存器","children":[]},{"level":2,"title":"门控 SR 锁存器","slug":"门控-sr-锁存器","link":"#门控-sr-锁存器","children":[]},{"level":2,"title":"D 锁存器","slug":"d-锁存器","link":"#d-锁存器","children":[]},{"level":2,"title":"D 边沿触发器","slug":"d-边沿触发器","link":"#d-边沿触发器","children":[]},{"level":2,"title":"T 触发器","slug":"t-触发器","link":"#t-触发器","children":[]},{"level":2,"title":"计数器","slug":"计数器","link":"#计数器","children":[]},{"level":2,"title":"三态门","slug":"三态门","link":"#三态门","children":[]},{"level":2,"title":"1byte 寄存器","slug":"_1byte-寄存器","link":"#_1byte-寄存器","children":[]},{"level":2,"title":"8x1byte 存储器","slug":"_8x1byte-存储器","link":"#_8x1byte-存储器","children":[]},{"level":2,"title":"8x2byte 存储器","slug":"_8x2byte-存储器","link":"#_8x2byte-存储器","children":[]},{"level":2,"title":"16x1byte 存储器","slug":"_16x1byte-存储器","link":"#_16x1byte-存储器","children":[]},{"level":2,"title":"修改寄存器：将读写位合一","slug":"修改寄存器-将读写位合一","link":"#修改寄存器-将读写位合一","children":[{"level":3,"title":"修改 1byte 寄存器","slug":"修改-1byte-寄存器","link":"#修改-1byte-寄存器","children":[]},{"level":3,"title":"修改 8x1Byte 存储器","slug":"修改-8x1byte-存储器","link":"#修改-8x1byte-存储器","children":[]}]},{"level":2,"title":"修改 8x2Byte 存储器","slug":"修改-8x2byte-存储器","link":"#修改-8x2byte-存储器","children":[]},{"level":2,"title":"修改 16x1Byte 存储器","slug":"修改-16x1byte-存储器","link":"#修改-16x1byte-存储器","children":[]},{"level":2,"title":"修改计数器","slug":"修改计数器","link":"#修改计数器","children":[]},{"level":2,"title":"PC","slug":"pc","link":"#pc","children":[]},{"level":2,"title":"ALU 改进","slug":"alu-改进","link":"#alu-改进","children":[]},{"level":2,"title":"PC 改进","slug":"pc-改进","link":"#pc-改进","children":[]},{"level":2,"title":"修改寄存器","slug":"修改寄存器","link":"#修改寄存器","children":[]},{"level":2,"title":"修改存储器","slug":"修改存储器","link":"#修改存储器","children":[]},{"level":2,"title":"修改 PC","slug":"修改-pc","link":"#修改-pc","children":[]},{"level":2,"title":"内存控制器","slug":"内存控制器","link":"#内存控制器","children":[]},{"level":2,"title":"接到总线上","slug":"接到总线上","link":"#接到总线上","children":[]},{"level":2,"title":"把内存控制器内存移出去","slug":"把内存控制器内存移出去","link":"#把内存控制器内存移出去","children":[]},{"level":2,"title":"重大修改","slug":"重大修改","link":"#重大修改","children":[]},{"level":2,"title":"修改 ALU","slug":"修改-alu","link":"#修改-alu","children":[]},{"level":2,"title":"制作 5-32 译码器","slug":"制作-5-32-译码器","link":"#制作-5-32-译码器","children":[]},{"level":2,"title":"4 个 8 位异或门做成 32 位异或门","slug":"_4-个-8-位异或门做成-32-位异或门","link":"#_4-个-8-位异或门做成-32-位异或门","children":[]},{"level":2,"title":"将寄存器 CS/WE 合并成 IO","slug":"将寄存器-cs-we-合并成-io","link":"#将寄存器-cs-we-合并成-io","children":[]},{"level":2,"title":"CPU 框架","slug":"cpu-框架","link":"#cpu-框架","children":[]},{"level":2,"title":"CPU","slug":"cpu","link":"#cpu","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"computerOrganization/081.md"}');export{o as comp,r as data};
