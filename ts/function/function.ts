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

// 重载
function reverse(x: number | string): number | string {
    if (typeof x == 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}

console.log(typeof reverse('123'));
