// 泛型(在定义函数、接口或类的时候，不预先指定具体的类型，而在使用时再指定类型的一种特征)
function createArray<T>(length: number, value: T): Array<T> {
    let res: T[] = []
    for (let i = 0; i < length; i++) {
        res[i] = value
    }
    return res
}

console.log(createArray<string>(3, 'x'));