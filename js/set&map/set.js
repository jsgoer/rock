/**
 * @类似数组 只有值value 没有键key,通过构造函数创建一个Set实例
 * @参数是一个数组（类数组）,返回值会默认去重
 * @size Set实例的大小
 * @add 、clear、delete、has
 * @forEach、keys、values
 */

console.log('数组入参: ', new Set([1, 2, 3]))

function fn() {
    console.log('arguments入参: ', new Set(arguments))
}

fn('a', 'b', 'c')

console.log('---------------------')

let s = new Set([2, 4, 6])
console.log('set对象: ', s)
s.add(7)
console.log('添加7: ', s)
let s1 = s.has(4)
console.log('查找4: ', s1)

console.log('---------------------')

let s2 = new Set(['james', 'kobe', 'jordan'])
s2.forEach((item, index, input) => {
    // Set实例只有value,没有key
    // item,index都是当前项
    // input 则是当前实例
    console.log('item: ', item);
    console.log('index: ', index);
    console.log('input: ', input);
})

console.log('---------------------')

console.log('set的keys: ', s2.keys());
for (let key of s2.keys()) {
    // 因为没有key, key 仍然是value
    console.log('key: ', key);
}

console.log('---------------------')

for (let val of s2.values()) {
    // val是value
    console.log('value: ', val);
}

console.log('---------------------')

for (let [key, val] of s2.entries()) {
    // 没有key ，item和val全部是value值 ,两者相等
    console.log('[key,value]: ', key, val);
}

console.log('---------------------')

{
    // 注:如有给set新增一个对象，得先用变量保存后再执行add，否则后面用has来查询这个对象是否存在时为false，因为对象的引用的原因
    let s = new Set()
    let o = {t: 1}
    s.add(o)
    console.log(s.has(o));

    s.add({t: 1})
    console.log(s.has({t: 1}));  // false
}

{
    let obj = new Object()
    let set = new Set([1, 2, 3])
    let map = new Map([['a', 1], ['b', 2], ['c', 3]])
    console.log('Object: ', obj[Symbol.iterator]);
    console.log('Set: ', set[Symbol.iterator]);
    console.log('Map: ', map[Symbol.iterator]);


    // 注: Object不可迭代，但Set、Map可以迭代
    for (let i of obj) {
        console.log(i);
    }

}

