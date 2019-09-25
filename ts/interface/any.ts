// 任意属性(任意属性一旦定义，则确定属性和可选属性必须是任意属性的子集)
interface Person2 {
    name: string
    age?: number

    [propName: string]: any       // 允许接口额外添加任意属性,propName是任意值
}

let p2: Person2 = {
    name: 'zzy',
    age: 20,
    5: 'male'               // 数字5会被转化为字符串5，Object只能使用string为键值，symbol可使用任意类型
}
console.log(p2);
