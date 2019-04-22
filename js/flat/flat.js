/**
 * @flat
 * @扁平化数组
 * @现在还存在兼容问题，还没成为规范
 */
let arr = [[1, 2], 3, [[[4], 5]]]
console.log(arr.flat(3));
