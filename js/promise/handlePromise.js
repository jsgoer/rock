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
        // 声明返回的promise2
        let promise2 = new Promise((reslove, reject) => {
            // 状态为fulfilled,执行onFulfilled,传入成功的值
            if (this.state === 'fulfilled') {
                // 第一个then返回的值，可能是promise也可能是普通值,是普通值直接作为promise2成功的结果
                // 如果还是promise则继续返回作为新的promise2的结果
                let x = onFulfilled(this.value)
                // 处理promise2和x的关系
                resolvePromise(promise2, x, reslove, reject)
            }
            // 状态为fulfilled,执行onFulfilled,传入成功的值
            if (this.state === 'rejected') {
                let x = onRejected(this.reason)
                resolvePromise(promise2, x, reslove, reject)
            }
            // 当state为pending时
            if (this.state === 'pending') {
                // onFulfilled传入成功数组
                this.onRejectedCallbacks.push(() => {
                    let x = onFulfilled(this.value)
                    resolvePromise(promise2, x, reslove, reject)
                })
                // onRejected传入失败数组
                this.onRejectedCallbacks.push(() => {
                    let x = onRejected(this.reason)
                    resolvePromise(promise2, x, reslove, reject)
                })
            }
        })
        // 返回promise，完成链式操作
        return promise2
    }
}

function resolvePromise(promise2, x, resolve, reject) {

}

let p = new Promise()
// p.then()
// p.then()

