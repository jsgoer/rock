// async 默认返回一个Promise对象
async function get() {
    // throw new Error('error')
    return 'aa'
}

get().then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})
