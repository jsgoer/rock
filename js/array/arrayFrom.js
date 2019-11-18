/**
 * 伪数组的定义
 * 1.有可遍历的索引
 * 2.有length属性
 */
// 将一个类数组或者可迭代对象创建一个新的、浅拷贝的数组
console.log(Array.from('zhang'));

// 第二个参数传入一个映射函数，迭代每个item
console.log(Array.from('zhang', item => item + '!'));

// 第三个函数，映射函数中this指向的对象
let targetObj = {
    handle(n) {
        return n + 1
    }
}

console.log(Array.from([1, 2, 3, 4, 5], function (item) {
    return this.handle(item)
}, targetObj));

// {length:5}也是一个伪数组
let arr = Array.from({length: 5}).fill(1, 1, 3)
console.log(arr);
