import{_ as e,o as i,c as n,a}from"./app-XWLI5M5X.js";const t={},s=a(`<h1 id="arraylist-源码解析" tabindex="-1"><a class="header-anchor" href="#arraylist-源码解析"><span>ArrayList 源码解析</span></a></h1><p>ArrayList 实现了 List 接口，继承了抽象类 AbstractList。size 表示含有的元素。capacity 表示上限。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>private void rangeCheck(int index) {
    if (index &gt;= size)
        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public E get(int index) {
        rangeCheck(index);

        return elementData(index);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public E set(int index, E element) {
        rangeCheck(index);

        E oldValue = elementData(index);
        elementData[index] = element;
        return oldValue;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 get 和 set 方法会比用下标返回多一个范围检查。</p><p>创建 ArrayList 对象时，如果使用无参构造器，则初始 elementData 容量为 0，第一次添加，则扩容 elementData 为 10。如需要再次扩容，则扩容 elementData 为 1.5 倍。</p><p>集合只能存储引用类型。</p><p><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/ArrayList扩容.drawio.png" alt="ArrayList 扩容.drawio"></p>`,9),d=[s];function l(r,c){return i(),n("div",null,d)}const u=e(t,[["render",l],["__file","004.html.vue"]]),m=JSON.parse('{"path":"/java/004.html","title":"ArrayList 源码解析","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1709045695000},"filePathRelative":"java/004.md"}');export{u as comp,m as data};
