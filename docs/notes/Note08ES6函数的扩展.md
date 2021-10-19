# ES6之函数的扩展
## 默认值
- es6允许为函数参数指定默认值
- 参数指定默认值后，不能再函数内用let和const再次声明
- 参数默认值是惰性求值，用到时才会重新计算默认值
	```javascript
	function add(x = 1, y = 2){
	    // let x = 4 //error
	    // const y = 5 //error
	    console.log(x + y)
	}
	```

- 函数参数的默认值可以配合解构赋值使用

	```javascript
	function foo({x,y} = {x:5}){
	    console.log(x,y)
	} 
	foo() //5 undefined
	```

- 非尾部的参数设置的默认值传参时不能省略，否则会报错
	```javascript
	function add(x = 1, y){
	    console.log(x+y)
	}
	add( ,10) //报错
	```

- 如果传入的参数为undefined会触发函数参数的默认值
- 指定了默认值后，函数的length属性将返回没有指定默认值的参数的个数
- 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
	```javascript
	(function (a) {}).length // 1
	(function (a = 5) {}).length // 0
	(function (a, b, c = 5) {}).length // 2
	(function (a = 0, b, c) {}).length // 0
	(function (a, b = 1, c) {}).length // 1
	```

- 函数参数一旦设置了默认值，则函数的参数将形成一个单独的作用域
	```javascript
	var x = 1;
	function f(x, y = x) {
	    console.log(y);
	}
	f(5) // 2
	上面这个例子参数y设置了默认值x，这个x将指向参数x(5)而不是全局作用域的x(1)
	```

## rest参数
- rest参数(...变量名)，使用rest参数可以传入任意数目的参数
	```javascript
	function add(...values){
	    let sum = 0
	    for(let value of values){
	        sum += value
	    }
	    console.log(sum)
	}
	add(2,5,8) //15
	```

- rest参数之后不能再有参数，否则会报错
	```javascript
	function fun(a,...values,b){
	    console.log("hi")
	}
	fun(2,5,6) //报错
	```

- 函数的length属性也不包括rest参数

## name属性
- 函数的name属性，返回该函数的函数名
	```javascript
	function foo() {}
	console.log(foo.name) // "foo"
	```

- 如果匿名函数赋值给一个变量，调用name属性ES5返回空串，而ES6返回实际的函数名
	```javascript
	var f = function () {};
	// ES5
	f.name // ""
	// ES6
	f.name // "f"
	```

## 箭头函数
- 箭头函数，ES6允许使用=>定义函数
- 箭头函数的this由外层代码块的this决定

## 尾调用
- 尾调用，即指某个函数的最后一步是调用另一个函数
	```javascript
	function f(x){
	    return g(x);
	}
	```

- 柯里化，意思是将多参数的函数转换成单参数的形式
	```javascript
	function currying(fn, n) {
	    return function (m) {
	        return fn.call(this, m, n);
	    };
	}
	function tailFactorial(n, total) {
	    if (n === 1) return total;
	    return tailFactorial(n - 1, n * total);
	}
	const factorial = currying(tailFactorial, 1);
	console.log(factorial(5)) // 120
	```

- 蹦床函数（trampoline）可以将递归执行转为循环执行，防止调用栈溢出，下面函数使用蹦床函数执行sum，就不会发生调用栈溢出
	```javascript
	function trampoline(f) {
	  while (f && f instanceof Function) {
	    f = f();
	  }
	  return f;
	}
	function sum(x, y) {
	  if (y > 0) {
	    return sum.bind(null, x + 1, y - 1);
	  } else {
	    return x;
	  }
	}
	trampoline(sum(1, 100000)) // 100001
	```

## 函数参数的尾逗号
- ES2017 允许函数的最后一个参数有尾逗号
	```javascript
	function clownsEverywhere(
		  param1,
		  param2,
	)
	```

## Function.prototype.toString()
- Function.prototype.toString()方法返回一模一样的函数代码本身
	