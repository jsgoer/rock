// 手写flat数组扁平化
// 需要用到递归，所以不适合写到数组的原型上，直接定义函数=>reduce模块也有

function _flat(arr) {
    return [].concat(...arr.map(item => Array.isArray(item) ? _flat(item) : item))
}

let arr = [[1, 2], 3, [[[4], 5]]]
console.log(_flat(arr));

