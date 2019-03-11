const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, './nba.txt'), function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
})

fs.writeFile(path.join(__dirname, './cba.txt'), 'kobe lakers', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('写入成功')
    }
})

