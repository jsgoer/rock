// 项目中经常遇到保留两位小数的问题，直接使用toFixed会有坑
function round(num, decimal) {
    if (isNaN(num)) {
        return 0;
    }
    const p1 = Math.pow(10, decimal + 1);
    const p2 = Math.pow(10, decimal);
    return Math.round(num * p1 / 10) / p2;
}

function toFixed(num, decimal) {
    return round(num, decimal).toFixed(decimal);
}


console.log(toFixed(3724.225, 2));
let num = 1.225
console.log(num.toFixed(2));
