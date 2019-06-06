// 泛型(在定义函数、接口或类的时候，不预先指定具体的类型，而在使用时再指定类型的一种特征)
function createArray(length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    return res;
}
console.log(createArray(3, 'x'));
