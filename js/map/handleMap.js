// 手写map，自定义的回调函数传入内部,入参数组的子项
Array.prototype._map = function (fn) {
    let arr = []
    this.forEach(item => {
        arr.push(fn(item))
    })
    return arr
}
let arr = [1, 2, 3]
console.log(arr._map(v => v ** 2));

