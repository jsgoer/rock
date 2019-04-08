// 手写apply方法

Function.prototype._apply = function () {
    console.log(arguments[1]);
    // 获取传入的上下文
    let ctx = arguments[0] || window
    // 将student实例被调用的方法绑定到this(Person上)
    ctx.fn = this
    ctx.fn(...arguments[1])
    delete ctx.fn
}

// 验证apply
function Person(arr) {
    this.name = arr[0]
    this.age = arr[1]
    this.sayName = function () {
        console.log('name : ' + this.name + '; age : ' + this.age);
    }
}

function Student(name) {
    Person._apply(this, arguments)
}

let s = new Student(['zzy', 18])
s.sayName()
