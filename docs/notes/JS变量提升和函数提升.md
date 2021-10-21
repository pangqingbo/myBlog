# JS变量提升和函数提升
## JS变量提升和函数提升
正常情况下，我们会选择使用“先声明，后调用”的方式去使用变量，但假如反过来，我们“先调用，后声明”，会发生什么呢？
```javascript
console.log(a) // undefined
var a = 3
console.log(a) // 3

// 上面代码等价于下面的代码
var a
console.log(a) // undefined
a = 3
console.log(a) // 3
```
正如上面的例子一样，变量在真正执行到赋值语句前，我们就已经可以使用到此变量，不过初始值为undefined，而不是预期的报错语句。这就叫做**变量提升**。

而对于函数的声明和使用，也会出现类似的情况：
```javascript
console.log(foo) // function foo() {}
foo = 3
console.log(foo) // 3
function foo() {}

// 相当于下面的代码
var foo
foo = function() {}
console.log(foo) // function foo() {}
foo = 3
console.log(foo) // 3
```
在执行声明函数语句之前，我们已经可以调用函数方法并正确输出。这便是**函数提升**。

需要注意的是，函数声明的处理优先级要高于变量声明（意味着函数会“提升”到更靠前的位置）
## 匿名函数声明
基于变量声明和函数声明之间的区别，在实际应用中，使用匿名函数的方式执行声明更不容易产生奇怪的 Bug：
```javascript
sayHi() // Uncaught TypeError: sayHi is not a function
console.log(sayHi) // undefined
var sayHi = function() {
    console.log('Hi there!')
}
sayHi() // Hi there!
```
使用匿名函数声明时，sayHi 声明发生变量提升，但赋值为 undefined，因此执行 sayHi() 时会报错 Uncaught TypeError: sayHi is not a function。随后执行完赋值语句后，才成为一个可以执行的函数变量。