import{_ as s,c as a,b as i,o as e}from"./app-Dt3f-5Vu.js";const l={};function c(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="_1-11-单例模式-饿汉式" tabindex="-1"><a class="header-anchor" href="#_1-11-单例模式-饿汉式"><span>1.11 单例模式 - 饿汉式</span></a></h1><p>类加载时创建。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class SingleTon01 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        GirlFriend xh = GirlFriend.getInstance();</span>
<span class="line">        GirlFriend xb = GirlFriend.getInstance();</span>
<span class="line">        System.out.println(xh);</span>
<span class="line">        System.out.println(xb);</span>
<span class="line">        System.out.println(xh == xb);//true</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class GirlFriend {</span>
<span class="line">    private String name;</span>
<span class="line">    private static GirlFriend gf = new GirlFriend(&quot;小红&quot;);</span>
<span class="line"></span>
<span class="line">    private GirlFriend(String name) {</span>
<span class="line">        this.name = name;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public static GirlFriend getInstance() {</span>
<span class="line">        return gf;</span>
<span class="line">    }</span>
<span class="line"> }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决单例模式饿汉式创建构造方法没有使用，出现了懒汉式。</p><h2 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式"><span>懒汉式</span></a></h2><p>使用时创建。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public class SingleTon02 {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">//        System.out.println(Cat.n1 );</span>
<span class="line">        Cat instance=Cat.getInstance();</span>
<span class="line">        System.out.println(instance);</span>
<span class="line"></span>
<span class="line">        Cat instance2=Cat.getInstance();</span>
<span class="line">        System.out.println(instance2);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class Cat {</span>
<span class="line">    private String name;</span>
<span class="line">    public static int n1 = 999;</span>
<span class="line">    private static Cat cat;</span>
<span class="line"></span>
<span class="line">    private Cat(String name) {</span>
<span class="line">        System.out.println(&quot;构造器调用&quot;);</span>
<span class="line">        this.name = name;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public static Cat getInstance() {</span>
<span class="line">        if (cat == null) {</span>
<span class="line">            cat = new Cat(&quot;小可爱&quot;);</span>
<span class="line">        }</span>
<span class="line">        return cat;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const p=s(l,[["render",c],["__file","011.html.vue"]]),r=JSON.parse('{"path":"/java/011.html","title":"1.11 单例模式 - 饿汉式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"懒汉式","slug":"懒汉式","link":"#懒汉式","children":[]}],"git":{"updatedTime":1715523636000},"filePathRelative":"java/011.md"}');export{p as comp,r as data};