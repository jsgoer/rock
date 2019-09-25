// 类型+方括号
let fib: number[] = [1, 2, 3]

// 数组泛型
let fib2: Array<number> = [1, 2, 3]

interface NumberArray {
    [index: number]: string | number
}

// 用接口表示数组
let fib3: NumberArray = [1, 2, 3, '4']

// any
let fib4: any[] = [1, 2, '3']

// 用接口表示类数组
function sum() {
    let args: {
        [index: number]: number        // 限定索引和值
        length: number
        callee: Function
    } = arguments
}

// 其实就相当于IArguments内置的接口类型
function sum1() {
    let args: IArguments = arguments
}

