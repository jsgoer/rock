// 闭包经典问题
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log('开始->' + i);
//     }, 1000)
// }

// 方案一
// for (let i = 0; i < 3; i++) {
//     console.log('定时器外部->' + i);
//     setTimeout(function () {
//         console.log('改良->' + i);
//     }, 1000)
// }

// 方案二
for (var i = 0; i < 3; i++) {
    (function (i) {
        console.log('定时器外部 ' + i);
        setTimeout(function () {
            console.log(i);
        }, 0)
    })(i)
}
