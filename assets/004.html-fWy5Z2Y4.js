import{_ as n,c as s,b as a,o as i}from"./app-Dt3f-5Vu.js";const l={};function t(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="_1-4-arraylist-源码解析" tabindex="-1"><a class="header-anchor" href="#_1-4-arraylist-源码解析"><span>1.4 ArrayList 源码解析</span></a></h1><p>ArrayList 实现了 List 接口，继承了抽象类 AbstractList。size 表示含有的元素。capacity 表示上限。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">private void rangeCheck(int index) {</span>
<span class="line">    if (index &gt;= size)</span>
<span class="line">        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public E get(int index) {</span>
<span class="line">        rangeCheck(index);</span>
<span class="line"></span>
<span class="line">        return elementData(index);</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public E set(int index, E element) {</span>
<span class="line">        rangeCheck(index);</span>
<span class="line"></span>
<span class="line">        E oldValue = elementData(index);</span>
<span class="line">        elementData[index] = element;</span>
<span class="line">        return oldValue;</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 get 和 set 方法会比用下标返回多一个范围检查。</p><p>创建 ArrayList 对象时，如果使用无参构造器，则初始 elementData 容量为 0，第一次添加，则扩容 elementData 为 10。如需要再次扩容，则扩容 elementData 为 1.5 倍。</p><p>集合只能存储引用类型。</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/ArrayList扩容.drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,9)]))}const c=n(l,[["render",t],["__file","004.html.vue"]]),p=JSON.parse('{"path":"/java/004.html","title":"1.4 ArrayList 源码解析","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1720103859000},"filePathRelative":"java/004.md"}');export{c as comp,p as data};