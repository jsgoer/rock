/** @类似数组 只有值value 没有键key,通过构造函数创建一个Set实例
 * @参数是一个数组（类数组）,返回值会默认去重
 * @size Set实例的大小
 * @add 、clear、delete、has
 * @forEach、keys、values
 */

console.log(new Set([1, 2, 3]))

function fn() {
    console.log(new Set(arguments))
}

fn('a', 'b', 'c')

console.log('---------------------')

let s = new Set([2, 4, 6])
console.log(s)
s.add(7)
let s1 = s.has(4)
console.log(s1)
console.log(s)

console.log('---------------------')

let s2 = new Set(['james', 'kobe', 'jordan'])
s2.forEach((item, index, input) => {
    // Set实例只有value,没有key
    // item,index都是当前项
    // input 则是当前实例
    console.log('item ' + item);
    console.log('index ' + index);
    console.log('input ' + input);
})

console.log('---------------------')

console.log(s2.keys());
for (let key of s2.keys()) {
    // 因为没有key, key 仍然是value
    console.log(key);
}

console.log('---------------------')

for (let val of s2.values()) {
    // val是value
    console.log(val);
}

console.log('---------------------')

for (let [item, val] of s2.entries()) {
    // 没有key ，item和val全部是value值
    console.log(item, val);
}

