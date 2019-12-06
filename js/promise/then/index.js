// then()接收两个函数参数，如果接收的是一个非函数参数，则返回的是一个新的promise

function loadScript() {
    return new Promise((resolve, reject) => {

    })
}

// 要想then链式调用，then里面的正常处理函数必须return  loadScript从而返回一个新的promise，
// 否则会出现bug