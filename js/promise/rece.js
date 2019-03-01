let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('a')
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    resolve('b')
})
let p3 = new Promise((resolve, reject) => {
    reject('error')
    // resolve('c')
})

// 返回数组中第一个改变状态的promise
let p = Promise.race([p1, p2, p3])
p.then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})
