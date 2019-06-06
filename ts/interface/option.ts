// 可选接口(不必完全匹配接口的形状)
interface Person1 {
    job: string
    address?: string
}

let p1: Person1 = {
    job: 'web'
}

console.log(p1);