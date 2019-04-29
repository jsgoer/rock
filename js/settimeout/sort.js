// 利用setTimeout排序 , 睡眠排序
const arr = [1, 5, 3, 8, 6, 9]
for (let i of arr) {
    setTimeout(() => {
        console.log(i);
    }, i)
}
