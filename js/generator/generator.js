{
    // generator基本定义
    let tell = function* () {
        yield 'a'
        yield 'b'
        return 'c'
    }
    let k = tell()
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    // 通过generator函数给对象创建iterator接口,比手写iterator更加简便
    let obj = {}
    obj[Symbol.iterator] = function* () {
        yield 'a'
        yield 'b'
        yield 'c'
    }
    for (let i of obj) {
        console.log(i);
    }
}

{
    // generator适用场景之状态机
    let state = function* () {
        while (1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }
    let status = state()
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

{
    // 适用场景之模拟抽奖
    // let draw = function (count) {
    //     // 具体抽奖逻辑
    //     console.info(`剩余${count}次`)
    // }
    // let residue = function* (count) {
    //     while (count > 0) {
    //         count--
    //         yield draw(count)
    //     }
    // }
    // let star = residue(5)
    // let btn = document.createElement('button')
    // btn.id = 'start'
    // btn.textContent = '抽奖'
    // document.body.appendChild(btn)
    // document.getElementById('start').addEventListener('click', function () {
    //     star.next()
    // }, false)

}

{
    // 适用场景之长轮询 (接口返回的某些值可能会定期的变化,前端也得定时去服务端请求该数据)
    let ajax = function* () {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({code: 0})
            }, 1000)
        })
    }
    let pull = function () {
        let generator = ajax()
        let step = generator.next()
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.info('wait')
                    pull()
                }, 1000)
            } else {
                console.info(d);
            }
        })
    }
    pull()
}

{
    // generator配合Promise处理异步
    let ajax = function* () {
        yield  new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve('generator 成功')
            }, 2000)
        })
    }
    let res = ajax()
    res.next().value.then(res => {
        console.log(res);
    })
}


{
    // async配合Promise处理异步
    let ajax = async function () {
        return await new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve('async 成功')
            }, 3000)
        })
    }
    let res = ajax()
    res.then(res => {
        console.log(res);
    })
}
