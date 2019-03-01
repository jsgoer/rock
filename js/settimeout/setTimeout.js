// 普通定时器里面的this指向全局作用域，箭头函数的this指向声明时的调用
function foo() {
    setTimeout(() => {
        console.log(this);
    }, 100);
}

var id = 21;

foo.call({id: 42});
