import{_ as s,c as e,a as n,o as i}from"./app-DKkA6jZv.js";const l={};function p(c,a){return i(),e("div",null,a[0]||(a[0]=[n(`<h1 id="_8-2-事务" tabindex="-1"><a class="header-anchor" href="#_8-2-事务"><span>8.2 事务</span></a></h1><h2 id="事务的起源" tabindex="-1"><a class="header-anchor" href="#事务的起源"><span>事务的起源</span></a></h2><p>小明向小李发了一个 10 元微信红包，小李收下了。在现实世界中，可能大家都会觉得，小明 -10 元，小李 +10 元，但是有没有可能，小李没收到钱，小明却 -10 元呢？为了保证公平性，+10 元和 -10 元要么都进行，要么都不执行。</p><h3 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性"><span>原子性</span></a></h3><h3 id="隔离性" tabindex="-1"><a class="header-anchor" href="#隔离性"><span>隔离性</span></a></h3><p>就像操作系统中所说，进程具有异步性，和数据库中的事务正好相反。</p><h2 id="事务的不同状态" tabindex="-1"><a class="header-anchor" href="#事务的不同状态"><span>事务的不同状态</span></a></h2><p>活动的（active）：</p><p>部分提交的（partially commited）：事务操作完成了，但数据所造成的影响还没刷新到磁盘。</p><p>失败的（failed）：</p><p>中止的（aborted）：回滚到了执行事务之前的状态，相当于什么都没做。</p><p>提交的（commited）：修改的数据刷新到磁盘</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/事务状态转移图.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="事务的四种隔离级别" tabindex="-1"><a class="header-anchor" href="#事务的四种隔离级别"><span>事务的四种隔离级别</span></a></h2><p>串行化（SERIALIZABLE）：当串行化事务读取某些数据后，这些数据将不能被其他事务更改，但可以被读取，直到本事务结束。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre><code class="language-mysql"><span class="line">SET SESSION TRANSACTION ISOLATION LEVEL SERIALIZABLE ;</span>
<span class="line">START TRANSACTION ;</span>
<span class="line">SELECT * FROM TIME WHERE A = 1;</span>
<span class="line">DO SLEEP(7);</span>
<span class="line">COMMIT;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre><code class="language-mysql"><span class="line">SELECT * FROM TIME WHERE A=&#39;1&#39;;</span>
<span class="line">UPDATE TIME SET B=&#39;1000&#39; WHERE A=&#39;1&#39;;</span>
<span class="line">SELECT &#39;已将B设为1000&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/串行化.drawio (2).png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可重复读（REPEATABLE READ）:串行化读取数据后，会阻止其他事务更改这些数据，而可重复读允许其他事务修改数据，但不可见。</p><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre><code class="language-mysql"><span class="line">SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;</span>
<span class="line">START TRANSACTION ;</span>
<span class="line">SELECT * FROM TIME WHERE A = 1;</span>
<span class="line">DO SLEEP(7);</span>
<span class="line">SELECT * FROM TIME WHERE A = 1;</span>
<span class="line">COMMIT;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-mysql line-numbers-mode" data-highlighter="prismjs" data-ext="mysql"><pre><code class="language-mysql"><span class="line">UPDATE TIME SET B=&#39;1000&#39; WHERE A=&#39;1&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/可重复读.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>读已提交：在读已提交事务中，你可以读取到，其他事务对数据已经提交的更改，但会忽视其他事务未提交的更改，以确保读取的数据的合理性。</p><p>比如，某个用于修改用户姓名的事务，当用户姓名合理时，该事务提交，不合理时，事务将执行回滚。我们可以使用读已提交事务，只读取上述事务提交的更改，以确保读取到的用户姓名始终是合理的。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">SET SESSION TRANSACTION ISOLATION LEVEL  READ COMMITTED ;</span>
<span class="line">START TRANSACTION ;</span>
<span class="line">SELECT B FROM TIME WHERE A = 1;</span>
<span class="line">COMMIT;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;</span>
<span class="line">START TRANSACTION ;</span>
<span class="line">UPDATE TIME SET B=1000 WHERE A=1;</span>
<span class="line">SELECT &#39;B设为1000&#39;;</span>
<span class="line">DO SLEEP(7);</span>
<span class="line"></span>
<span class="line">COMMIT ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/读已提交.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>读未提交：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">SET SESSION TRANSACTION ISOLATION LEVEL  READ UNCOMMITTED ;</span>
<span class="line">START TRANSACTION ;</span>
<span class="line">SELECT B FROM TIME WHERE A = 1;</span>
<span class="line">COMMIT;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;</span>
<span class="line">START TRANSACTION ;</span>
<span class="line">UPDATE TIME SET B=1000 WHERE A=1;</span>
<span class="line">SELECT &#39;B设为1000&#39;;</span>
<span class="line">DO SLEEP(7);</span>
<span class="line"></span>
<span class="line">ROLLBACK ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/读未提交.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,31)]))}const d=s(l,[["render",p]]),r=JSON.parse('{"path":"/database/082.html","title":"8.2 事务","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":5,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"cecc4588f2111cb0e8b0c498809c67f21d42ec83","time":1716480754000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"0951367e0d815b803f7dcc0a07d29f463df6fbbf","time":1715524248000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"26fca5d87b4817d65ef662742dc693b8c515bbcf","time":1715522683000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"352c8431a131d18c32212ef9604f50ec887dc6f5","time":1706326003000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"database/082.md"}');export{d as comp,r as data};
