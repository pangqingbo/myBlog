# ES6之字符串的扩展
## 字符串的扩展
### 模板字符串
- 模板字符串用反引号（`）标识
	```javascript
	// 多行字符串
	`In JavaScript this is
	 not legal.`
	```

- 模板字符串中嵌入变量，需要将变量名写在${}之中，大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性
	```javascript
	let name = "Bob", time = "today";
	`Hello ${name}, how are you ${time}?`
	```

- 模板字符串之中还能调用函数
	```javascript
	function fn() {
	  return "Hello World";
	}
	
	`foo ${fn()} bar`
	// foo Hello World bar
	```

- 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义
	```javascript
	let greeting = `\`Yo\` World!`;
	```

- 如果模板字符串中的变量没有声明，将报错

### 标签模板
- 标签模板其实是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数
	```javascript
	alert`hello`
	// 等同于
	alert(['hello'])
	```

- 如果模板字符里面有变量，会将模板字符串先处理成多个参数，再调用函数
	```javascript
	let a = 5;
	let b = 10;
	tag`Hello ${ a + b } world ${ a * b }`;
	// 等同于
	tag(['Hello ', ' world ', ''], 15, 50);
	```

## 字符串的新增方法
### String.fromCodePoint()
- 语法：String.fromCharCode(Unicode编码)
- 参数：需要转换的字符的Unicode编码
- ES5 提供String.fromCharCode()方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于0xFFFF的字符，而ES6提供的String.fromCodePoint()方法可以识别大于0xFFFF的字符
- 示例：
	```javascript
	String.fromCodePoint(0x20BB7)
	// "𠮷"
	```

### String.raw()
- ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法
- String.raw()方法会将模板字符串的所有变量替换，而且对斜杠进行转义

### 实例方法：codePointAt()
- codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的十进制码点,但也不能完美的返回，如下
	```javascript
	let s = '𠮷a';
	s.codePointAt(0) // 134071
	s.codePointAt(1) // 57271
	s.codePointAt(2) // 97
	```
	```javascript
	var s = "𠮷";
	s.charCodeAt(0) // 55362
	s.charCodeAt(1) // 57271
	```

- 为了解决codePointAt的缺陷，有两种办法：
	1. 使用for...of循环，因为它会正确识别 32 位的 UTF-16 字符
	```javascript
	let s = '𠮷a';
	for (let ch of s) {
	  console.log(ch.codePointAt(0).toString(16));
	}
	// 20bb7
	// 61
	```

	2. 使用扩展运算符（...）
	```javascript
	let arr = [...'𠮷a']; // arr.length === 2
	arr.forEach(
	  ch => console.log(ch.codePointAt(0).toString(16))
	);
	// 20bb7
	// 61
	```

### 实例方法：normalize() 
- normalize()用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化
- normalize方法目前不能识别三个或三个以上字符的合成
	```javascript
	'\u01D1'==='\u004F\u030C' //false
	'\u01D1'.normalize() === '\u004F\u030C'.normalize() // true
	```

### 实例方法：includes(), startsWith(), endsWith()
- 传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中
- ES6又提供了三种新方法来确定一个字符串是否包含在另一个字符串中
- includes()：返回布尔值，表示是否找到了参数字符串
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部
- 这三个方法都支持第二个参数，表示开始搜索的位置
- 示例：
	```javascript
	let s = 'Hello world!';
	s.startsWith('world', 6) // true
	s.endsWith('Hello', 5) // true
	s.includes('Hello', 6) // false
	```
- 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束

### 实例方法：repeat()
- repeat方法返回一个新字符串，表示将原字符串重复n次
- 参数如果是小数，会被取整
- 如果repeat的参数是负数或者Infinity，会报错
- 如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算
- 参数NaN等同于 0
- 如果repeat的参数是字符串，则会先转换成数字
- 示例：
	```javascript
	'x'.repeat(3) // "xxx"
	'na'.repeat(2.9) // "nana"
	'na'.repeat(Infinity) // RangeError
	'na'.repeat(-1) // RangeError
	'na'.repeat(NaN) // ""	
	'na'.repeat('3') // "nanana"
	```

### 实例方法：padStart()，padEnd()
- ES2017引入padStart()用于头部补全，padEnd()用于尾部补全
- padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串
- 如果省略第二个参数，默认使用空格补全长度
- 示例：
	```javascript
	'x'.padStart(5, 'ab') // 'ababx'
	'x'.padStart(4, 'ab') // 'abax'

	'x'.padEnd(5, 'ab') // 'xabab'
	'x'.padEnd(4, 'ab') // 'xaba'
	```

### 实例方法：trimStart()，trimEnd()
- trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格
- 它们返回的都是新字符串，不会修改原始字符串
- trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名
- 示例：
	```javascript
	const s = '  abc  ';
	s.trim() // "abc"
	s.trimStart() // "abc  "
	s.trimEnd() // "  abc"
	```

### 实例方法：matchAll()
- matchAll()方法返回一个正则表达式在当前字符串的所有匹配

### 实例方法：replaceAll()
- replaceAll()方法，用来一次性替换所有匹配
- 它的用法与replace()相同，返回一个新字符串，不会改变原字符串
- 使用replaceAll时如果第一个参数是不带有g修饰符的正则表达式，则报错
- replaceAll()的第二个参数replacement是一个字符串，表示替换的文本，其中可以使用一些特殊字符串，如下：
	1. $&：匹配的字符串。
	2. $` ：匹配结果前面的文本。
	3. $'：匹配结果后面的文本。
	4. $n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
	5. $$：指代美元符号$。
	```javascript
	// $& 表示匹配的字符串，即`b`本身
	// 所以返回结果与原字符串一致
	'abbc'.replaceAll('b', '$&')
	// 'abbc'
	// $` 表示匹配结果之前的字符串
	// 对于第一个`b`，$` 指代`a`
	// 对于第二个`b`，$` 指代`ab`
	'abbc'.replaceAll('b', '$`')
	// 'aaabc'
	// $' 表示匹配结果之后的字符串
	// 对于第一个`b`，$' 指代`bc`
	// 对于第二个`b`，$' 指代`c`
	'abbc'.replaceAll('b', `$'`)
	// 'abccc'
	// $1 表示正则表达式的第一个组匹配，指代`ab`
	// $2 表示正则表达式的第二个组匹配，指代`bc`
	'abbc'.replaceAll(/(ab)(bc)/g, '$2$1')
	// 'bcab'
	// $$ 指代 $
	'abc'.replaceAll('b', '$$')
	// 'a$c'
	```

- replaceAll()的第二个参数可以是函数，该函数的返回值将替换掉第一个参数匹配的文本
	```javascript
	'aabbcc'.replaceAll('b', () => '_')
	// 'aa__cc'
	```