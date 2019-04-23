// 手写reduce之二版
Array.prototype._reduce = function (fn, init) {
    let prev, index
    if (init) {
        // 如果存在初始值，则prev取init，index从0开始
        prev = init
        index = 0
    } else {
        // 如果初始值不存在，则prev取给定数组的第一项，index从1开始，因为第二个参数cur才是当前索引的值
        prev = this[0]
        index = 1
    }
    for (let i = index; i < this.length; i++) {
        prev = fn(prev, this[i], i, this)
    }
    return prev
}
let arr = [1, 2, 3]
console.log(arr._reduce((prev, cur) => prev + cur, 1));
