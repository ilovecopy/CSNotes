import{_ as e,c as a,b as n,o as r}from"./app-Dt3f-5Vu.js";const o={};function i(d,t){return r(),a("div",null,t[0]||(t[0]=[n('<h1 id="_1-3-注解" tabindex="-1"><a class="header-anchor" href="#_1-3-注解"><span>1.3 注解</span></a></h1><p>注解是代码中的特殊标记。</p><h2 id="使用注解定义-bean" tabindex="-1"><a class="header-anchor" href="#使用注解定义-bean"><span>使用注解定义 Bean</span></a></h2><table><thead><tr><th>注解</th><th>说明</th></tr></thead><tbody><tr><td>@Component</td><td>该注解用于描述 Spring 中的 Bean，它是一个泛化的概念，仅仅表示容器中的一个组件（Bean），并且可以作用在应用的任何层次，例如 Service 层、Dao 层等。使用时只需将该注解标注在相应的类上即可。</td></tr><tr><td>@Repository</td><td>该租借用于将数据访问层（Dao 层）的类标识为 Spring 中的 Bean，其功能与@Component 相同。</td></tr><tr><td>@Service</td><td>该注解通常作用在业务层（Service 层），用于将业务层的类标识为 Spring 中的 Bean，其功能与@Component 相同。</td></tr><tr><td>@Controller</td><td>该注解通常作用在控制层（如 SpringMVC 的 Controller），用于将控制层的类标识为 Spring 中的 Bean，其功能与@Component 相同。</td></tr></tbody></table><p>@Data=@Getter+@Setter+@ToString+@EqualsAndHashCode</p><figure><img src="https://csnotes.oss-cn-beijing.aliyuncs.com/photos/image-20240401235819947.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6)]))}const l=e(o,[["render",i],["__file","003.html.vue"]]),p=JSON.parse('{"path":"/ssm/003.html","title":"1.3 注解","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用注解定义 Bean","slug":"使用注解定义-bean","link":"#使用注解定义-bean","children":[]}],"git":{"updatedTime":1720103859000},"filePathRelative":"ssm/003.md"}');export{l as comp,p as data};