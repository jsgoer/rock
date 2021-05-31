
let str = 'https://cbu01.alicdn.com/img/ibank/2019/936/169/11553961639_1114648488.jpg'

let res = str.match(/(?!=\d)\d{1,}x\d{1,}(?!=\d)/g)

console.log(res);

if (res) {
    str = str.replace(`${res[0]}.`, '');
    console.log('yes', str);
} else {
    console.log('no', str);
}