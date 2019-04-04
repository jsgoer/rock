/** Promise手写 */

class Promise {
    constructor(executor) {
        // 初始化state为pending状态
        this.state = 'pending'
        // 成功的值
        this.value = undefined
        // 失败的原因
        this.reason = undefined
        // 成功存放的数组
        this.onResolvedCallbacks = []
        // 失败存放的数组
        this.onRejectedCallbacks = []
        let resolve = value => {
            if (this.state === 'pending') {
                // resolve调用后，state变为成功
                this.state = 'fulfilled'
                // 存储成功的值
                this.value = value
                // 一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = reason => {
            if (this.state === 'pending') {
                // reject调用后，state变成失败
                this.state = 'rejected'
                // 存储失败的值
                this.reason = reason
                // reject，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        // 如果executor执行报错，直接执行reject
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    // then方法，有两个参数onFulfilled,onRejected
    then(onFulfilled, onRejected) {
        // 状态为fulfilled,执行onFulfilled,传入成功的值
        if (this.state === 'fulfilled') {
            onFulfilled(this.value)
        }
        // 状态为fulfilled,执行onFulfilled,传入成功的值
        if (this.state === 'rejected') {
            onRejected(this.reason)
        }
    }
}


let p = new Promise()
// p.then()
// p.then()
