// async 默认返回一个Promise对象
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 1000)
})

async function get() {
    let a = await p
    console.log(a)
}

get().then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})
