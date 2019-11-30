// for in 和for of之间的区别

let obj = {
    name: 'zzy',
    age: 18
}

let arr = ['a', 'b', 'c']

for (let i in arr) {
    console.log('i in array: ', i)
}

console.log('--------------------------')

for (let i of arr) {
    console.log('i of array: ', i)
}

console.log('--------------------------')

for (let i in obj) {
    console.log('i in obj: ', i)
}

// 注：for of 不能用于json对象,不可迭代
// for (let i of obj) {
//     console.log('i of obj', i)
// }
