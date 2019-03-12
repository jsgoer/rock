// 对象的对比，对象终将key值转化为字符串
// let o = new Object({false: undefined, [[1, 2, 3]]: [1, 2], [{'age': 1}]: {'age': 1}, 18: 'zzy'})
// console.log(o);

let oo = {'nba': 'james'}
let m1 = new Map([['age', 26], [2016, 'hangzhou'], [null, 'money'], [undefined, 'job'], [[], {'name': 'zzy'}], [true, false], [oo, {'time': 2003}]])
console.log(m1);
console.log(m1.get(oo));
m1.set(1, 2)
console.log(m1.has(1));
console.log(m1.delete('age'));
console.log(m1);
m1.clear()
console.log(m1);

console.log('------------------');
let m2 = new Map([['age', 26], [2016, 'hangzhou'], [null, 'money'], [undefined, 'job'], [[], {'name': 'zzy'}], [true, false], [oo, {'time': 2003}]])
m2.forEach((val, key, input) => {
    console.log(val + '-' + key + '-' + input);
})

console.log('------------------');
for (let key of m2.keys()) {
    console.log(key);
}
console.log('------------------');
for (let val of m2.values()) {
    console.log(val);
}

console.log('------------------');
for (let [key, val] of m2.entries()) {
    console.log(key + '-' + val);
}

let arr = [11, 22, 33, 33]
console.log(new Set(arr));
let m3 = new Map()
for (let [key, val] of arr.entries()) {
    m3.set(key, val)
}
console.log(m3);
