async function add() {
    console.log(1)
    let data = await ajax()
    console.log(data)
    console.log(3)
}

function ajax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2)
        }, 1000)
    })
}

add()
console.log(4)
