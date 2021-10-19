# ES6之数组的方法扩展
## JavaScript中的数组方法
- map()：对数组的每一个元素依次进行处理，并返回一个新数组，新数组中的元素为数组元素调用回调函数处理后的值，不改变原数组，有返回值	
	- 语法：Array.map(function(value, index, arr){...},thisValue)
	- 参数：
		1. 回调函数：数组中的每一个值都会执行该函数
		2. thisValue：指定函数的“this”值
- forEach()：forEach和map类似，只不过map有返回值，forEach没有返回值
- indexOf()：indexOf方法无法识别数组的NaN成员
- every()：针对数组中的每一个元素进行比对，只要有一个元素比对结果为false则返回false，反之要所有的元素比对结果为true才为true
- some()：同样是针对数组中的每一个元素，但是这个方法是，只要有一个元素比对结果为true，返回结果就为true，反之要所有的元素比对结果为false才为false
- sort()：对数组进行排序，默认按照Unicode编码升序排序，不过我们可以通过添加函数参数来改变排序顺序，返回值为0或-1不交换位置，返回值为1交换位置
	- 示例：
		```
		var arr=[1,3,10,4,2];  
        function compare(value1,value2) {  
            if(value1<value2){return -1;}
            else if(value1>value2){return 1;}
            else {return 0}
        }
        arr.sort(compare);
        alert(arr)   //1,2,3,4,10
		```
- filter()：filter用于对数组进行过滤，它会创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素，语法参数和map一样，不改变原数组
- call()：该方法需要可以传递多个参数，第一个参数是目标对象，第二个及之后的参数将作为参数传入调用call方法的函数，这个函数将调用call方法的函数放在目标对象中执行
- apply()：apply方法和call方法类似，不过apply第二个参数传递的是数组
## es6数组扩展
### 扩展运算符
- 扩展运算符（...）：扩展运算符可以将一个数组转为用逗号分隔的参数序列
	- 注意：
		1. 扩展运算符后面可以放表达式
		2. 扩展运算符后面是空数组，则不产生效果
		3. 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
	- 应用：
		1. 替代函数的apply方法
			> // ES5 的写法  
			Math.max.apply(null, [14, 3, 77])  
			// ES6 的写法  
			Math.max(...[14, 3, 77])  
			// 等同于  
			Math.max(14, 3, 77);  
		2. 复制数组
			> const a1 = [1, 2];  
			// 写法一  
			const a2 = [...a1];  
			// 写法二  
			const [...a2] = a1;
		3. 合并数组
			> const arr1 = ['a', 'b'];  
			const arr2 = ['c'];  
			const arr3 = ['d', 'e'];  
			// ES5 的合并数组  
			arr1.concat(arr2, arr3);  
			// [ 'a', 'b', 'c', 'd', 'e' ]  
			// ES6 的合并数组  
			[...arr1, ...arr2, ...arr3]
			// [ 'a', 'b', 'c', 'd', 'e' ]
		4. 与解构赋值结合
			>const [first, ...rest] = [1, 2, 3, 4, 5];  
			first // 1  
			rest  // [2, 3, 4, 5]  
		5. 将字符串转为数组
			> [...'hello']  
			// [ "h", "e", "l", "l", "o" ]
		6. 将实现了Iterator接口的类数组对象转为真正的数组
			> let nodeList = document.querySelectorAll('div');  
			let array = [...nodeList];  
			这个例子中nodeList就是一个实现了Iterator接口的类数组对象

### Array.from()
- Array.from()：用来将类数组对象和可遍历对象转为真正的数组，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
	- 参数：
		1. 第一个参数是要转换的对象
		2. 可选，第二个参数需要传递一个回调函数，作用类似于map()
		3. 可选，第三个参数用来绑定this
	- 示例：
		> Array.from([1, 2, 3], (x) => x * x) // [1, 4, 9]  
		> Array.from({ length: 2 }, () => 'jack') //['jack', 'jack']

### Array.of()
- Array.of()：将一组值转换为数组
	- 示例：  
		> Array.of() // []  
		> Array.of(undefined) // [undefined]  
		> Array.of(1) // [1]  
		> Array.of(1, 2) // [1, 2]  

### copyWithin()
- copyWithin()：将指定位置的数组成员复制到其他位置（会覆盖原有成员），然后返回当前数组。使用这个方法会修改当前数组
	- 语法：Array.prototype.copyWithin(target, start, end)
	- 参数：
		1. target(必选)：从该位置开始替换数据。如果为负值，表示倒数
		2. start(可选)：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算
		3. end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算
		4. 这三个参数都应该是数值，如果不是，会自动转为数值
	- 示例：
		> [1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]  
		> [1, 2, 3, 4, 5].copyWithin(0, -2, -1) // [4, 2, 3, 4, 5]
		> [].copyWithin.call({length: 5, 3: 1}, 0, 3) // {0: 1, 3: 1, length: 5}

### find()和findIndex()
- find()：返回找到的第一个符合条件的数组成语，如果没找到则返回undefined
	- 语法：Array.find(function(value, index, arr){...},thisValue)
	- 参数：
		1. function：回调函数，函数可以接受三个参数，依次为当前的值、当前的位置和原数组
		2. thisValue：第二个参数用来绑定回调函数的this对象
	- 示例：
		> function f(v){  
		>   return v > this.age;  
		> }  
		> let person = {name: 'John', age: 20};  
		> [10, 12, 26, 15].find(f, person);   // 26
- findIndex()：与find方法类似，返回第一个符合条件的数组成员的位置，没找到则返回-1
	- 示例：
		> [1, 5, 10, 15].findIndex(function(value, index, > arr) {  
        > return value > 9;  
		> }) // 2
	- find和findIndex这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足：
		> [NaN].indexOf(NaN)  // -1  
		> [NaN].findIndex(y => Object.is(NaN, y))  // 0

### fill()
- fill()：fill方法使用给定值，填充一个数组
	- 语法：Array.fill(value, start, end)
	- 参数：
		1. value：用来填充数组的定值
		2. start：填充的起始位置
		3. end：该位置前结束填充
	- 示例：
		> ['a', 'b', 'c'].fill(7, 1, 2) // ['a', 7, 'c']  
		> 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象  
		> let arr = new Array(3).fill({name: "Mike"});  
		> arr[0].name = "Ben";  
		> arr // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

### entries(),keys(),values()
- entries(),keys(),values()：ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
	- 示例：
		> for (let index of ['a', 'b'].keys()) {  
		> console.log(index);  
		> }  
		> // 0  
		> // 1  
		> for (let elem of ['a', 'b'].values()) {  
		>  console.log(elem);  
		> }  
		> // 'a'  
		> // 'b'  
		> for (let [index, elem] of ['a', 'b'].entries()){  
		>  console.log(index, elem);  
		> }  
		> // 0 "a"  
		> // 1 "b"  
		
### includes()
- includes()：Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
	- 参数：该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始
	- 示例：
		> [1, 2, 3].includes(3, 3);  // false  
		> [1, 2, 3].includes(3, -1); // true

### flat()和flatMap()
- flat()：Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响
	- 参数：flat的参数表示要拉平的层数，默认为1
	- 如果原数组有空位，flat()方法会跳过空位
	> [1, 2, , 4, 5].flat() // [1, 2, 4, 5]
- flatMap()：flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组
	- flatMap()只能展开一层数组
	- flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this
## 知识点: in运算符
- 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true
	- 语法：prop in object
	- 参数：
		1. prop：一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）
		2. objectName：检查它（或其原型链）是否包含具有指定名称的属性的对象，必须是一个对象值
    - 示例：
	    > // 数组  
		var trees = new Array("redwood", "bay", "cedar", "oak", "maple");  
		0 in trees        // 返回true  
		3 in trees        // 返回true  
		6 in trees        // 返回false  
		"bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)  

		> "length" in trees // 返回true (length是一个数组属性)  
		
		> Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)  
		
		
		> // 内置对象  
		"PI" in Math          // 返回true  
		
		> // 自定义对象  
		var mycar = {make: "Honda", model: "Accord", year: 1998};  
		"make" in mycar  // 返回true  
		"model" in mycar // 返回true  