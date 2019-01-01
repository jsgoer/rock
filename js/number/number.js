// 0.1 + 0.2
console.log(0.1 + 0.2)
console.log(Number(0.1) + Number(0.2))

// 在JavaScript中的二进制的浮点数0.1和0.2并不是十分精确，在他们相加的结果并非正好等于0.3，
// 而是一个比较接近的数字 0.30000000000000004 ，所以条件判断结果为 false。
// 那么应该怎样来解决0.1+0.2等于0.3呢? 最好的方法是设置一个误差范围值，通常称为”机器精度“，
// 而对于Javascript来说，这个值通常是2^-52,而在ES6中，已经为我们提供了这样一个
// 属性：Number.EPSILON，而这个值正等于2^-52。这个值非常非常小，在底层计算机已经帮我们运算好，
// 并且无限接近0，但不等于0,。这个时候我们只要判断(0.1+0.2)-0.3小于
// Number.EPSILON，在这个误差的范围内就可以判定0.1+0.2===0.3为true。

function numbersequal(a, b) {
    return Math.abs(a - b) < Number.EPSILON
}

let a = 0.1 + 0.2, b = 0.3     
console.log(numbersequal(a, b))
