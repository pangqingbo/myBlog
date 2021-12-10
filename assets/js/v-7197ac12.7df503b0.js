"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[654],{5938:(l,e,i)=>{i.r(e),i.d(e,{data:()=>t});const t={key:"v-7197ac12",path:"/notes/Note02DOM.html",title:"DOM",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"DOM",slug:"dom-1",children:[{level:3,title:"DOM简介",slug:"dom简介",children:[]},{level:3,title:"DOM节点",slug:"dom节点",children:[]},{level:3,title:"DOM获取节点",slug:"dom获取节点",children:[]},{level:3,title:"元素节点的属性",slug:"元素节点的属性",children:[]},{level:3,title:"DOM操作CSS",slug:"dom操作css",children:[]},{level:3,title:"常用事件",slug:"常用事件",children:[]},{level:3,title:"DOM增删改",slug:"dom增删改",children:[]},{level:3,title:"事件的冒泡和捕获",slug:"事件的冒泡和捕获",children:[]},{level:3,title:"事件的委托",slug:"事件的委托",children:[]}]},{level:2,title:"事件对象",slug:"事件对象",children:[{level:3,title:"事件对象的属性",slug:"事件对象的属性",children:[]}]}],filePathRelative:"notes/Note02DOM.md",git:{updatedTime:163463395e4,contributors:[{name:"pangqingbo",email:"2362698454@qq.com",commits:1}]}}},9152:(l,e,i)=>{i.r(e),i.d(e,{default:()=>n});const t=(0,i(6252).uE)('<h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h1><h2 id="dom-1" tabindex="-1"><a class="header-anchor" href="#dom-1" aria-hidden="true">#</a> DOM</h2><h3 id="dom简介" tabindex="-1"><a class="header-anchor" href="#dom简介" aria-hidden="true">#</a> DOM简介</h3><p>DOM，全称叫做Document Object Model文档对象模型，DOM将HTML文档描绘成一个多层节点的树状结构</p><h3 id="dom节点" tabindex="-1"><a class="header-anchor" href="#dom节点" aria-hidden="true">#</a> DOM节点</h3><ul><li>DOM常用节点分为四类： <ul><li>文档节点：整个HTML文档</li><li>元素节点：HTML文档中的HTML标签，如p标签、div标签、span标签等</li><li>属性节点：元素的属性，如name、id、class等</li><li>文本节点：HTML标签中的文本内容</li></ul></li><li>DOM节点的属性 <ul><li>nodeName:元素节点的nodeName为标签名，属性节点的nodeName为属性名</li><li>nodeType：文档节点的nodeType为9，元素节点、属性节点、文本节点的nodeType分别为1、2、3</li><li>nodeValue：属性节点的nodeValue为属性值，文本节点的nodeValue为文本内容</li></ul></li></ul><h3 id="dom获取节点" tabindex="-1"><a class="header-anchor" href="#dom获取节点" aria-hidden="true">#</a> DOM获取节点</h3><ul><li>获取元素节点 <ul><li>通过document调用 <ol><li>getElementById():通过id属性获取元素节点对象</li><li>getElementsByTagName()：通过标签名获取一组元素节点对象</li><li>getElementsByName()：通过name属性获取一组元素节点对象</li></ol></li></ul></li><li>获取元素节点的子节点 <ul><li>通过具体的元素节点调用 <ol><li>getElementsByTagName()</li><li>childNodes：获取当前节点的所有子节点</li><li>firstChild：获取当前节点的第一个子节点</li><li>lastChild：获取当前节点的最后一个子节点</li><li>children：可以获取当前元素的所有子元素节点</li><li>firstElementChild：获取当前元素的第一个子元素，不兼容IE8及以下浏览器</li><li>lastElementChild：获取当前元素的最后一个子元素，同样不兼容IE8及以下浏览器</li></ol></li></ul></li><li>获取父节点和兄弟节点 <ul><li>通过具体的节点调用 <ol><li>parentNode：获取当前节点的父节点</li><li>previousSibling：获取当前节点的前一个兄弟节点</li><li>nextSibling：获取当前节点的下一个兄弟节点</li><li>previousElementSibling：获取当前节点的前一个兄弟元素节点，IE8及以下不支持</li><li>nextElementSibling：获取当前节点的下一个兄弟元素节点，IE8及以下不支持</li></ol></li></ul></li><li>其他DOM查询的属性、方法 <ol><li>document.body：它保存的是body的引用</li><li>document.documentElement：保存的是html根标签</li><li>document.all：代表页面中的所有元素</li><li>document.getElementsByClassName:根据元素的类名获取一组元素节点对象，IE8及以下不支持</li><li>document.querySelector()：可以根据CSS选择器来查询一个元素节点对象，需要一个选择器的字符串作为参数如：.box,#box1</li><li>documen.querrySelectorAll()：用法与querySelector()类似，不同的是它会将符合条件的所有元素封装到一个数组中返回</li></ol></li></ul><h3 id="元素节点的属性" tabindex="-1"><a class="header-anchor" href="#元素节点的属性" aria-hidden="true">#</a> 元素节点的属性</h3><ol><li>element.value：能够读写元素的value属性值</li><li>element.id：读写元素的id值</li><li>element.className：读写元素的类名</li><li>innerHTML：元素节点可以通过该属性获取和设置标签内部的html代码</li><li>innerText：返回元素内部包含的文本内容，可写属性</li><li>如果需要读取元素节点的属性，我们一般直接使用：元素.属性名</li><li>注：8~18都是只读属性</li><li>element.clienHeight：获取元素的可见高度，返回值不带px，可见高度包括内容区和内边距</li><li>element.clienWidth：获取元素的可见宽度</li><li>element.offsetHeight：获取元素的整个高度，包括内容区、内边距和边框</li><li>element.offsetWidth：获取元素的整个宽度</li><li>element.offsetParent：获取离当前元素最近的开启了定位的祖先元素，如果没有祖先元素开启定位，则返回body</li><li>element.offsetLeft：获取当前元素相对于其定位父元素的水平偏移量</li><li>element.offsetTop：获取当前元素相对于其定位父元素的垂直偏移量</li><li>element.scrollWidth：可以获取当前元素整个滚动区域的宽度</li><li>element.scrollHeight：可以获取当前元素整个滚动区域的高度</li><li>elemen.scrollLeft：获取水平滚动条滚动的距离</li><li>elemen.scrollTop：获取垂直滚动条滚动的距离</li><li>当满足scrollHeight - scrollTop == clientHeight，则垂直滚动条到底了</li></ol><h3 id="dom操作css" tabindex="-1"><a class="header-anchor" href="#dom操作css" aria-hidden="true">#</a> DOM操作CSS</h3><ul><li>修改元素的样式 <ul><li>语法：元素.style.样式名 = 样式值（字符串）</li><li>注意： <ol><li>如果CSS样式名中含有-，则需要将样式名改为驼峰命名法</li><li>通过style属性读取和设置的样式都是内联样式，内联样式会有较高的优先级</li></ol></li></ul></li><li>读取元素的样式（只读） <ul><li>元素.currentstyle.样式名 <ul><li>可以用它来获取当前元素正在显示的样式</li><li>currentstyle只有IE支持，其他浏览器不支持</li></ul></li><li>getComputedStyle()方法 <ul><li>这个方法是window的方法</li><li>需要传递两个参数： <ol><li>参数1，要获取样式的元素</li><li>参数2，可以传递一个伪元素，但一般都传null</li></ol></li><li>该方法不支持IE8及以下浏览器</li></ul></li></ul></li></ul><h3 id="常用事件" tabindex="-1"><a class="header-anchor" href="#常用事件" aria-hidden="true">#</a> 常用事件</h3><ol><li>onclick:事件在鼠标单击的时发生</li><li>ondbclick：事件在鼠标双击的时发生</li><li>onmousemove：当鼠标在元素上移动时发生</li><li>onmousedown：事件在鼠标按下时发生</li><li>onmouseup：事件在鼠标释放时发生</li><li>onscroll：事件在滚动条滚动时触发</li></ol><h3 id="dom增删改" tabindex="-1"><a class="header-anchor" href="#dom增删改" aria-hidden="true">#</a> DOM增删改</h3><ol><li>document.createElement()：用于创建一个元素节点对象，需要一个标签名的字符串作为参数</li><li>document.createTextNode()：用于创建一个文本节点对象，需要文本内容的字符串作为参数</li><li>appendChild()：向一个父节点的末尾添加一个子节点，用法：父节点.appendChild(子节点)</li><li>insertBfore()：可以在指定的子节点前插入新的子节点，用法：父节点.insertBefore(新节点，旧节点)</li><li>replaceChild：可以使用指定的字节的替换已有的子节点，用法：父节点.replaceChild(新节点，旧节点)</li><li>removeChild：可以删除一个子节点，用法：父节点.removeChild(子节点)</li></ol><h3 id="事件的冒泡和捕获" tabindex="-1"><a class="header-anchor" href="#事件的冒泡和捕获" aria-hidden="true">#</a> 事件的冒泡和捕获</h3><ul><li>事件的捕获：假设我们给某一个元素及其祖先元素绑定同一事件，当事件触发时，先触发当前元素最外层的祖先元素的事件，然后向内传播最后触发当前元素的事件的现象称为事件的捕获</li><li>事件的冒泡：假设我们给某一个元素及其祖先元素绑定同一事件，当事件触发时，先触发当前元素的事件，然后向外传播最后触发当前元素的祖先元素的事件的现象称为事件的冒泡</li></ul><h3 id="事件的委托" tabindex="-1"><a class="header-anchor" href="#事件的委托" aria-hidden="true">#</a> 事件的委托</h3><ul><li>addEventListener()：可以为元素绑定响应函数，不支持IE8及以下浏览器 <ul><li>参数： <ol><li>第一个参数，事件的字符串，不要on</li><li>第二个参数，回调函数，事件触发时该函数会被调用</li><li>第三个参数，是否在捕获阶段触发事件，需要一个布尔值，一般传false</li></ol></li></ul></li><li>attachEvent()：在IE8中用来绑定事件 <ul><li>参数： <ol><li>第一个参数，事件的字符串，要on</li><li>第二个参数，回调函数</li></ol></li></ul></li></ul><h2 id="事件对象" tabindex="-1"><a class="header-anchor" href="#事件对象" aria-hidden="true">#</a> 事件对象</h2><p>当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数,在事件对象中封装了当前事件相关的一切信息，比如：鼠标的坐标 键盘哪个按键被按下 鼠标滚轮滚动的方向。。。</p><h3 id="事件对象的属性" tabindex="-1"><a class="header-anchor" href="#事件对象的属性" aria-hidden="true">#</a> 事件对象的属性</h3><ul><li>clientX：可以获取鼠标指针的水平坐标(根据客户端区域)</li><li>clientY：可以获取鼠标指针的垂直坐标(根据客户端区域)</li></ul>',24),d={},n=(0,i(3744).Z)(d,[["render",function(l,e){return t}]])},3744:(l,e)=>{e.Z=(l,e)=>{const i=l.__vccOpts||l;for(const[l,t]of e)i[l]=t;return i}}}]);