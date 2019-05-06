const readline = require('readline');
// 创建readline接口实例
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r.question('please enter : ', function (answer) {
    console.log('input is : ' + answer)
    r.close()
})

r.on('close', function () {
    process.exit(0)
})

const request = require('request')
