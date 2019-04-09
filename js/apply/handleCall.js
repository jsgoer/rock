// 手写call方法

Function.prototype._call = function () {
    // 获取传入的上下文
    let ctx = arguments[0] || window
    // 将student实例被调用的方法绑定到this(Person上)
    ctx.fn = this
    ctx.fn(...arguments[1])
    delete ctx.fn
}

// 验证apply
function Person(name, age) {
    this.name = name
    this.age = age
    this.sayName = function () {
        console.log('name : ' + this.name + '; age : ' + this.age);
    }
}

function Student(name) {
    console.log(arguments);
    Person._call(this, arguments)
}

let s = new Student('zzy', 18)
s.sayName()
