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
