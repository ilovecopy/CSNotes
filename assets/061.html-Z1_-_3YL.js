import{_ as s,c as n,a as e,o as i}from"./app-DKkA6jZv.js";const t={};function l(c,a){return i(),n("div",null,a[0]||(a[0]=[e(`<h1 id="_6-1-接口" tabindex="-1"><a class="header-anchor" href="#_6-1-接口"><span>6.1 接口</span></a></h1><p>所谓接口，就是将一些没有实现的方法封装到一起，到某个类要使用的时候，在根据具体情况把这些方法写出来。</p><p>接口中所有方法都自动是 public 的。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public interface Person {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public interface abstract_.Person {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>（1）接口中定义的变量会自动加上 <code>public static final</code>，所以接口中定义的是常量。</p><p>（2）接口中定义的方法会自动加上<code>public static </code>，所以接口中不能定义私有方法。</p><p>（3）接口中静态方法会自动加上<code>public</code>。</p><p>（4）接口中默认方法会改成<code>public</code>。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20231228222732717.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">继承和抽象类区别</p><p>子类继承父类，就自动拥有父类的功能。如果子类需要扩展功能，可以通过实现接口获得。实现接口是对 Java 单继承机制的补充。</p></div><p>继承只能单继承，接口能有多个实现。</p>`,12)]))}const o=s(t,[["render",l]]),d=JSON.parse('{"path":"/java/061.html","title":"6.1 接口","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":4,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"d405288b6992f6c9f30808585bffd591002b72b7","time":1715523636000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"2d8b5820a6343911538b892ca32fc9be4667e4e1","time":1713370192000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"d50f40c04d659276f2a608aceee974004fef6574","time":1704512827000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"java/061.md"}');export{o as comp,d as data};
