/**
 * @desc 验证是否是正则
 * @param v
 * @return {boolean}
 */
function isRegExp(v) {
    const _toString = Object.prototype.toString;
    return _toString.call(v) === '[object RegExp]'
}

let r = /<\w+?>/
console.log(isRegExp(r));
