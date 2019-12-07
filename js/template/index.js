// es5的字符串换行，通过拼接的方式
{
    let str = 'lebron \n' +
        '\n' +
        'james'
    console.log('es5字符串换行: ', str);
}

console.log('-----------------')

// 字符串换行，空行也直接显示
{
    let str = `lebron

james`
    console.log('es6字符串换行: ', str);
}

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