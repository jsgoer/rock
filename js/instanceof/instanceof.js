// 手写instanceof
function _instanceof(left, right) {
    let proto = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (proto === null) return false            // 当到达顶层对象Object时，就没有__proto__
        if (proto === prototype) return true       // 实例对象的__proto__等于构造函数的prototype
        proto = proto.__proto__;                   // 每一个对象都有自己的__proto__
    }
}

console.log(_instanceof([], Array));
