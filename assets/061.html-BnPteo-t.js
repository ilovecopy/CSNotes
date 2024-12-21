import{_ as s,c as a,b as i,o as e}from"./app-Dt3f-5Vu.js";const l={};function t(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="_6-1-接口" tabindex="-1"><a class="header-anchor" href="#_6-1-接口"><span>6.1 接口</span></a></h1><p>所谓接口，就是将一些没有实现的方法封装到一起，到某个类要使用的时候，在根据具体情况把这些方法写出来。</p><p>接口中所有方法都自动是 public 的。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public interface Person {</span>
<span class="line">		//常量</span>
<span class="line">    String NAME = &quot;XiaoMing&quot;;</span>
<span class="line">		//抽象方法</span>
<span class="line">    int getAge();</span>
<span class="line">		//静态方法</span>
<span class="line">    static String isBoy(String name) {</span>
<span class="line">        return name;</span>
<span class="line">    }</span>
<span class="line">		//默认方法</span>
<span class="line">    default void say() {</span>
<span class="line">        System.out.println(&quot;say&quot;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public interface abstract_.Person {</span>
<span class="line">//</span>
<span class="line">  public static final java.lang.String NAME;</span>
<span class="line">  </span>
<span class="line">  public abstract int getAge();</span>
<span class="line">  </span>
<span class="line">  public static java.lang.String isBoy(java.lang.String);</span>
<span class="line">  </span>
<span class="line">  public void say();</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）接口中定义的变量会自动加上 <code>public static final</code>，所以接口中定义的是常量。</p><p>（2）接口中定义的方法会自动加上<code>public static </code>，所以接口中不能定义私有方法。</p><p>（3）接口中静态方法会自动加上<code>public</code>。</p><p>（4）接口中默认方法会改成<code>public</code>。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20231228222732717.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">继承和抽象类区别</p><p>子类继承父类，就自动拥有父类的功能。如果子类需要扩展功能，可以通过实现接口获得。实现接口是对 Java 单继承机制的补充。</p></div><p>继承只能单继承，接口能有多个实现。</p>`,12)]))}const d=s(l,[["render",t],["__file","061.html.vue"]]),r=JSON.parse('{"path":"/java/061.html","title":"6.1 接口","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1720103859000},"filePathRelative":"java/061.md"}');export{d as comp,r as data};
