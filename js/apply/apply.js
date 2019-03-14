{
    let arr = [1, 2, 3, 4]
    let ele = [5, 6, 7]
    console.log(arr.push(ele));  // 返回arr新的长度为5,因为ele将被作为一个整体push进去
    console.log(arr);    // [ 1, 2, 3, 4, [ 5, 6, 7 ] ]
}
// 如果不使用扩展运算符等操作如 arr.push(...ele)  则可以使用apply方法
{
    let arr = [1, 2, 3, 4]
    let ele = [5, 6, 7]
    arr.push.apply(arr, ele)
    console.log(arr);
}

{
    let nums = [1, 2, 3, 4]
    console.log(Math.max(nums));
    console.log(Math.max.apply(null, nums));
}

{
    // 基本用法
    function add(a, b) {
        return a + b
    }

    function red(a, b) {
        return a - b
    }

    console.log(add.apply(red, [1, 2]));   // 3          red调用add的方法
    console.log(red.apply(add, [1, 2]));   // -1
}
