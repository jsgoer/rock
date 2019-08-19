/**
 * @desc 获取具体的类型名称
 * @param val
 * @return {string}
 */
function toRawType(val) {
    const _toString = Object.prototype.toString;
    return _toString.call(val).slice(8, -1)

}

let data = new Function()
console.log(toRawType(data));
