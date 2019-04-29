// 返回两个数组之间的差异值
const difference = (a, b) => {
    const s = new Set(b)
    return a.filter(item => !s.has(item))
}

let res = difference([1, 2, 3], [1, 2, 4])
console.log(res);
