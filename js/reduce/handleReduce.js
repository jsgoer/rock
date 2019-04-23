// 手写reduce

Array.prototype._reduce = function (fn, initVal) {
    let initArr = this
    let arr = initArr.concat()
    if (initVal) arr.unshift(initVal)
    let index, newVal
    while (arr.length > 1) {
        index = initArr.length - arr.length + 1
        newVal = fn.call(null, arr[0], arr[1], index, initArr)
        arr.splice(0, 2, newVal)
    }
    return newVal
}

let arr = [1, 2, 3]
let res = arr._reduce((prev, cur) => {
    return prev + cur
}, 1)
console.log(res);
