/**
 *  宏任务与微任务的区别
 *  js是单线程的
 *  console.log等同步代码立刻放入主线程先执行，级别最高
 *  setTimeout、DOM渲染、鼠标、键盘点击事件等放入宏任务，级别较低
 *  Promise放入微任务，级别较高
 */

setTimeout(() => {
    console.log('定时器');
}, 0)

Promise.resolve().then(res => {
    console.log('Promise');
})

console.log('igsnow')