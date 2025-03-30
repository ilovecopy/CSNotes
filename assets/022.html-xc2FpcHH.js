import{_ as s,c as a,b as i,o as e}from"./app-C_1bF7bM.js";const l={};function d(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="_2-2-线性表的顺序表示" tabindex="-1"><a class="header-anchor" href="#_2-2-线性表的顺序表示"><span>2.2 线性表的顺序表示</span></a></h1><h2 id="_2-2-1-顺序表的定义" tabindex="-1"><a class="header-anchor" href="#_2-2-1-顺序表的定义"><span>2.2.1 顺序表的定义</span></a></h2><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/线性表的顺序存储.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>线性表中元素的位序是从 1 开始的，而数组中元素下标是从 0 开始的。</p><h2 id="实现-vector" tabindex="-1"><a class="header-anchor" href="#实现-vector"><span>实现 vector</span></a></h2><div class="language-c++ line-numbers-mode" data-highlighter="prismjs" data-ext="c++" data-title="c++"><pre><code><span class="line">template&lt;typename T&gt;</span>
<span class="line">class Vector {</span>
<span class="line">private:</span>
<span class="line">    T *data; // 存储数据的指针</span>
<span class="line">    int size; // 当前元素个数</span>
<span class="line">    int capacity; // 当前容量</span>
<span class="line"></span>
<span class="line">public:</span>
<span class="line">    // 构造函数</span>
<span class="line">    Vector() {</span>
<span class="line">        data = nullptr;</span>
<span class="line">        size = 0;</span>
<span class="line">        capacity = 0;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 析构函数</span>
<span class="line">    ~Vector() {</span>
<span class="line">        delete[] data;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 获取当前元素个数</span>
<span class="line">    int getSize() const {</span>
<span class="line">        return size;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 获取当前容量</span>
<span class="line">    int getCapacity() const {</span>
<span class="line">        return capacity;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 判断是否为空</span>
<span class="line">    bool isEmpty() const {</span>
<span class="line">        return size == 0;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 向 vector 末尾添加一个元素</span>
<span class="line">    void pushBack(T element) {</span>
<span class="line">        insert(size, element);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 在指定位置插入一个元素</span>
<span class="line">    void insert(int index, T element) {</span>
<span class="line">        if (index &lt; 0 || index &gt; size) {</span>
<span class="line">            throw std::out_of_range(&quot;Index out of range&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (size == capacity) {</span>
<span class="line">            reserve(capacity == 0 ? 1 : capacity * 2);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        for (int i = size - 1; i &gt;= index; i--) {</span>
<span class="line">            data[i + 1] = data[i];</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        data[index] = element;</span>
<span class="line">        size++;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 删除指定位置的元素</span>
<span class="line">    void remove(int index) {</span>
<span class="line">        if (index &lt; 0 || index &gt;= size) {</span>
<span class="line">            throw std::out_of_range(&quot;Index out of range&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        for (int i = index; i &lt; size - 1; i++) {</span>
<span class="line">            data[i] = data[i + 1];</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        size--;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 获取指定位置的元素</span>
<span class="line">    T get(int index) const {</span>
<span class="line">        if (index &lt; 0 || index &gt;= size) {</span>
<span class="line">            throw std::out_of_range(&quot;Index out of range&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        return data[index];</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 修改指定位置的元素</span>
<span class="line">    void set(int index, T element) {</span>
<span class="line">        if (index &lt; 0 || index &gt;= size) {</span>
<span class="line">            throw std::out_of_range(&quot;Index out of range&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        data[index] = element;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 扩容</span>
<span class="line">    void reserve(int newCapacity) {</span>
<span class="line">        if (newCapacity &lt;= capacity) {</span>
<span class="line">            return;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        T *newData = new T[newCapacity];</span>
<span class="line">        for (int i = 0; i &lt; size; i++) {</span>
<span class="line">            newData[i] = data[i];</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        delete[] data;</span>
<span class="line">        data = newData;</span>
<span class="line">        capacity = newCapacity;</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const v=s(l,[["render",d],["__file","022.html.vue"]]),r=JSON.parse('{"path":"/datastructure/022.html","title":"2.2 线性表的顺序表示","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.2.1 顺序表的定义","slug":"_2-2-1-顺序表的定义","link":"#_2-2-1-顺序表的定义","children":[]},{"level":2,"title":"实现 vector","slug":"实现-vector","link":"#实现-vector","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"datastructure/022.md"}');export{v as comp,r as data};
