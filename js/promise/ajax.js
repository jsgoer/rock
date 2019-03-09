function getList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let successData = {
                data: ['a', 'b', 'c'],
                success: true
            }
            let errorData = {
                data: null,
                success: false
            }
            resolve(successData)
            reject(errorData)
        }, 1000)
    })
}

getList().then(res => {
    if (res.success) {
        console.log(1);
        console.log(res);
    } else {
        console.log(2);
        console.log(res);    // 这种写法是错误的，res.success不为true的话就直接reject了，被catch捕获
    }
}).catch(e => {
    console.log(3);
    console.log(e);
})