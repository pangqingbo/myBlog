# ES6之对象的新增方法
## Object.is
- Object.is()用来比较两个值是否严格相等
- 使用严格相等符===比较两个值时，+0等于-0，NaN不等于自身,而Object.is()刚好相反
	```
	Object.is({}, {}) // false
	Object.is(+0, -0) // false
	Object.is(NaN, NaN) // true
	```

## Object.assign()
- Object.assign()方法用来复制对象的可枚举属性
- 如果目标对象与源对象有多个同名属性，则后面的属性会覆盖前面的属性
	```
	const target = { a: 1, b: 1 };
	const source1 = { b: 2, c: 2 };
	const source2 = { c: 3 };
	Object.assign(target, source1, source2);
	console.log(target) // {a:1, b:2, c:3}
	```
- Object.assign()实行的是浅拷贝，也就是说，如果源对象的某个属性值是一个对象，那么目标对象拷贝的只是这个对象的引用
	```
	const obj1 = {a: {b: 1}}
	const obj2 = Object.assign({}, obj1)
	obj1.a.b = 2
	console.log(obj2.a.b) //2
	```
- 对于嵌套的对象，一旦遇到同名属性，Object.assign()会将同名属性替换而不是添加
	```
	const target = { a: { b: 'c', d: 'e' } }
	const source = { a: { b: 'hello' } }
	console.log(Object.assign(target, source))
	// { a: { b: 'hello' } }
	```
- 对于数组，Object.assign()会将数组视为对象
	```
	Object.assign([1, 2, 3], [4, 5]) // [4, 5, 3]
	```
- **应用：**
	- Obeject.assign()可以用来为对象添加属性
		```
		const Point = {
	        constructor(x, y) {
	            Object.assign(this, {x, y});
	        }
	    }
	    Point.constructor(2,4)
	    console.log(Point) //Point{x: 2, y: 4, cons...}
		```
	- Object.assign()可以为对象添加方法
		```
		Object.assign(SomeClass.prototype, {
	        method(){}
	    })
		```
	- Object.assign()可以用来克隆对象
	- Object.assign()可以用来合并多个对象
		```
		const merge = (target, ...sources) => Object.assign(target, ...sources);
		```
	- Object.assign()可以用来为属性指定默认值
		```
		const DEFAULTS = {
	        logLevel: 0,
	        outputFormat: 'html'
	    };
	    function processContent(options) {
	        options = Object.assign({}, DEFAULTS, options);
	        console.log(options);
	        // ...
	    }
		```

## Object.getOwnPropertyDescriptors()
- Object.getOwnPropertyDescriptors()返回对象的描述对象，如果指定第二个参数则只返回给定属性的描述对象

## Object.setPrototypeOf()
- Object.setPrototypeOf()用来设置对象的原型对象，返回参数对象本身
- 第一个参数如果是undefined或null就会报错，因为undefined和null无法转为对象
	```
	let proto = {};
	let obj = { x: 10 };
	Object.setPrototypeOf(obj, proto);
	proto.y = 20;
	obj.x // 10
	obj.y // 20
	```

## Object.getPrototypeOf()
- Object.getPrototypeOf()用来读取原型对象

## Object.keys()，Object.values()，Object.entries()
- Object.keys()，Object.values()，Object.entries()分别用来返回参数对象自身的所有可遍历属性的键名、键值和键值对
- 返回的是一个数组
	```
	var obj = { foo: 'bar', baz: 42 };
	Object.keys(obj)
	```
	```
	let {keys, values, entries} = Object;
	let obj = { a: 1, b: 2, c: 3 };
	for (let key of keys(obj)) {
	    console.log(key); // 'a', 'b', 'c'
	}
	for (let value of values(obj)) {
	    console.log(value); // 1, 2, 3
	}
	for (let [key, value] of entries(obj)) {
	    console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
	}
	```

## Object.fromEntries()
- Object.fromEntries()用来将一个键值对数组转为对象
	```
	Object.fromEntries([["a", "1"],["b", "2"]]) //{a: 1, b: 2} 	
	```
	
