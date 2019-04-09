/**bind
 *调用bind,会返回一个新的函数，这个函数里的this就是指向bind的第一个参数，同时this后面的参数
 * 会提前传递给这个新的函数。调用新函数时，再传递的参数会放到预置的参数后一起传递进新函数
 */

value = 2
let foo = {
    value: 3
}
let bar = function (name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}
let res = bar.bind(foo, 'zzy')

bar()
res(18)



