const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'test.txt')
const filename2 = path.resolve(__dirname, 'test2.txt')

// 读取流
const readStream = fs.createReadStream(fileName1)

// 写入流
const writeStream = fs.createWriteStream(filename2)

// 通过管道pipe写入
readStream.pipe(writeStream)

let chunks = [];

// 通过监听data，是一个异步读取，回调函数打印每次读取的内容
readStream.on('data', (chunk) => {
    chunks.push(chunk);
})

// 监听读取结束
readStream.on('end', () => {
    console.log('copy done');
    let result = Buffer.concat(chunks);
    console.log('result:', result.toString('base64'), result.length);

    fs.writeFile(path.resolve(__dirname, 'base64.txt'), result.toString('base64'), { 'flag': 'a' }, function (err) {
        if (err) {
            throw err;
        }
        console.log('ok.');
    });


})

// 将base64编码转为stream生成目标pdf
let base64str = ''

let buff = new Buffer.from(base64str, 'base64');
let stream = fs.createWriteStream(path.resolve(__dirname, 'base64.pdf'));
stream.write(buff);
stream.on("end", function () {
    stream.end();
}); 