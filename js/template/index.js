// 字符串换行
let str = `lebron

james`
console.log(str);

// 带标签的模板字符串
let person = 'zzy',
    age = 10

console.log('-----------------')

function tag(string, personReg, ageReg) {
    let str1 = string[0]
    let str2 = string[1]
    let ageTxt = ageReg > 35 ? 'old man' : 'young man'
    return `${str1} ${personReg} ${str2} ${ageTxt}`
}

let res = tag`that${person}is a${age}`
console.log(res);