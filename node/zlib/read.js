// 解压缩
const zlib = require('zlib')
zlib.deflate('./input.txt.gz', (err, buffer) => {
    if (!err) {
        console.log(buffer.toString('base64'));   // TODO 怎么转换了还是乱码？
    } else {
        console.log(err);
    }
})