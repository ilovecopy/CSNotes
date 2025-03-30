import{_ as s,c as a,b as n,o as t}from"./app-C_1bF7bM.js";const l={};function i(p,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="react-基础事件绑定" tabindex="-1"><a class="header-anchor" href="#react-基础事件绑定"><span>React 基础事件绑定</span></a></h1><p>on+ 事件名称={事件处理程序}</p><p>箭头函数可以传递实参</p><h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate"><span>useState</span></a></h2><p>向组件添加一个状态变量</p><p>const [count,setCount]=useState(0)</p><p>useState 是一个函数，返回值是一个数组</p><p>数组中第一个参数是状态变量，第二个参数是 set 函数用来修改状态变量。</p><p>useState 的参数将作为 count 的初始值。</p><h2 id="状态不可变" tabindex="-1"><a class="header-anchor" href="#状态不可变"><span>状态不可变</span></a></h2><p>在 React 中，状态被认为是只读的，我们应该始终替换它，而不是修改它，直接修改状态不能引发视图更新。</p><h2 id="修改对象状态" tabindex="-1"><a class="header-anchor" href="#修改对象状态"><span>修改对象状态</span></a></h2><p>规则：对于对象类型的状态变量，应该始终传给 set 方法一个全新的对象来修改。</p><h2 id="受控表单绑定" tabindex="-1"><a class="header-anchor" href="#受控表单绑定"><span>受控表单绑定</span></a></h2><p>使用 useState 控制表单状态</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const [value ,setValue]=useState(&#39;&#39;)</span>
<span class="line"></span>
<span class="line">&lt;input</span>
<span class="line">	type=&quot;text&quot;</span>
<span class="line">	value={value}</span>
<span class="line">	onChange={(e)=&gt;setValue(e.target.value)}</span>
<span class="line">/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件传递" tabindex="-1"><a class="header-anchor" href="#组件传递"><span>组件传递</span></a></h2><p>父传子通过 props 传递。</p><p>使用 Context 机制跨层级组件通信。</p><p>1.使用 createContext 方法创建一个上下文对象 Ctx</p><p>2.在顶层组件 App 中通过 Ctx.Provider 组件提供数据</p><p>3.在底层组件 B 中通过 useContext 钩子函数获取消费数据</p><h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect"><span>useEffect</span></a></h2><p>在 react 组件中创建不是由事件引起，而是由渲染引起的操作。组件渲染完毕要和服务器要数据。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">useEffect(()=&gt;{})</span>
<span class="line">//函数内放要执行的操作</span>
<span class="line">//数组，空数组时，函数只会在组件渲染完毕之后执行一次</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useeffect-清除副作用" tabindex="-1"><a class="header-anchor" href="#useeffect-清除副作用"><span>useEffect 清除副作用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">useEffect(()=&gt;{</span>
<span class="line">//实现副作用操作逻辑</span>
<span class="line">  return ()=&gt;{</span>
<span class="line">//清除副作用</span>
<span class="line">  }</span>
<span class="line">},[])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般用于组件卸载时自动执行</p><h2 id="自定义-hook-函数" tabindex="-1"><a class="header-anchor" href="#自定义-hook-函数"><span>自定义 Hook 函数</span></a></h2><p>自定义 Hook 函数是以 use 打头的函数，通过自定义 Hook 函数可以实现逻辑的封装和复用。</p><p>1、声明以 use 打头的函数。</p><p>2、在函数体内封装可复用的逻辑。</p><p>3、把组件中用到的状态或者回调 return 出去。</p><p>4、在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用。</p>`,34)]))}const r=s(l,[["render",i],["__file","005.html.vue"]]),d=JSON.parse('{"path":"/react/005.html","title":"React 基础事件绑定","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"useState","slug":"usestate","link":"#usestate","children":[]},{"level":2,"title":"状态不可变","slug":"状态不可变","link":"#状态不可变","children":[]},{"level":2,"title":"修改对象状态","slug":"修改对象状态","link":"#修改对象状态","children":[]},{"level":2,"title":"受控表单绑定","slug":"受控表单绑定","link":"#受控表单绑定","children":[]},{"level":2,"title":"组件传递","slug":"组件传递","link":"#组件传递","children":[]},{"level":2,"title":"useEffect","slug":"useeffect","link":"#useeffect","children":[]},{"level":2,"title":"useEffect 清除副作用","slug":"useeffect-清除副作用","link":"#useeffect-清除副作用","children":[]},{"level":2,"title":"自定义 Hook 函数","slug":"自定义-hook-函数","link":"#自定义-hook-函数","children":[]}],"git":{"updatedTime":1742122607000},"filePathRelative":"react/005.md"}');export{r as comp,d as data};
