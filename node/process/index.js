// 进程process是系统进行资源分配与调度的基本单位(最小单位)，是线程的容器
// 多个进程间数据无法共享，除非建立IPC通信

const http = require('http')
const server = http.createServer()
server.listen(3000, () => {
    process.title = '程序员指北'
    console.log('进程id', process.pid)
})
