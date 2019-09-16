let obj = {name: "zzy"};
Object.seal(obj);
obj.age = 10   // 不能添加新属性
console.log(obj);

let newObj = {}

console.log(Object.isSealed(newObj));    // 是否被冻结
