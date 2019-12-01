// 获取url参数的两种方法
/**
 * 1.手动处理url参数
 */
let url = 'http://localhost:3000/hello?name=zzy&age=10&job=it'
console.log(url);
const params = url.split('?')[1]
console.log(params)
const arr = params.split('&')
let newArr = []
for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split('=')
    newArr.push({[item[0]]: item[1]})
}
console.log(newArr);

/**
 * 通过URLSearchParams构造函数
 * @type {URLSearchParams}
 */
let p = new URLSearchParams(params)
console.log(p);
console.log('是否可迭代: ', typeof p[Symbol.iterator] === 'function');
for (let i of p) {
    console.log(i);
}
