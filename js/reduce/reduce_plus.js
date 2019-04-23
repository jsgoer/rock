// reduce的高级用法
{
    // 统计数组中每个元素的个数，给初始值一个空对象
    let arr = ['a', 'b', 'c', 'b', 'b', 'c']
    let res = arr.reduce((prev, cur) => {
        if (cur in prev) {
            prev[cur] += 1
        } else {
            prev[cur] = 1
        }
        return prev
    }, {})
    console.log(res);
}

{
    // 数组去重
    let arr = [1, 2, 2, 3, 4, 4, 4]
    let res = arr.reduce((prev, cur) => {
        if (!prev.includes(cur)) {
            return prev.concat(cur)
        } else {
            return prev
        }
    }, [])
    console.log(res);
}

{
    // 将二维数组转化为一维，设置初始值[]
    let arr = [[0, 1], [2, 3], [4, 5]]
    let res = arr.reduce((prev, cur) => {
        return prev.concat(cur)
    }, [])
    console.log(res);
}

{
    // 将多维数组转为一维，初始值[]
    let arr = [[1, 2], 3, [[[4], 5]]]
    let res = function (arr) {
        return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? res(cur) : cur), [])
    }
    console.log(res(arr));
}


