/**
 * @desc 判断是否是数组
 * @param val
 * @return {boolean}
 */
function isArray(val) {
    let toString = Object.prototype.toString
    return toString.call(val) === '[object Array]'
}

let arr = []
console.log(isArray(arr));
