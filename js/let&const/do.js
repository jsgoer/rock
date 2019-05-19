// 块级作用域本质上是一个语句，没有返回值，将多条操作封装在一起
{
    let f = function () {
        return 1
    }
    let t = f()
    t = t * t + 1
}

// 在块级作用域外部得不到t的值，es6标准有个do的提案，使块级作用域变为一个表达式
let x = do {
    let f = function () {
        return 1
    }
    let t = f()
    t = t * t + 1
}
console.log(x);
