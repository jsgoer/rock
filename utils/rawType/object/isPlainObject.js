/**
 * @desc 判断对象是否是普通对象(from redux)
 * @param obj
 * @return {boolean}
 */
function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null) return false
    let proto = obj
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(obj) === proto
}

let obj = {}                           // true
// let obj = Object.create(null)       // false
console.log(isPlainObject(obj));

