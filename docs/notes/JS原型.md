# JS原型
## 原型
Javascript规定，每一个函数都有一个prototype对象属性。prototype(对象属性)的所有属性和方法，都会被构造函数的实例继承。这意味着，我们可以把那些不变(公用)的属性和方法，直接定义在prototype对象属性上。

prototype就是调用构造函数所创建的那个实例对象的原型（proto）。

需要注意的是，只有函数才有prototype属性

例如：
```javascript
function Person() {}
var p = new Person()
console.log(Person.prototype); // Object{} 
console.log(p.prototype); //undefined
```
## 原型链
实例对象与原型之间的连接，叫做原型链。

JS在创建对象的时候，都有一个叫做proto的内置属性，用于指向创建它的函数对象的原型对象prototype。
## 关于constructor
在 Javascript 语言中，constructor 属性是专门为 function 而设计的，它存在于每一个 function 的prototype 属性中。这个constructor 保存了指向 function 的一个引用。

直接上代码更容易理解：
```javascript
function Person() {}
var p = new Person()
console.log(Person.prototype); // Object{} 
console.log(p.prototype); // undifined
console.log(p.constructor); //function Person(){}
// 这里的p是通过 Person函数构造出来的，所以p的constructor属性指向Person
console.log(Person.constructor); //function Function(){}
// 每个函数其实是通过new Function（）构造的
console.log({}.constructor); // function Object(){}
// 每个对象都是通过new Object（）构造的
console.log(Object.constructor); // function Function() {}
// Object也是一个函数，它是Function（）构造的
console.log([].constructor);  //function Array(){}
```
## 原型prototype的用法
prototype最大的作用就是共享属性和方法：
```javascript
function Person(name,age){
    this.name = name;
    this.age = age;
    
}
Person.prototype.sayHello=function(){
    console.log(this.name + "say hello");
}
var girl = new Person("bella",23);
var boy = new Person("alex",23);
console.log(girl.name);  //bella
console.log(boy.name);   //alex
console.log(girl.sayHello === boy.sayHello);  //true 
```
## __proto__和prototype的关系
JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做 __proto__ 的内置属性，用于指向创建它的构造函数的原型对象。
```javascript
var obj = {}
此处等价于 var obj = new Object()
console.log(obj.__proto__ === Object.prototype)//true  
```
根据前面的例子我们很清楚，obj是通过new Object 构造出来的一个对象，那我们Object的原型对象就是Object.prototype，在Object下面构造出来的所有对象，都有一个__proto__ 指向它的原型，我们称这个为原型链。
