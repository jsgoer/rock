// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    return source.search(subString) != -1
}

console.log(mySearch('sadfaf', 'f'));

// 可选参数
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

let tomcat = buildName('Tom', 'Cat')
console.log(tomcat);
let tom = buildName('Tom')
console.log(tom);

// 正常情况下，可选参数只能位于最后，但是当ts会将默认参数看做可选参数，不受位置限制
function defaultName(firstName: string = 'igsnow', lastName: string) {
    return firstName + ' ' + lastName
}

console.log(defaultName(undefined, 'zzy'));

// 函数的剩余参数
function push(array: any[], ...items: any []) {
    items.forEach(item => {
        array.push(item)
    })
}

// 重载
function reverse(x: number | string): number | string {
    if (typeof x == 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}

console.log(typeof reverse('123'));
