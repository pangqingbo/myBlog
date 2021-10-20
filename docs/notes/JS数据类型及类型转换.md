# JS数据类型及类型转换
## 数据类型
JS数据类型分为两大类共八种数据类型
- 原始数据类型
	- Undefined
	- Symbol
	- String
	- Null
	- Number
	- Boolean
	- BigInt
- 引用数据类型
	- Object
- 记忆公式(USONB)

## 类型判断
- typeof
- instanceof
- Object.prototype.toString
- isXXX，比如isArray
- 用相等操作符(==)比较null和undefined时null和undefined是相等的

## 类型转换
### 其他值转布尔(Boolean)
- 使用Boolean函数将其他类型转换为布尔类型

- 除了以下六种值，其余值都会转换为true：
	- undefined
	- null
	- +0和-0
	- NaN
	- 空串

### 其他值转数字(Number)
#### 强制转换
- 调用Number()函数
	- 字符串的空串转为0
	- 字符串包含任何非法的数字都会转为NaN
	- 布尔值true转为1
	- 布尔值false转为0
	- null转为0
	- undefined转为NaN
- 调用parseInt()或parseFloat()
	- 这两个函数专门用来将字符串转为数字

#### 隐式转换
- 使用一元运算符+
- 转换规则和Number函数一样

### 其他值转字符串(String)
#### 强制转换
- 调用toString()方法
	- 例如：
	```javascript
	var a = 123;
	a = a.toString();
	```

	- null和undefined调用该方法会报错，因为这两种类型的数据没有该方法
- 调用String()函数
	- 对于Number Boolean String会String函数会调用toString方法
	- null直接转换为'null'
	- undefined直接转换为'undefined'

#### 隐式转换
- 数据+''
	- 原理和String函数一样


