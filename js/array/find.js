/**
 *Array.find((item,index,arr)=>{})
 */
let list = [1, 2, 3, 4, 5]
let res = list.find((item, index, arr) => {
    return item > 3
})
console.log(res)    // 4

let res2 = list.filter((item, index, arr) => {
    return item > 3
})

console.log(res2)   // [4, 5]

//findIndex
let arr = ['a', 'b', 'c', 'd']
let res3 = arr.findIndex((item, index, arr) => {
    return item == 'b'
})
console.log(res3)