/**
 * @reduce
 * @params{prev,cur,index,arr} initialValue
 */
let arr = [1, 2, 3]
// 初始值可以是任意值,随后和数组中遍历的值相加，类型不同的话会发生隐私类型转换
let res = arr.reduce((prev, cur, index, arr) => {
    // console.log(prev, cur, index, arr);
    return prev + cur
}, {name: 'zzy'})

console.log(res);

