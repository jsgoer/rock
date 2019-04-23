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
    // 判断元素是个在某个对象中
    let obj = {
        a: 1
    }
    let b = 'a'
    console.log(b in obj);
}
