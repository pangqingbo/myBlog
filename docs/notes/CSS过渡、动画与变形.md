# CSS 过渡、动画与变形
## CSS过渡
通过过渡可以指定一个属性发生变化时的切换方式，提升用户体验
- 格式：
	```css
	transition: transition-property transition-duration transition-timing-function transition-delay
	```
- transition-property: 指定要执行过渡的属性
	- 多个属性间使用,隔开
	- 如果所有属性都需要过渡，则使用all关键字
- transition-duration: 指定过渡效果的持续时间
- transition-timing-function: 过渡的时序函数
	- 可选值：
	- ease 默认值，慢速开始，先加速，再减速
	- linear 匀速运动
    - ease-in 加速运动
    - ease-out 减速运动
    - ease-in-out 先加速 后减速
    - cubic-bezier() 来指定时序函数
    - steps() 分步执行过渡效果，可以指定第二个值：
	    - end ， 在时间结束时执行过渡(默认值)
        - start ， 在时间开始时执行过渡
- transition-delay: 过渡效果的延迟，等待一段时间后在执行过渡

## CSS动画
动画和过渡类似，不过动画可以自动触发动态效果

### 关键帧@keyframes
设置动画效果，必须先要设置一个关键帧，关键帧设置了动画执行每一个步骤
- 格式：
	```css
	@keyframes keyframes-name {
		from {...}
		20% {...}
		30% {...}
		40% {...}
		...
		/* to可以写成100%，同理from也可以写成0% */
		to {...}
	}
	```

### 动画属性
- animation-name: 要对当前元素生效的关键帧的名字
- animation-duration: 动画的执行时间
- animation-timing-function:动画执行的时序函数
- animation-delay:动画的延时
- animation-iteration-count:动画执行的次数
- animation-direction:指定动画运行的方向
	- 可选值：
    - normal 默认值  从 from 向 to运行 每次都是这样 
    - reverse 从 to 向 from 运行 每次都是这样 
    - alternate 从 from 向 to运行 重复执行动画时反向执行
    - alternate-reverse 从 to 向 from运行 重复执行动画时反向执行
- animation-play-state: 设置动画的执行状态
	- 可选值：
    - running 默认值 动画执行
    - paused 动画暂停
- animation-fill-mode: 动画的填充模式
    - 可选值：
	- none 默认值 动画执行完毕元素回到原来位置
    - forwards 动画执行完毕元素会停止在动画结束的位置
    - backwards 动画延时等待时，元素就会处于开始位置
    - both 结合了forwards 和 backwards

## CSS变形
CSS 变形（transforms）允许您移动、旋转、缩放和倾斜元素
### 平移
- 格式：
	```css
	transform: translateX(100px) /* 沿着x轴方向平移 */
    transform: translateY(-100px) /* 沿着y轴方向平移 */
    transform: translateZ(50%) /* 沿着z轴方向平移 */
	transform: translateZ(50%) translateY(-50%) /* 多个translate之间用空格隔开 */
	```
- 平移元素，百分比是相对于自身计算的，所以通常可以利用平移使没有设置宽高的元素居中
- z轴平移属于立体效果（近大远小），默认情况下网页是不支持透视，如果需要看见效果，必须要设置网页的视距：
	```css
	html{
		/* 设置当前网页的视距为800px，人眼距离网页的距离 */
		perspective: 800px
	}
	```

### 旋转
- 格式： 
	```css
	transform: rotateX(.25turn); /* 沿x轴旋转0.25圈 */
	transform: rotateY(.25turn); /* 沿y轴旋转0.25圈 */
	transform: rotateZ(.25turn); /* 沿z轴旋转0.25圈 */
	transform: rotateZ(.25turn);
    transform: rotateY(180deg) translateZ(400px);
    transform: translateZ(400px) rotateY(180deg);
    backface-visibility: hidden; /* 是否显示元素的背面 */
	```

### 缩放
- 格式：
	```css
	scaleX() /* 水平方向缩放 */
    scaleY() /* 垂直方向缩放 */
    scale() /* 双方向的缩放 */
	transform-origin:20px 20px; /* 变形的原点 默认值 center*/
	```