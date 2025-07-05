import{_ as a,c as s,a as n,o as t}from"./app-DKkA6jZv.js";const i={};function l(c,e){return t(),s("div",null,e[0]||(e[0]=[n(`<h1 id="_1-4-arraylist-源码解析" tabindex="-1"><a class="header-anchor" href="#_1-4-arraylist-源码解析"><span>1.4 ArrayList 源码解析</span></a></h1><p>ArrayList 实现了 List 接口，继承了抽象类 AbstractList。size 表示含有的元素。capacity 表示上限。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">private void rangeCheck(int index) {</span>
<span class="line">    if (index &gt;= size)</span>
<span class="line">        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public E get(int index) {</span>
<span class="line">        rangeCheck(index);</span>
<span class="line"></span>
<span class="line">        return elementData(index);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">public E set(int index, E element) {</span>
<span class="line">        rangeCheck(index);</span>
<span class="line"></span>
<span class="line">        E oldValue = elementData(index);</span>
<span class="line">        elementData[index] = element;</span>
<span class="line">        return oldValue;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div></div><p>使用 get 和 set 方法会比用下标返回多一个范围检查。</p><p>创建 ArrayList 对象时，如果使用无参构造器，则初始 elementData 容量为 0，第一次添加，则扩容 elementData 为 10。如需要再次扩容，则扩容 elementData 为 1.5 倍。</p><p>集合只能存储引用类型。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/ArrayList扩容.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,9)]))}const r=a(i,[["render",l]]),p=JSON.parse('{"path":"/java/004.html","title":"1.4 ArrayList 源码解析","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1720103859000,"contributors":[{"name":"ilovecopy","username":"ilovecopy","email":"1205611509@qq.com","commits":5,"url":"https://github.com/ilovecopy"}],"changelog":[{"hash":"d5db2459b570e661d3d7d99a79f49d17d97f2ddc","time":1720103859000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"d405288b6992f6c9f30808585bffd591002b72b7","time":1715523636000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"},{"hash":"753bdb2c758283e536264442ce6849398aea700b","time":1709045695000,"email":"1205611509@qq.com","author":"ilovecopy","message":"Update 004.md"},{"hash":"0ed9ab8b6337aa5d66435f3d286cc4786654a6f5","time":1709045602000,"email":"1205611509@qq.com","author":"ilovecopy","message":"Update 004.md"},{"hash":"d50f40c04d659276f2a608aceee974004fef6574","time":1704512827000,"email":"1205611509@qq.com","author":"ilovecopy","message":"add"}]},"filePathRelative":"java/004.md"}');export{r as comp,p as data};
