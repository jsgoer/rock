// 手写bind

value = 2
foo = {
    value: 3
}

let bar = function (name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}
Function.prototype._bind = function (newThis) {
    let args = Array.prototype.slice.call(arguments, 1)
    let that = this
    return function () {
        // that.apply(newThis, aArgs.concat(Array.prototype.slice.call(arguments)))
        that.call(newThis, ...args, ...Array.from(arguments))
    }
}

let res = bar._bind(foo, 'zzy')
res(18)


