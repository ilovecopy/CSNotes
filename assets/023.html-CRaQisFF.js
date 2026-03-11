import{_ as a,c as e,b as n,o as l}from"./app-CbCHZGY0.js";const i={};function t(p,s){return l(),e("div",null,s[0]||(s[0]=[n(`<h1 id="_2-3-装饰器模式" tabindex="-1"><a class="header-anchor" href="#_2-3-装饰器模式"><span>2.3 装饰器模式</span></a></h1><p>装饰器的本质是包装一个已有对象，并增强它的行为。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public abstract class Beverage {</span>
<span class="line">    public abstract double cost();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public abstract class ToppingDecorator extends Beverage {</span>
<span class="line">   public abstract double cost();</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public class FruitTea extends Beverage {</span>
<span class="line">    @Override</span>
<span class="line">    public double cost() {</span>
<span class="line">        return 5.6;</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public class Pudding extends ToppingDecorator {</span>
<span class="line">    private static final int COST = 5;</span>
<span class="line">    private final Beverage beverage;</span>
<span class="line"></span>
<span class="line">    public Pudding(Beverage beverage) {</span>
<span class="line">        this.beverage = beverage;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    public double cost() {</span>
<span class="line">        return COST + beverage.cost();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public class Boba extends ToppingDecorator {</span>
<span class="line">    private static final int COST = 7;</span>
<span class="line">    private final Beverage beverage;</span>
<span class="line"></span>
<span class="line">    public Boba(Beverage beverage) {</span>
<span class="line">        this.beverage = beverage;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    public double cost() {</span>
<span class="line">        return COST + beverage.cost();</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public class Main {</span>
<span class="line">    public static void main(String[] args) {</span>
<span class="line">        Beverage milkTea = new MilkTea();</span>
<span class="line">        milkTea = new Boba(milkTea);</span>
<span class="line">        milkTea = new Boba(milkTea);</span>
<span class="line">        milkTea = new Pudding(milkTea);</span>
<span class="line">        System.out.println(&quot;Total cost: &quot; + milkTea.cost());</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div>`,8)]))}const r=a(i,[["render",t]]),d=JSON.parse('{"path":"/java/023.html","title":"2.3 装饰器模式","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773234719000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":1,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"c6e15278dee8b42cdfff6ba7c7a614b222a43b37","time":1773234719000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"java/023.md"}');export{r as comp,d as data};
