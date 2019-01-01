//将字符串转换为二进制
function strToBin(str) {
    let res = []
    let list = str.split('')
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        // 将字符串转为二进制数据
        let binStr = item.charCodeAt().toString(2)
        res.push(binStr)
    }
    return res.join('|')
}

let str = 'zhang'
console.log(strToBin(str))

// 二进制转化为字符串
function binToStr(str) {
    let res = []
    let list = str.split('|')
    console.log(list)
    for (let i = 0; i < list.length; i++) {
        let item = list[i]
        // 转化为ascii码
        let asciiCode = parseInt(item, 2)
        // 转换为文字
        let charVal = String.fromCharCode(asciiCode)
        res.push(charVal)
    }
    return res.join('')
}

let str1 = '1111010|1101000|1100001|1101110|1100111'
console.log(binToStr(str1))