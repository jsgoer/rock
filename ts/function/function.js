var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) != -1;
};
console.log(mySearch('sadfaf', 'f'));
// 可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
console.log(tomcat);
var tom = buildName('Tom');
console.log(tom);
// 正常情况下，可选参数只能位于最后，但是当ts会将默认参数看做可选参数，不受位置限制
function defaultName(firstName, lastName) {
    if (firstName === void 0) { firstName = 'igsnow'; }
    return firstName + ' ' + lastName;
}
console.log(defaultName(undefined, 'zzy'));
// 函数的剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
// 重载
function reverse(x) {
    if (typeof x == 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(typeof reverse('123'));
