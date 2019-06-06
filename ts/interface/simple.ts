/**
 * @interface
 * 1.对类的一部分行为进行抽象
 * 2.对对象的形状进行描述
 */
// 简单接口，类型必须完全匹配接口的定义，多一个少一个都不行
interface Person {
    name: string
    age: number
}

let p: Person = {
    name: 'zzy',
    age: 20
}
console.log(p);

