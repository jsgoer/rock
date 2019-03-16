async function add() {
    let a = 1
    let b = 2
    let data = await ajax()
    console.log(a, b, data)
}

function ajax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}

add()
