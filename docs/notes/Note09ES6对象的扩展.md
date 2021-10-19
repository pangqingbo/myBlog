# ES6之对象的扩展
## 属性的简洁表示
- ES6允许函数对属性和方法进行简写
	```javascript
	const foo = "bar"
	const obj = {foo, sayHi(){}}
	console.log(obj)  //obj = {foo: "bar", sayHi: function(){}}
	```

## 属性名表达式
- ES6允许对象使用字面量定义对象时(使用大括号)，把表达式放方括号里作为对象的属性名或者方法名
	```javascript
	var obj = {["a" + "bc"]: true,
	    ["h" + "ello"]() {
	        console.log("hi")
	    }
	}
	console.log(obj.abc)
	obj.hello()
	
	```

## 方法的name属性
- 对象的方法也是函数，因此也有name属性
	```javascript
	const obj = {
	    sayName() {}
	}
	console.log(obj.sayName.name) //"sayName"
	```

## Object.getOwnPropertyDescriptor()
- Object.getOwnPropertyDescriptor()方法用来获取某个属性的描述对象，描述对象用来控制该属性的行为
	```javascript
	let obj = { foo: 123 };
	console.log(Object.getOwnPropertyDescriptor(obj, 'foo'))
	//  {
	//    value: 123,
	//    writable: true,
	//    enumerable: true,
	//    configurable: true
	//  } */
	// enumerable称为可枚举性
	```

## super关键字
- super关键字指向当前对象的原型对象
	```javascript
	const proto = {
	    foo: 'hello'    
	};
	const obj = {
	    foo: 'world',
	    find() {
	        return super.foo;
	    }
	};
	Object.setPrototypeOf(obj, proto);
	obj.find() // "hello"
	```

## 对象的扩展运算符
- 对象也可以使用扩展运算符(...)
- 解构赋值
	```javascript
	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	x // 1
	y // 2
	console.log(z) // { a: 3, b: 4 }
	```

- 对象的扩展运算符可以用于拷贝对象的所有可遍历属性到当前对象中
	```javascript
	let obj1 = {a: 1, b: 2}
	let obj2 = {...obj1}
	obj2.a = 3  // obj1{a: 1, b: 2}, obj2{a: 3, b: 2}
	// 等同于 let obj2 = Object.assign({}, obj1)
	```