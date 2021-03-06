# ES6之let和const和变量的解构赋值
## let和const
### let和const
- 相同之处
	- let和const都用来声明变量
	- let和const声明的变量仅在块级作用域中有效，也就是说let和const声明的变量都只在相应的代码块{}中起作用
	- let和const都不可以在同一个作用域中重新声明同一个变量
	- 都不存在变量提升，也就是let和const所声明的变量一定要在声明后使用，否则报错
	- 都存在暂时性死区，在代码块内，使用let或const命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
- 不同之处
	- let可以重复赋值，const不可以重复赋值

### object.freeze()
- 使用object.freeze()的对象不可以修改属性

### 块级作用域与函数声明
- ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明
- ES6 引入了块级作用域，明确允许在块级作用域之中声明函数
- ES6 在附录 B里面规定：
	- 允许在块级作用域内声明函数
	- 函数声明类似于var，即会提升到全局作用域或函数作用域的头部
	- 同时，函数声明还会提升到所在的块级作用域的头部
- 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数
### 顶层对象的属性
- 顶层对象，在浏览器环境中指window对象，在ES5中，在全局中声明的全局变量等价于顶层对象的属性。而在ES6中为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。

## 变量的解构赋值
### 数组的解构赋值
- 示例：
	```javascript
	 let [head, ...tail] = [1, 2, 3, 4];  
	 head // 1  
	 tail // [2, 3, 4]   
	 如果解构不成功，变量的值就等于undefined  
	 let [foo] = [];  
	 let [bar, foo] = [1];   
	 以上两种情况都属于解构不成功，foo的值都会等于undefined  
	 如果等号的右边不是数组（或者严格地说，不是可遍历的(iterator)结构),那 么将会报错,如下：   
	 // 报错  
	 let [foo] = 1;  
	 let [foo] = false;    
	 let [foo] = {};  
	```
- 默认值
	- ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效
		```javascript
		示例：	
		 let [x = 1] = [undefined]; // x=1   
		 let [x = 1] = [null]; // x=null
  		```

	- 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值

### 对象的解构赋值
- 对象的属性没有次序，变量必须与属性同名，才能取到正确的值
	```javascript
	let { bar, foo } = { foo: 'aaa', bar: 'bbb' }; //foo="aaa"; bar="bbb"  
	let { baz } = { foo: 'aaa', bar: 'bbb' }; // baz=undefined  
	```

- 如果解构失败，变量的值等于undefined
- 解构可以用于嵌套赋值

	``` javascript
	let obj = {
	  p: [
	    'Hello',
	    { y: 'World' }
	  ]
	};
	let { p: [x, { y }] } = obj;
	x // "Hello"
	y // "World"
	```

- 对象的解构也可以指定默认值,默认值生效的条件是，对象的属性值严格等于undefined
	```javascript
	var {x = 3} = {x: undefined};
	x // 3
	
	var {x = 3} = {x: null};
	x // null
	```

### 字符串的解构赋值
```javascript
const [a, b, c, d, e] = 'hello';  
a // "h"  
b // "e"   
c // "l"   
d // "l"   
e // "o"     

let {length : len} = 'hello';    
len // 5    
```

### 数值和布尔值的解构赋值
- 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象

### 函数参数的解构赋值
- 函数的参数也可以使用解构赋值
	```javascript
	function add([x, y]){
	  return x + y;
	}
	add([1, 2]); // 3
	```
	```
	[[1, 2], [3, 4]].map(([a, b]) => a + b);
	// [ 3, 7 ]
	```

- 函数参数的解构也可以使用默认值,undefined就会触发参数的默认值
	```javascript
	function move({x = 0, y = 0} = {}) {
	  return [x, y];
	}
	move({x: 3, y: 8}); // [3, 8]
	move({x: 3}); // [3, 0]
	move({}); // [0, 0]
	move(); // [0, 0]
	```

### 圆括号的使用问题
- 以下三种解构赋值里面不得使用圆括号
	1. 变量声明语句
	2. 函数参数	
	3. 赋值语句的模式
- 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号
	```javascript
	[(b)] = [3]; // 正确
	({ p: (d) } = {}); // 正确
	[(parseInt.prop)] = [3]; // 正确
	```

### 变量的解构赋值的用途
- 交换变量的值
	```javascript
	let x = 1;
	let y = 2;
	[x, y] = [y, x];
	```

- 从函数返回多个值
	```javascript
	// 返回一个数组
	function example() {
	  return [1, 2, 3];
	}
	let [a, b, c] = example();
	// 返回一个对象
	function example() {
	  return {
	    foo: 1,
	    bar: 2
	  };
	}
	let { foo, bar } = example();
	```

- 函数参数的定义
	```javascript
	// 参数是一组有次序的值
	function f([x, y, z]) { ... }
	f([1, 2, 3]);
	// 参数是一组无次序的值
	function f({x, y, z}) { ... }
	f({z: 3, y: 2, x: 1});
	```

- 指定函数参数的默认值
指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句

### 知识点
**一般引用类型（对象，数组）如果不需要按地址赋值的话，拷贝一份再赋值就可以了，对象一般用Object.assign拷贝，数组用[].concat()拷贝**
