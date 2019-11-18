// 通过改变变量作用域
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);      // 间隔1s输出，相对于开始放入队列的时间间隔是一样的
}


console.log(a);   // undefined     var会出现变量提升，let不会
var a = 5;
