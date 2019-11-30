// 和Object对比，对象终将key值转化为字符串
let o = new Object({false: undefined, [[1, 2, 3]]: [1, 2], [{'age': 1}]: {'age': 1}, 18: 'zzy'})
console.log('Obj: ', o);

console.log('---------------------')

let oo = {'nba': 'james'}
let m1 = new Map([['age', 26], [2016, 'hangzhou'], [null, 'money'], [undefined, 'job'], [[], {'name': 'zzy'}], [true, false], [oo, {'time': 2003}]])
console.log('Map: ', m1);
console.log('Map get: ', m1.get(oo));
m1.set(1, 2)
console.log('Map set: ', m1)
console.log('Map has: ', m1.has(1));
console.log('Map delete age: ', m1.delete('age'));
console.log('Map delete age : ', m1);
m1.clear()
console.log('Map clear: ', m1);

console.log('---------------------');

let m2 = new Map([['age', 26], [2016, 'hangzhou'], [null, 'money'], [undefined, 'job'], [[], {'name': 'zzy'}], [true, false], [oo, {'time': 2003}]])
m2.forEach((val, key, input) => {
    console.log('forEach item: ', val, key);
})

console.log('---------------------');

for (let key of m2.keys()) {
    console.log('key: ', key);
}
console.log('---------------------');

for (let val of m2.values()) {
    console.log('val: ', val);
}

console.log('---------------------');

for (let [key, val] of m2.entries()) {
    console.log('[key,val]: ', key, val);
}

console.log('---------------------');

let arr = [11, 22, 33, 33]
console.log('数组去重: ', new Set(arr));

let m3 = new Map()
for (let [key, val] of arr.entries()) {
    m3.set(key, val)
}
console.log(m3);
