"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[286],{3008:(e,l,i)=>{i.r(l),i.d(l,{data:()=>r});const r={key:"v-7417b14e",path:"/notes/%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E5%9B%9E%E6%B5%81%E4%B8%8E%E9%87%8D%E7%BB%98.html",title:"浏览器的回流与重绘",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"RenderTree",slug:"rendertree",children:[]},{level:2,title:"回流(Reflow)",slug:"回流-reflow",children:[]},{level:2,title:"重绘(Repaint)",slug:"重绘-repaint",children:[]},{level:2,title:"性能影响",slug:"性能影响",children:[]},{level:2,title:"如何避免回流与重绘",slug:"如何避免回流与重绘",children:[{level:3,title:"CSS",slug:"css",children:[]},{level:3,title:"Javascript",slug:"javascript",children:[]}]}],filePathRelative:"notes/浏览器的回流与重绘.md",git:{updatedTime:1634726996e3,contributors:[{name:"pangqingbo",email:"2362698454@qq.com",commits:1}]}}},3943:(e,l,i)=>{i.r(l),i.d(l,{default:()=>a});const r=(0,i(6252).uE)('<h1 id="浏览器的回流与重绘" tabindex="-1"><a class="header-anchor" href="#浏览器的回流与重绘" aria-hidden="true">#</a> 浏览器的回流与重绘</h1><h2 id="rendertree" tabindex="-1"><a class="header-anchor" href="#rendertree" aria-hidden="true">#</a> RenderTree</h2><p>浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree</p><h2 id="回流-reflow" tabindex="-1"><a class="header-anchor" href="#回流-reflow" aria-hidden="true">#</a> 回流(Reflow)</h2><p>当浏览器Render Tree中部分或全部元素的尺寸、结构会某些属性发生改变时，浏览器re-render重新渲染全部文档的过程称为回流</p><p>会导致回流的操作：</p><ul><li>页面首次渲染</li><li>浏览器窗口大小发生改变</li><li>元素尺寸或位置发生改变</li><li>元素内容变化（文字数量或图片大小等等）</li><li>元素字体大小变化</li><li>添加或者删除可见的DOM元素</li><li>激活CSS伪类（例如：:hover）</li><li>查询某些属性或调用某些方法</li></ul><p>一些常用且会导致回流的属性和方法：</p><ul><li>clientWidth、clientHeight、clientTop、clientLeft</li><li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li><li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li><li>scrollIntoView()、scrollIntoViewIfNeeded()</li><li>getComputedStyle()</li><li>getBoundingClientRect()</li><li>scrollTo()</li></ul><h2 id="重绘-repaint" tabindex="-1"><a class="header-anchor" href="#重绘-repaint" aria-hidden="true">#</a> 重绘(Repaint)</h2><p>当浏览器某些元素的样式发生改变而不影响它在文档流中的位置(如color、visibility等)而重新绘制这个元素的现象称为重绘</p><h2 id="性能影响" tabindex="-1"><a class="header-anchor" href="#性能影响" aria-hidden="true">#</a> 性能影响</h2><p>回流需要重新渲染整个文档，而重绘只是局部某个元素重新渲染，<strong>所以回流的代价比重绘高</strong></p><h2 id="如何避免回流与重绘" tabindex="-1"><a class="header-anchor" href="#如何避免回流与重绘" aria-hidden="true">#</a> 如何避免回流与重绘</h2><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h3><ul><li>避免使用table布局。</li><li>尽可能在DOM树的最末端改变class。</li><li>避免设置多层内联样式。</li><li>将动画效果应用到position属性为absolute或fixed的元素上。</li><li>避免使用CSS表达式（例如：calc()）</li></ul><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h3><ul><li>避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。</li><li>避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。</li><li>也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。</li><li>避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。</li><li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。</li></ul>',18),t={},a=(0,i(3744).Z)(t,[["render",function(e,l){return r}]])},3744:(e,l)=>{l.Z=(e,l)=>{const i=e.__vccOpts||e;for(const[e,r]of l)i[e]=r;return i}}}]);