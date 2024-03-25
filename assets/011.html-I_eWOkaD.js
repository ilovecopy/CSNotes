import{_ as n,o as i,c as e,a as s}from"./app-XWLI5M5X.js";const a={},l=s(`<h1 id="单例模式-饿汉式" tabindex="-1"><a class="header-anchor" href="#单例模式-饿汉式"><span>单例模式 - 饿汉式</span></a></h1><p>类加载时创建。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SingleTon01 {
    public static void main(String[] args) {
        GirlFriend xh = GirlFriend.getInstance();
        GirlFriend xb = GirlFriend.getInstance();
        System.out.println(xh);
        System.out.println(xb);
        System.out.println(xh == xb);//true
    }
}

class GirlFriend {
    private String name;
    private static GirlFriend gf = new GirlFriend(&quot;小红&quot;);

    private GirlFriend(String name) {
        this.name = name;
    }

    public static GirlFriend getInstance() {
        return gf;
    }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了解决单例模式饿汉式创建构造方法没有使用，出现了懒汉式。</p><h2 id="懒汉式" tabindex="-1"><a class="header-anchor" href="#懒汉式"><span>懒汉式</span></a></h2><p>使用时创建。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class SingleTon02 {
    public static void main(String[] args) {
//        System.out.println(Cat.n1 );
        Cat instance=Cat.getInstance();
        System.out.println(instance);

        Cat instance2=Cat.getInstance();
        System.out.println(instance2);
    }
}

class Cat {
    private String name;
    public static int n1 = 999;
    private static Cat cat;

    private Cat(String name) {
        System.out.println(&quot;构造器调用&quot;);
        this.name = name;
    }

    public static Cat getInstance() {
        if (cat == null) {
            cat = new Cat(&quot;小可爱&quot;);
        }
        return cat;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[l];function d(r,v){return i(),e("div",null,t)}const u=n(a,[["render",d],["__file","011.html.vue"]]),m=JSON.parse('{"path":"/java/011.html","title":"单例模式 - 饿汉式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"懒汉式","slug":"懒汉式","link":"#懒汉式","children":[]}],"git":{"updatedTime":1704512827000},"filePathRelative":"java/011.md"}');export{u as comp,m as data};
