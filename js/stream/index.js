const fs = require('fs')
const path = require('path')

const fileName1 = path.resolve(__dirname, 'test.pdf')
const filename2 = path.resolve(__dirname, 'test2.pdf')

// 读取流
const readStream = fs.createReadStream(fileName1)

console.log('readStream ', readStream);

// 写入流
const writeStream = fs.createWriteStream(filename2)

// 通过管道pipe写入
readStream.pipe(writeStream)

// 通过监听data，是一个异步读取，回调函数打印每次读取的内容
readStream.on('data', (chunk) => {
    // console.log(chunk.toString());
})

// 监听读取结束
readStream.on('end', () => {
    console.log('copy done');
})
