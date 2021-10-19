# Vue指令
## Vue指令
- v-html：v-html的内容会按照HTML文本插入，而不会作为普通文本插入
- v-show：根据表达式的真假值，切换元素是否显示，也就是切换元素的CSS display属性
- v-if：这块内容只在表达式内容为真值(Boolean为真或其他类型转为Boolean为真)时才会渲染
- v-else：表示v-if的else块
- v-else-if：充当v-else的else-if块
- v-for：用来遍历数组或者对象
	- 语法示例：
	```javascript
	<li v-for = "item in items"></li> 或 <li v-for = "item of items"></li>
	```
	- 遍历数组时：
		- 语法：
		```javascript
		<li v-for = "(item,index) of items"></li>
		```
		- 第一个参数表示当前的值
		- 第二个参数指示数组索引
	- 遍历对象时：
		- 语法：
			```javascript
			<li v-for = "(value,name,index) of obj"></li>
			```
		- 第一个参数表示对象的属性值
		- 第二个参数为对象属性名
		- 第三个参数用作索引
- v-on：用来进行事件绑定，事件类型参数指定
	- 简写：@
	- 绑定单机响应事件：
		```javascript
		<button v-on:click = "function"></button>
		```
	- 绑定keyup事件：
		```javascript
		<button @keyup = "function"></button>
		```
	- 事件修饰符：
		- .stop：阻止事件继续冒泡或者捕获
		- .prevent：阻止事件默认行为
		- .capture：触发事件时添加了.capture的优先捕获事件
		- .self：以onclick事件为例，只有元素在点击自己时才会触发事件，就算点击的是元素包裹的子元素，事件也不会冒泡到元素上
		- .once：事件只会触发一次
		- .passive：