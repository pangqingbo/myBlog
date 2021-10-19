# ES6之数值的扩展
## 二进制和八进制表示法
- ES6提供了二进制和八进制的新写法，分别用前缀0b（或0B）和0o（或0O）表示

## 数值分隔符
- ES2021，允许 JavaScript 的数值使用下划线（_）作为分隔符
- 这个数值分隔符没有指定间隔的位数，也就是说，可以每三位添加一个分隔符，也可以每一位、每两位、每四位添加一个
```
123_00 === 12_300 // true
12345_00 === 123_4500 // true
12345_00 === 1_234_500 // true
// 小数
 0.000_001
// 科学计数法
 1e10_000
```
- 下面三个将字符串转成数值的函数，不支持数值分隔符
	- Number()
	- parseInt()
	- parseFloat()

## Number.isFinite()、Number.isNaN()
- Number.isFinite()用来检查一个数值是否为有限的，Number.isNaN()用来检查一个值是否为NaN
- Number.isFinite()和Number.isNaN()在参数类型不是数值和NaN时，都会一律返回false

## Number.parseInt()、Number.parseFloat()
- ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变

## Number.isInteger()
- Number.isInteger()用来判断一个数值是否为整数
- 如果参数不是数值，Number.isInteger返回false
- 如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数

## Number.EPSILON
- ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差，也就是2 的 -52 次方
- 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围
```
function withinErrorMargin (left, right) {
  return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
}
 0.1 + 0.2 === 0.3 // false
withinErrorMargin(0.1 + 0.2, 0.3) // true
```

## 安全整数和 Number.isSafeInteger()
- JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），一个数超出这个范围，那么这个数就是不精确的，ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限
	```
	Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
	// true
	Number.MAX_SAFE_INTEGER === 9007199254740991
	// true
	
	Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
	// true
	Number.MIN_SAFE_INTEGER === -9007199254740991
	// true
	```
- Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内

## Math对象的扩展
- Math.trunc方法用于去除一个数的小数部分，返回整数部分
- Math.sign方法用来判断一个数到底是正数、负数、还是零，它会返回以下五种值
	- 参数为正数，返回+1
	- 参数为负数，返回-1
	- 参数为 0，返回0
	- 参数为-0，返回-0
	- 其他值，返回NaN
- Math.cbrt()方法用于计算一个数的立方根(开三次方)
- Math.clz32()方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0，对于小数，Math.clz32方法只考虑整数部分
- 以上几个方法如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN
- Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
```
Math.imul(2, 4)   // 8
Math.imul(-1, 8)  // -8
Math.imul(-2, -2) // 4
```
- Math.fround方法返回一个数的32位单精度浮点数形式
- Math.hypot方法返回所有参数的平方和的平方根
```
Math.hypot(3, 4);        // 5
```
- Math.expm1(x)返回 e的x次方 - 1，即Math.exp(x) - 1
- Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)，如果x小于-1，返回NaN
- Math.log10(x)返回以 10 为底的x的对数，如果x小于 0，则返回 NaN
- Math.log2(x)返回以 2 为底的x的对数，如果x小于 0，则返回 NaN

## BigInt
- 新数据类型，BigInt用来精确表示任意位数的整数，用后缀n和number区分
```
var bInt = 123n
console.log(typeof bInt)
```
- es6还提供了BigInt函数，将非BigInt类型转为BigInt类型，转换规则和Number()一致,没有参数或者参数无法转换为正常数值或是小数都会报错
```
var result = BigInt('123') //123n
result = BigInt() //error
result = BigInt(null) //error
result = BigInt('123n') //error
result = BigInt(1.23) //error
```
