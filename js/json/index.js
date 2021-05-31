let arr
function deepProxy(obj, cb) {
    if (typeof obj === 'object') {
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                obj[key] = deepProxy(obj[key], cb);
            }
        }
    }
    return new Proxy(obj, {
        set: function (target, key, value, receiver) {

            if (typeof value === 'object') {
                value = deepProxy(value, cb);
            }

            let cbType = target[key] == undefined ? 'create' : 'modify';

            //排除数组修改length回调
            if (!(Array.isArray(target) && key === 'length')) {
                cb(cbType, { target, key, value });
            }
            return Reflect.set(target, key, value, receiver);

        },
        deleteProperty(target, key) {
            cb('delete', { target, key });
            return Reflect.deleteProperty(target, key);
        }

    });
}

let newArr
// 数组测试
arr = deepProxy([], (type, data) => {
    let newArr = data.target
    if (type == 'create') {
        newArr.push(data.value)
    } else if (type == 'delete') {
        newArr.splice(data.key, 1)
    } else if (type == 'modify') {
        newArr[data.key] = data.value
    }
    console.log(type, data, arr);
    // console.log('inner ', arr);

});

arr.push('nba')
console.log('out ', arr)
arr.push('james')
console.log('out ', arr)
arr.push('nba')
console.log('out ', arr)
// arr.pop()
// arr.splice(1, 1)
// console.log('out ', arr)
arr[0] = 'nba'
console.log('out ', arr)





