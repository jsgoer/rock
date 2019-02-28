let p = new Promise((resolve, reject) => {
    console.log('start sync')
    resolve('async success')
    reject('async reject')
})
p.then((resolve) => {
    console.log(resolve)
}, (reject) => {
    console.log(reject)
})
console.log('sync')
