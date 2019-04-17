// 手写new
function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log('I am ' + this.name + ', age :' + this.age)
    }
}

Person.prototype.eat = function () {
    console.log(this.name + ' is eating')
}

// 第一种
function _new(fn) {
    if (typeof fn !== 'function') return
    let obj = {}
    if (fn.prototype) {
        obj.__proto__ = fn.prototype
    }
    // slice只有Array.prototype上有，call是Array上有
    let res = fn.apply(obj, Array.prototype.slice.call(arguments, 1))
    return res instanceof fn ? res : obj
}


// 第二种
function newFn(fun) {
    return function () {
        let obj = {
            __proto__: fun.prototype
        }
        fun.apply(obj, arguments)
        return obj
    }
}


let p = _new(Person, 'zzy', 18)
p.say()
p.eat()



