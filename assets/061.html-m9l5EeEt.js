import{_ as i,o as e,c as n,a}from"./app-XWLI5M5X.js";const s={},t=a(`<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h1><p>所谓接口，就是将一些没有实现的方法封装到一起，到某个类要使用的时候，在根据具体情况把这些方法写出来。</p><p>接口中所有方法都自动是 public 的。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface Person {
		//常量
    String NAME = &quot;XiaoMing&quot;;
		//抽象方法
    int getAge();
		//静态方法
    static String isBoy(String name) {
        return name;
    }
		//默认方法
    default void say() {
        System.out.println(&quot;say&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface abstract_.Person {
//
  public static final java.lang.String NAME;
  
  public abstract int getAge();
  
  public static java.lang.String isBoy(java.lang.String);
  
  public void say();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）接口中定义的变量会自动加上 <code>public static final</code>，所以接口中定义的是常量。</p><p>（2）接口中定义的方法会自动加上<code>public static </code>，所以接口中不能定义私有方法。</p><p>（3）接口中静态方法会自动加上<code>public</code>。</p><p>（4）接口中默认方法会改成<code>public</code>。</p><p><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20231228222732717.png" alt="image-20231228222732717"></p><div class="custom-container tip"><p class="custom-container-title">继承和抽象类区别</p><p>子类继承父类，就自动拥有父类的功。如果子类需要扩展功能，可以通过实现接口获得。实现接口是对 Java 单继承机制的补充。</p></div>`,11),l=[t];function d(c,r){return e(),n("div",null,l)}const u=i(s,[["render",d],["__file","061.html.vue"]]),o=JSON.parse('{"path":"/java/061.html","title":"接口","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1704512827000},"filePathRelative":"java/061.md"}');export{u as comp,o as data};
