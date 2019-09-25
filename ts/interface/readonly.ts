// 只读属性(要求对象中的属性只有在创建时被赋值)
interface Person3 {
    readonly id: number
    name: string
    age: number

    [propName: string]: any
}

let p3: Person3 = {
    id: 1,
    name: 'zzy',
    age: 20,
    sex: 'male'
}
// p3.id = 2    // id不能被重复赋值
p3.name = 'igsnow'
console.log(p3);
