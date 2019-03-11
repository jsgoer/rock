const http = require('http')
const server = http.createServer()
server.on('request', function (req, res) {
    console.log(req)
    // res.write('zzy ')
    // res.write('go')
    // res.end的参数只能是字符串格式
    res.end('hi node')
})

server.listen(1017, function (res) {
    console.log('server is running at port 1017...')
})
