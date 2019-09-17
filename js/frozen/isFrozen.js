{// Object默认是可扩展的，无限添加属性，也就是非冻结额
    console.log(Object.isFrozen({}));    // false
}

{
    // 一个不可扩展的对象同时也是一个冻结对象
    let obj = Object.preventExtensions({})
    console.log(Object.isFrozen(obj));     // true
}

{
    // 一个非空对象默认也是非冻结的
    let obj = {a: 1}
    console.log(Object.isFrozen(obj));      // false
}
