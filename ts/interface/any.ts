// 任意属性(任意属性一旦定义，则确定属性和可选属性必须是任意属性的子集)
interface Person2 {
    name: string
    age?: number

    [propName: string]: any
}

let p2: Person2 = {
    name: 'zzy',
    age: 20,
    sex: 'male'
}
console.log(p2);