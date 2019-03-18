{
    // for ... of 能遍历数组，但是不能遍历对象
    let arr = [11, 22, 33]
    for (let i of arr) {
        console.log(i);
    }
}

{
    let obj = {
        name: 'zzy',
        age: 18,
        job: 'it'
    }
    // for (let i of obj) {
    //     console.log(i);   // 不能直接遍历
    // }
}
{
    let arr = ['kobe', 'james']
    let map = arr[Symbol.iterator]()
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        name: 'zzy',
        age: 18,
        job: 'it',
        [Symbol.iterator]() {
            let index = 0
            let arr = Object.values(obj)
            let len = arr.length
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for (let i of obj) {
        console.log(i);
    }
}
