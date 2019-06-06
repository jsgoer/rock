// 可选接口(不必完全匹配接口的形状)
interface Person1 {
    name: string
    age?: number
}

let p1: Person1 = {
    name: 'zzy'
}

console.log(p1);