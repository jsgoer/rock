/**
 * @desc 判断是否是一个对象  (from vue)
 * @param obj
 * @return {boolean}
 */
function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

let obj = '';
console.log(isObject(obj));
