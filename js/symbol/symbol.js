// symbol是一个新的数据类型，是一个基本数据类型，值类型
// 使用symbol函数得到一个symbol数据类型
// symbol 跟字符串差不多，但是使用symbol函数得到一个数据，每一个都是不同的
// symbol 可以接受一个参数(), 对symbol数据的描述
let s = Symbol()
console.log(typeof s);

let s1 = Symbol('name')
let s2 = Symbol('name')
let obj = {
    s1: 'zzy',
    [s1]: 'zzy',
    [s2]: 'jay',
    s1: 'james'
}
console.log(obj);  // 对象的键为同一个字符串时，后一个属性名会覆盖前面的属性；但是symbol作为键，属性不会覆盖

//console.log(Symbol(1) + 1);  // symbol不能和其他值计算,不能转换为数字，但可以转为boolean
// 可以转为字符串 toString()

// Symbol.for()找到相同参数的Symbol的值,找到则返回，没有就创建一个新的Symbol值
let s3 = Symbol.for('zzy')
let s4 = Symbol.for('zzy')
console.log(s3 === s4);

