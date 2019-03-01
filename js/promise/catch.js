function asyncFn() {
    return new Promise((resolve, reject) => {
        console.log('start')
        setTimeout(function () {
            // resolve('async success')
            reject('error')
        }, 1000)
    })
}

asyncFn().then((res) => {
    console.log(res)
}).catch(e => {
    console.log(e)
})
console.log('sync')
