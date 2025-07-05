import{_ as s,c as a,a as p,o as t}from"./app-DKkA6jZv.js";const e={};function c(o,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="_2-3-同步与互斥" tabindex="-1"><a class="header-anchor" href="#_2-3-同步与互斥"><span>2.3 同步与互斥</span></a></h1><h2 id="_2-3-1-同步与互斥的概念" tabindex="-1"><a class="header-anchor" href="#_2-3-1-同步与互斥的概念"><span>2.3.1 同步与互斥的概念</span></a></h2><h3 id="_1-临界资源" tabindex="-1"><a class="header-anchor" href="#_1-临界资源"><span>1.临界资源</span></a></h3><p>一次只允许一个进程使用的资源称为临界资源</p><h3 id="_2-同步" tabindex="-1"><a class="header-anchor" href="#_2-同步"><span>2.同步</span></a></h3><p>为完成某种人//如果 S.L 该资源不够，该进程进入阻塞队列某些地方上协调它们的工作次序而等待、传递信息所产生的制约关系。</p><h3 id="_3-互斥" tabindex="-1"><a class="header-anchor" href="#_3-互斥"><span>3.互斥</span></a></h3><p>互斥也称间接制约关系</p><p>（1）空闲让进</p><p>（2）忙则等待</p><p>（3）有限等待</p><p>（4）让权等待//不一定实现</p><p>P 操作即 wait 操作，表示等待某种资源直到可用，若这种资源暂时不可用，则进程进入阻塞态，执行 P 操作时的进程处于运行态。</p><h2 id="_2-3-2-实现临界区互斥的基本方法" tabindex="-1"><a class="header-anchor" href="#_2-3-2-实现临界区互斥的基本方法"><span>2.3.2 实现临界区互斥的基本方法</span></a></h2><h3 id="_1-软件实现方法" tabindex="-1"><a class="header-anchor" href="#_1-软件实现方法"><span>1.软件实现方法</span></a></h3><p>算法一：单标志法</p><p>别人允许你上厕所，你才能上。</p><p>缺点：两个进程必须轮流进入临界区，如果一个进程不再进入临界区，则另一个进程也无法进入临界区，违背“空闲让进”。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/单标志法.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>算法二：双标志先检查法</p><p>如果所有人都不用厕所，则自己进去上锁。</p><p>缺点：可能两个人同时进入厕所</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/双标志法先检查.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>算法三：双标志法后检查</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/双标志法后检查.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>算法四：Peterson 算法</p><p>缺点：未确定让权等待</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/Peterson.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-硬件实现方法" tabindex="-1"><a class="header-anchor" href="#_2-硬件实现方法"><span>2.硬件实现方法</span></a></h3><p>（1）中断屏蔽方法</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">关中断；</span>
<span class="line">临界区；</span>
<span class="line">开中断；</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>（2）硬件指令方法</p><p>TestAndSet 指令</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">boolean <span class="token function">TestAndSet</span><span class="token punctuation">(</span>boolean <span class="token operator">*</span>lock<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    boolean old<span class="token punctuation">;</span></span>
<span class="line">    old <span class="token operator">=</span> <span class="token operator">*</span>lock<span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">*</span>lock <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> old<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token function">TestAndSet</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>lock<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//读出 lock 后把 lock 设置为 true</span></span>
<span class="line">进程的临界区代码段<span class="token punctuation">;</span></span>
<span class="line">lock<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">进程的其他代码<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>Swap 指令</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token function">Swap</span><span class="token punctuation">(</span>boolean <span class="token operator">*</span>a<span class="token punctuation">,</span>boolean <span class="token operator">*</span>b<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    boolean temp<span class="token punctuation">;</span></span>
<span class="line">    Temp<span class="token operator">=</span><span class="token operator">*</span>a<span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">*</span>a<span class="token operator">=</span><span class="token operator">*</span>b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">*</span>b<span class="token operator">=</span>temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">key<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">while</span><span class="token punctuation">(</span>key<span class="token operator">!=</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment">//如果 key 为 true</span></span>
<span class="line">    <span class="token function">Swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>lock<span class="token punctuation">,</span><span class="token operator">&amp;</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//检查时都上锁，直到 key 为 false，说明不上锁</span></span>
<span class="line">进程的临界区代码段<span class="token punctuation">;</span></span>
<span class="line">lock<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">进程的其他代码<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_2-3-3-互斥锁" tabindex="-1"><a class="header-anchor" href="#_2-3-3-互斥锁"><span>2.3.3 互斥锁</span></a></h2><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>available<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">;</span> <span class="token comment">//忙等待</span></span>
<span class="line">    available<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//获得锁</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    available<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>缺点：忙等待，进程时间片用完才下处理机。</p><p>需要连续循环忙等待的互斥锁，都可称为自旋锁。</p><h2 id="_2-3-4-信号量" tabindex="-1"><a class="header-anchor" href="#_2-3-4-信号量"><span>2.3.4 信号量</span></a></h2><table><thead><tr><th>信号量</th><th>互斥量</th><th>资源量</th></tr></thead><tbody><tr><td></td><td>1 表示临界区只允许一个进程进入</td><td>可用资源</td></tr><tr><td></td><td>0 表示临界区进入了一个进程，无等待</td><td>无可用资源</td></tr><tr><td></td><td>&lt;0 表示临界区有一个进程，有绝对值等待</td><td>&lt;0 表示资源用完，有绝对值等待</td></tr></tbody></table><h3 id="_1-整型信号量" tabindex="-1"><a class="header-anchor" href="#_1-整型信号量"><span>1.整型信号量</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token function">wait</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>S<span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    S<span class="token operator">=</span>S<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">signal</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    S<span class="token operator">=</span>S<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>缺点：未遵循让权等待。</p><h3 id="_2-记录型信号量" tabindex="-1"><a class="header-anchor" href="#_2-记录型信号量"><span>2.记录型信号量</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">typedef</span> <span class="token keyword">struct</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">struct</span> <span class="token class-name">process</span> <span class="token operator">*</span>L<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> semaphore<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span>semaphore S<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    S<span class="token punctuation">.</span>value<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>S<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token comment">//如果 S.L 该资源不够，该进程进入阻塞队列</span></span>
<span class="line">        add <span class="token keyword">this</span> process to S<span class="token punctuation">.</span>L<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">block</span><span class="token punctuation">(</span>S<span class="token punctuation">.</span>L<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">signal</span><span class="token punctuation">(</span>semaphore<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    S<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>S<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token comment">//如果 S.L 中还有等待该资源的进程被阻塞，唤醒一个进程</span></span>
<span class="line">        remove a process P from S<span class="token punctuation">.</span>L<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">wakeup</span><span class="token punctuation">(</span>P<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h3 id="_3-利用信号量实现同步" tabindex="-1"><a class="header-anchor" href="#_3-利用信号量实现同步"><span>3.利用信号量实现同步</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">semaphore S <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">P1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    x<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">V</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">P2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">P</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    y<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h3 id="_4-利用信号量实现进程互斥" tabindex="-1"><a class="header-anchor" href="#_4-利用信号量实现进程互斥"><span>4.利用信号量实现进程互斥</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">semophore S <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">P1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">P</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    进程P1的临界区<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">V</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">P2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">P</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    进程P2的临界区<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">V</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h2 id="_2-3-5-管程" tabindex="-1"><a class="header-anchor" href="#_2-3-5-管程"><span>2.3.5 管程</span></a></h2><h2 id="_2-3-6-经典同步问题" tabindex="-1"><a class="header-anchor" href="#_2-3-6-经典同步问题"><span>2.3.6 经典同步问题</span></a></h2><h3 id="_1-生产者-消费者问题" tabindex="-1"><a class="header-anchor" href="#_1-生产者-消费者问题"><span>1.生产者 - 消费者问题</span></a></h3><p>问题描述：一组生产者进程和一组消费者进程共享一个初始化为空、大小为 n 的缓冲区，只有缓冲区没满时，生产者才能把消息放入缓冲区，否则必须等待；只有缓冲区不空时，消费者才能从中取出消息，否则必须等待。由于缓冲区时临界资源，它只允许一个生产者放入消息，或一个消费者从中取出消息。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">semophore mutex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//临界区互斥信号量</span></span>
<span class="line">semophore empty <span class="token operator">=</span> n<span class="token punctuation">;</span> <span class="token comment">//空闲缓冲区</span></span>
<span class="line">semophore full <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">//缓冲区初始化为空</span></span>
<span class="line"><span class="token function">producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        produce an item in nextp<span class="token punctuation">;</span> <span class="token comment">//生产数据</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//获取空缓冲区单元</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//进入临界区</span></span>
<span class="line">        add nextp to buffer<span class="token punctuation">;</span>      <span class="token comment">//将数据放入缓冲区</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//离开缓冲区</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">//满缓冲区 +1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>full<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//获取满缓冲区单元</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">//进入临界区</span></span>
<span class="line">        remove an item from buffer<span class="token punctuation">;</span> <span class="token comment">//从缓冲区中取出数据</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">//离开缓冲区</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">//空缓冲区 +1</span></span>
<span class="line">        consume the item<span class="token punctuation">;</span>           <span class="token comment">//消费数据</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>同步的 P 操作一定要放在互斥的 P 操作前。</p><h3 id="_2-多生产者-多消费者问题" tabindex="-1"><a class="header-anchor" href="#_2-多生产者-多消费者问题"><span>2.多生产者 - 多消费者问题</span></a></h3><p>问题描述：桌子上有一个盘子，每次只能向其中放入一个水果。爸爸专向盘子中放苹果，妈妈专向盘子中放橘子，儿子专吃橘子，女儿专吃苹果。只有盘子为空时，爸爸或妈妈才可向盘子中放一个水果。只有当盘子中有自己需要的水果时，儿子或女儿才能拿出来。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">semophare plate <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> apple <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> orange <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">dad</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        prepare an apple<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>plate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        put the apple on the plate<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>apple<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">mom</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        prepare an orange<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>plate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        put the orange on the plate<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>orange<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>orange<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        take an orange from the plate<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>plate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        eat the orange<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">daughter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>apple<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        take an apple from the plate<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>plate<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        eat the apple<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h3 id="_3-读者-写者问题" tabindex="-1"><a class="header-anchor" href="#_3-读者-写者问题"><span>3.读者 - 写者问题</span></a></h3><p>问题描述：有读者和写者两组并发进程，共享一个文件，当两个或以上的读进程同时访问共享数据时不会产生副作用，但若某个写进程和其他进程同时访问共享数据时则可能导致数据不一致的错误。因此要求：1.允许多个读者可以同时对文件执行读操作。2.只允许一个写着往文件中写信息。3.任一写者在完成写操作之前不允许其他读者或写者工作。4.写者执行写操作之前，应让已有的读者和写者全部退出。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>       <span class="token comment">//记录当前读者数量</span></span>
<span class="line">semaphore mutex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//用于保护更新 count 变量时的互斥</span></span>
<span class="line">semaphore rw <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>    <span class="token comment">//用于保证读者和写者互斥地访问文件</span></span>
<span class="line">semaphore w<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//用于实现“写优先”</span></span>
<span class="line"><span class="token function">writer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在无写进程请求时进入</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//互斥访问共享文件</span></span>
<span class="line">        writing<span class="token punctuation">;</span> <span class="token comment">//写入</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//释放共享文件</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//恢复对共享文件的访问</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">reader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//互斥访问 count 变量</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">P</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span></span>
<span class="line">        count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//释放互斥变量 count</span></span>
<span class="line">        reading<span class="token punctuation">;</span>  <span class="token comment">//读取</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//互斥访问 count 变量</span></span>
<span class="line">        count<span class="token operator">--</span><span class="token punctuation">;</span><span class="token comment">//读写计数器减 1</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token comment">//当最后一个读进程读完共享文件</span></span>
<span class="line">            <span class="token function">V</span><span class="token punctuation">(</span>rw<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//允许写进程写</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放互斥变量 count</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h3 id="_4-哲学家进餐问题" tabindex="-1"><a class="header-anchor" href="#_4-哲学家进餐问题"><span>4.哲学家进餐问题</span></a></h3><p>问题描述：一张圆桌边上坐着 5 名哲学家，没两名哲学家之间的桌上摆一根筷子，两根筷子中间时一碗米饭，哲学家们只思考和吃饭。哲学家思考时不影响他人。只有当哲学家饥饿时，才试图拿起左、右两根筷子（一根一根地拿起）。若筷子已在他人手上，则需要等待。饥饿的哲学家只有同时拿到了两根筷子才可以开始进餐。进餐完毕后，放下筷子进行思考。</p><p>解决方法：同时取左右两边筷子</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line">semaphore chopstick<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">semaphore mutex <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//设置取筷子的信号量</span></span>
<span class="line"><span class="token function">Pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">do</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">//在取筷子前获得互斥量</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//取左边筷子</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//取右边筷子</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">//释放筷子的信号量</span></span>
<span class="line">        eat<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">//放回左边筷子</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>chopstick<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//放回右边筷子</span></span>
<span class="line">        think<span class="token punctuation">;</span>                     <span class="token comment">//思考</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><h3 id="_5-吸烟者问题" tabindex="-1"><a class="header-anchor" href="#_5-吸烟者问题"><span>5.吸烟者问题</span></a></h3><p>问题描述：假设一个系统有三个抽烟者进程和一个供应者进程。每个抽烟者不停地卷烟并抽掉它，但要卷起并抽掉一只烟，抽烟者需要有三种材料：烟草、纸和胶水。三个抽烟者中，第一个拥有烟草，第二个拥有纸，第三个拥有胶水。供应者每次提供两种材料，一个抽烟者抽掉，并告诉供应者已完成，此时供应者就会放另外两种材料在桌子上。</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp"><pre><code class="language-cpp"><span class="line"><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>          <span class="token comment">//存储随机数</span></span>
<span class="line">semaphore offer1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//定义信号量对应烟草和纸组合的资源</span></span>
<span class="line">semaphore offer2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//定义信号量对应烟草和胶水组合的资源</span></span>
<span class="line">semaphore offer3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//定义信号量对应纸和胶水组合的资源</span></span>
<span class="line">semaphore finish <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">//定义信号量表示抽烟是否完成</span></span>
<span class="line">process <span class="token function">P1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        num<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        num <span class="token operator">=</span> num <span class="token operator">%</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">V</span><span class="token punctuation">(</span>offer1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token function">V</span><span class="token punctuation">(</span>offer2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">else</span></span>
<span class="line">            <span class="token function">V</span><span class="token punctuation">(</span>offer3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        任一两种材料放在桌子上<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>finish<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">process <span class="token function">P2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>offer3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        拿纸和胶水，卷成烟，抽掉<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>finish<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">process <span class="token function">P3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>offer2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        拿烟草和胶水，卷成烟，抽掉<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>finish<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">process <span class="token function">P4</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">P</span><span class="token punctuation">(</span>offer1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        拿纸和烟草，卷成烟，抽掉<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">V</span><span class="token punctuation">(</span>finish<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,70)]))}const u=s(e,[["render",c]]),i=JSON.parse('{"path":"/os/023.html","title":"2.3 同步与互斥","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":2,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"2be1877336d36add6192906de44e87ab5b1df4ec","time":1698592164000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"os/023.md"}');export{u as comp,i as data};
