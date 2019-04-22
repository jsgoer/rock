// 手写repeat(最low的写法)
function _repeat(str) {
    let newStr = ''
    let count = arguments[1]
    let i = 0
    while (i < count) {
        newStr += str
        i++
    }
    return newStr
}

let str = 'zzy'
console.log(_repeat(str, 3));
