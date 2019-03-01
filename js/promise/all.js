let p1 = new Promise((resolve, reject) => {
    resolve('a')
})
let p2 = new Promise((resolve, reject) => {
    resolve('b')
})
let p3 = new Promise((resolve, reject) => {
    resolve('c')
})

let p = Promise.all([p1, p2, p3])
p.then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})
