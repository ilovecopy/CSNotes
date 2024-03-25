import{_ as n,o as a,c as s,a as t}from"./app-XWLI5M5X.js";const e={},i=t(`<h1 id="string-类" tabindex="-1"><a class="header-anchor" href="#string-类"><span>String 类</span></a></h1><p>String 类是个 final 类，不能被其他类继承。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;NU&quot;</span><span class="token punctuation">;</span>
        name <span class="token operator">=</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> v2<span class="token operator">=</span><span class="token punctuation">{</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;d&#39;</span><span class="token punctuation">;</span>
        value<span class="token operator">=</span>v2<span class="token punctuation">;</span><span class="token comment">//报错，因为 value 是 final 的，不能改地址。</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>String s = &quot;hdp&quot;;
String s = new String(&quot;qwe&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
        //a指向常量池中的&quot;abc&quot;
        String a = &quot;abc&quot;;
        String b = &quot;abc&quot;;
        //a和b的值相等
        System.out.println(a.equals(b));//true
        //a和b指向同一个对象
        System.out.println(a == b);//true
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public static void main(String[] args) {
        //a指向常量池中的&quot;abc&quot;
        String a = &quot;abc&quot;;
        String b = &quot;de&quot;;
        String c = a + b
        //StringBuilder sb = new StringBuilder();
        //sb.append(&quot;abc&quot;);
        /sb.append(&quot;de&quot;);
        //String c = sb.toString();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[i];function l(p,o){return a(),s("div",null,c)}const d=n(e,[["render",l],["__file","014.html.vue"]]),r=JSON.parse('{"path":"/java/014.html","title":"String 类","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1706439045000},"filePathRelative":"java/014.md"}');export{d as comp,r as data};
