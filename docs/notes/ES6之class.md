# ES6之class
## class基本语法
传统的生成实例对象的方法是通过构造函数：
```javascript
function Phone(brand, price) {
    this.brand = brand
    this.price = price
}
Phone.prototype.call = function(){
    console.log('我可以打电话')
}
let Huawei = new Phone('华为', 4999)
Huawei.call() //我可以打电话
console.log(Huawei)
```
上面这种写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，所以ES6引入了类class的概念，新的class的写法可以看做语法糖，它只是让对象原型的写法更加清晰、更加像面向对象的语言而已：
```javascript
class Phone{

	// 构造方法，名字不能修改
	constructor(brand, price){
	    this.brand = brand
	    this.price = price
	}
	
	// 添加方法必须使用函数名()，不能使用call：function(){}的形式
	call(){
	    console.log('我可以打电话')
	}
}
let onePlus = new Phone('1+', 1999)
console.log(onePlus)
```
## class静态成员
```javascript
class Phone{
    static name = '手机';
    static change(){
        console.log('我可以改变世界');
    }
}
let nokia = new Phone();
console.log(nokia.name); //undefined
nokia.change() //报错
```
上面代码中，通过在属性或方法前面添加static关键字让name属性和change方法独属于phone这个类，而不是定义在实例对象(this)上的属性或方法
## class的类继承
ES5实现类继承：
```javascript
function Phone(brand, price) {
    this.brand = brand;
    this.price = price;
}
Phone.prototype.call = function(){
    console.log('我可以打电话');
}
function SmartPhone(brand, price, color){
    Phone.call(this, brand, price);
    this.color = color;
}
// 设置子级构造函数的原型
SmartPhone.prototype = new Phone;
SmartPhone.prototype.constructor = SmartPhone;
// 声明子类的方法
SmartPhone.prototype.phote = function(){
    console.log('我可以拍照');
}
```
而Class可以通过extends关键字实现继承，这比ES5实现类继承要简便的多：
```javascript
class Phone {

    // 构造方法
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    // 父类的成员属性
    call() {
        console.log('我可以打电话');
    }
}
class SmartPhone extends Phone{
    // 构造方法
    constructor(brand, price, color) {
        super(brand, price);
        this.color = color;
    }

    phote(){
        console.log('我可以拍照');
    }
}
```
## class中的getter和setter
与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为：
```javascript
class Phone{
    set price(newVal){
        console.log('价格属性被修改了');
    }
    get price(){
        console.log('价格属性被读取了');
        return 'getter'
    }
}
let s = new Phone();
s.price = 1999; //价格属性被修改了
console.log(s.price); //价格属性被读取了 getter
``` 