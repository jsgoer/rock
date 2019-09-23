// 类型+方括号
let fib: number[] = [1, 2, 3]

// 数组泛型
let fib2: Array<number> = [1, 2, 3]

interface NumberArray {
    [index: number]: number
}

// 用接口表示数组
let fib3: NumberArray = [1, 2, 3]

// any
let fib4: any[] = [1, 2, '3']
