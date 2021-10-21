# this(上下文对象)
## this的不同情况
- 如果this以构造函数new的形式调用，this就是新创建的对象
	- 例如：
	```javascript
	function foo(){
    	this.a = 10;
	}
	var obj = new foo();
	console.log(obj.a);  //10
	```
- 如果this以call，apply，bind来调用，this绑定的就是call，apply和bind的第一个参数，也称为显示绑定
- 如果this是以方法的形式调用，则调用方法的对象是谁this就是谁，这样的this绑定也叫做隐式绑定
- 箭头函数的this在定义的时候就已经决定，由外层代码块决定，且无法修改
- 如果不是以上三种情况，也就是函数直接调用，则this是window

## this绑定优先级
new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定

## 有意思的this思考题
```javascript
function foo() {
    getName = function () { console.log (1); };
    return this;
}
foo.getName = function () { console.log(2);};
foo.prototype.getName = function () { console.log(3);};
var getName = function () { console.log(4);};
function getName () { console.log(5);}
 
foo.getName ();                // ?
getName ();                    // ?
foo().getName ();              // ?
getName ();                    // ?
new foo.getName ();            // ?
new foo().getName ();          // ?
new new foo().getName ();      // ?
```
答案：2 4 1 1 2 3 3
## 关于new
用new创建构造函数时，js会帮我们完成以下工作：
1. 创建一个新对象。
2. 把这个新对象的__proto__属性指向 原函数的prototype属性。(即继承原函数的原型)
3. 将这个新对象绑定到 此函数的this上 。
4. 返回新对象，如果这个函数没有返回其他对象。

## call、apply、bind
call、apply和bind都是为了修改函数的this指向
### call和apply
对于 apply、call 二者而言，作用完全一样，只是接受参数的方式不太一样，直接看例子：
```javascript
var func = function(arg1, arg2) {
     
};
func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])
```
其中 this 是你想指定的上下文对象，他可以是任何一个 JavaScript 对象(JavaScript 中一切皆对象)，call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里
### bind
让我们直接来看一个例子：
```javascript
var altwrite = document.write;
altwrite("hello");
```
我们如果像上面一样用，结果就会报错：Uncaught TypeError: Illegal invocation
altwrite()函数改变this的指向global或window对象，导致执行时提示非法调用异常，正确的方案就是使用bind()方法：
```javascript
var altwrite = document.write;
altwrite.bind(document)("hello")
```