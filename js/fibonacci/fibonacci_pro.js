// 简洁的写法
const fibonacci = max => {
    let [prev, cur] = [0, 1]
    while (cur <= max) {
        [prev, cur] = [cur, prev + cur]
        console.log(prev);
    }
}

fibonacci(1000)
