// 将键值对列表转换为对象，nodejs还不支持
let arr = new Map([['name', 'zzy'], ['age', 10]])
console.log(Object.fromEntries(arr));
