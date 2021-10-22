# JS宏任务和微任务
## 什么是宏任务、微任务？
首先，宏任务、微任务必须是异步执行的回调函数，例如：
```javascript
setTimeout(getList,5000)
```

宏任务：
- 整体代码script
- 用户交互事件(如鼠标点击、滚动页面、鼠标移入等)
- 常用的定时器(如setTimeout和setIterval)
- 网络请求、文件读写完成事件

微任务：
- 原生Promise
- MutationObserver

宏任务和微任务就分为上面几类，记住就行了
## 每个宏任务对应了一个微任务队列
每一个宏任务，都对应了一个微任务队列，没什么特别的，你现在知道了这点，而且知道了哪些是宏任务和微任务

## 全局的同步代码是特殊的宏任务
全局的同步执行代码，也要看成一个宏任务，那这个宏任务，也对应了他的微任务队列

## 宏任务和微任务执行机制
整个页面的系统调度可以看成一个for循环：
- 首先执行全局的同步代码
- 执行完全局的同步代码后读取全局同步代码对应的微任务队列并且执行
- 执行完微任务队列，再继续执行需要执行的宏任务
- 执行完宏任务再执行对应的微任务队列
- 然后继续循环执行需要执行的宏任务...

用一张图来讲解就是：
<img src="https://i.loli.net/2021/10/22/p1KBzQPUcI9yf3q.png" >

## 看个栗子
```javascript
console.log(1)
setTimeout(() => {
    console.log(4)
}, 1000)
console.log(2)
Promise.resolve().then(() => {
    console.log(3)
})
```
- 首先执行整个script的同步代码，碰到console.log(1)和console.log(2)输出1，2
- 然后执行宏任务对应的微任务队列Promise.resolve().then...输出3
- 之后再回去执行宏任务setTimeout输出4

所以结果是1，2，3，4


