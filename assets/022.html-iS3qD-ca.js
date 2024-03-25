import{_ as i,o as n,c as e,a as d}from"./app-XWLI5M5X.js";const s={},l=d(`<h1 id="_2-2-线性表的顺序表示" tabindex="-1"><a class="header-anchor" href="#_2-2-线性表的顺序表示"><span>2.2 线性表的顺序表示</span></a></h1><h2 id="_2-2-1-顺序表的定义" tabindex="-1"><a class="header-anchor" href="#_2-2-1-顺序表的定义"><span>2.2.1 顺序表的定义</span></a></h2><p><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/线性表的顺序存储.png" alt="线性表的顺序存储.drawio"></p><p>线性表中元素的位序是从 1 开始的，而数组中元素下标是从 0 开始的。</p><h2 id="实现-vector" tabindex="-1"><a class="header-anchor" href="#实现-vector"><span>实现 vector</span></a></h2><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>template&lt;typename T&gt;
class Vector {
private:
    T *data; // 存储数据的指针
    int size; // 当前元素个数
    int capacity; // 当前容量

public:
    // 构造函数
    Vector() {
        data = nullptr;
        size = 0;
        capacity = 0;
    }

    // 析构函数
    ~Vector() {
        delete[] data;
    }

    // 获取当前元素个数
    int getSize() const {
        return size;
    }

    // 获取当前容量
    int getCapacity() const {
        return capacity;
    }

    // 判断是否为空
    bool isEmpty() const {
        return size == 0;
    }

    // 向 vector 末尾添加一个元素
    void pushBack(T element) {
        insert(size, element);
    }

    // 在指定位置插入一个元素
    void insert(int index, T element) {
        if (index &lt; 0 || index &gt; size) {
            throw std::out_of_range(&quot;Index out of range&quot;);
        }

        if (size == capacity) {
            reserve(capacity == 0 ? 1 : capacity * 2);
        }

        for (int i = size - 1; i &gt;= index; i--) {
            data[i + 1] = data[i];
        }

        data[index] = element;
        size++;
    }

    // 删除指定位置的元素
    void remove(int index) {
        if (index &lt; 0 || index &gt;= size) {
            throw std::out_of_range(&quot;Index out of range&quot;);
        }

        for (int i = index; i &lt; size - 1; i++) {
            data[i] = data[i + 1];
        }

        size--;
    }

    // 获取指定位置的元素
    T get(int index) const {
        if (index &lt; 0 || index &gt;= size) {
            throw std::out_of_range(&quot;Index out of range&quot;);
        }

        return data[index];
    }

    // 修改指定位置的元素
    void set(int index, T element) {
        if (index &lt; 0 || index &gt;= size) {
            throw std::out_of_range(&quot;Index out of range&quot;);
        }

        data[index] = element;
    }

    // 扩容
    void reserve(int newCapacity) {
        if (newCapacity &lt;= capacity) {
            return;
        }

        T *newData = new T[newCapacity];
        for (int i = 0; i &lt; size; i++) {
            newData[i] = data[i];
        }

        delete[] data;
        data = newData;
        capacity = newCapacity;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[l];function v(r,c){return n(),e("div",null,a)}const u=i(s,[["render",v],["__file","022.html.vue"]]),m=JSON.parse('{"path":"/datastructure/022.html","title":"2.2 线性表的顺序表示","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"2.2.1 顺序表的定义","slug":"_2-2-1-顺序表的定义","link":"#_2-2-1-顺序表的定义","children":[]},{"level":2,"title":"实现 vector","slug":"实现-vector","link":"#实现-vector","children":[]}],"git":{"updatedTime":1698592164000},"filePathRelative":"datastructure/022.md"}');export{u as comp,m as data};
