async function async1() {
    console.log('async1 start')
    let a = await async2()
    console.log(a)
    console.log('async1 end')
}

async function async2() {
    // return 'async2'
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('async2')
        }, 1000)
    })
}

async1()
console.log('script start')
