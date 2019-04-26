// 洗牌函数
const shuffle = function ([...arr]) {
    let m = arr.length
    while (m) {
        // 随机数的时候自减减
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr
}

let foo = [1, 2, 3, 4, 5]
console.log(shuffle(foo));
