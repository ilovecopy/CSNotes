import{_ as a,c as s,b as e,o as t}from"./app-CbCHZGY0.js";const l={};function i(c,n){return t(),s("div",null,n[0]||(n[0]=[e(`<h1 id="自定义-hook-的封装原则" tabindex="-1"><a class="header-anchor" href="#自定义-hook-的封装原则"><span>自定义 Hook 的封装原则</span></a></h1><p>组件=页面 UI</p><p>Hook=逻辑工具</p><h2 id="原则-1-必须以-use-开头" tabindex="-1"><a class="header-anchor" href="#原则-1-必须以-use-开头"><span>原则 1:必须以 use 开头</span></a></h2><h2 id="原则-2-只复用逻辑-不写-ui" tabindex="-1"><a class="header-anchor" href="#原则-2-只复用逻辑-不写-ui"><span>原则 2:只复用逻辑，不写 UI</span></a></h2><h2 id="原则-3-通过参数输入-通过-return-输出" tabindex="-1"><a class="header-anchor" href="#原则-3-通过参数输入-通过-return-输出"><span>原则 3:通过参数输入，通过 return 输出</span></a></h2><h2 id="原则-4-返回数据、状态和方法" tabindex="-1"><a class="header-anchor" href="#原则-4-返回数据、状态和方法"><span>原则 4:返回数据、状态和方法</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function useCounter() {</span>
<span class="line">  const [count, setCount] = useState(0);</span>
<span class="line"></span>
<span class="line">  const add = () =&gt; setCount(count + 1);</span>
<span class="line">  const minus = () =&gt; setCount(count - 1);</span>
<span class="line"></span>
<span class="line">  return { count, add, minus };</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">function App() {</span>
<span class="line">  const { count, add, minus } = useCounter();</span>
<span class="line"></span>
<span class="line">  return (</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">      &lt;p&gt;{count}&lt;/p&gt;</span>
<span class="line">      &lt;button onClick={add}&gt;+&lt;/button&gt;</span>
<span class="line">      &lt;button onClick={minus}&gt;-&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  );</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,9)]))}const p=a(l,[["render",i]]),r=JSON.parse('{"path":"/react/007.html","title":"自定义 Hook 的封装原则","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773234902000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":2,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"4e40a7bbe4a21f09e70ec106b71c6566afe66820","time":1773234902000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"71f8633ab8e440e04541d1ab687c7afde3d4ff6b","time":1773234780000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"react/007.md"}');export{p as comp,r as data};
