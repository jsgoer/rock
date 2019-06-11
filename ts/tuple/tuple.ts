// 元祖合并了不同类型的对象
let zzy: [string, number, boolean]
zzy = ['igsnow', 20, false]
zzy.push('http://www.baidu.com')
zzy.push(true)
console.log(zzy);   // TODO 怎么zzy.length = 5 但是打印zzy[4]就报错?
