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
