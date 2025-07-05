import{_ as n,c as s,a as e,o as t}from"./app-DKkA6jZv.js";const p={};function l(c,a){return t(),s("div",null,a[0]||(a[0]=[e(`<h1 id="_1-14-string-类" tabindex="-1"><a class="header-anchor" href="#_1-14-string-类"><span>1.14 String 类</span></a></h1><p>String 类是个 final 类，不能被其他类继承。</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre><code class="language-java"><span class="line"> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;NU&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> v2<span class="token operator">=</span><span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;d&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        value<span class="token operator">=</span>v2<span class="token punctuation">;</span><span class="token comment">//报错，因为 value 是 final 的，不能改地址。</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">String s = &quot;hdp&quot;;</span>
<span class="line">String s = new String(&quot;qwe&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public static void main(String[] args) {</span>
<span class="line">        //a指向常量池中的&quot;abc&quot;</span>
<span class="line">        String a = &quot;abc&quot;;</span>
<span class="line">        String b = &quot;abc&quot;;</span>
<span class="line">        //a和b的值相等</span>
<span class="line">        System.out.println(a.equals(b));//true</span>
<span class="line">        //a和b指向同一个对象</span>
<span class="line">        System.out.println(a == b);//true</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public static void main(String[] args) {</span>
<span class="line">        //a指向常量池中的&quot;abc&quot;</span>
<span class="line">        String a = &quot;abc&quot;;</span>
<span class="line">        String b = &quot;de&quot;;</span>
<span class="line">        String c = a + b</span>
<span class="line">        //StringBuilder sb = new StringBuilder();</span>
<span class="line">        //sb.append(&quot;abc&quot;);</span>
<span class="line">        /sb.append(&quot;de&quot;);</span>
<span class="line">        //String c = sb.toString();</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,6)]))}const i=n(p,[["render",l]]),u=JSON.parse('{"path":"/java/014.html","title":"1.14 String 类","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1715523636000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":3,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d405288b6992f6c9f30808585bffd591002b72b7","time":1715523636000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"3c2e10441c021da9848fe807a05852361f936352","time":1706439045000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"fbb0fe45f35d2876af854aa52b07a709be99f78e","time":1706438934000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"java/014.md"}');export{i as comp,u as data};
