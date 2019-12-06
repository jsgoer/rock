{
    // 手写浅拷贝
    let shallowCopy = function (obj) {
        if (typeof obj !== 'object') return
        let newObj = obj instanceof Array ? [] : {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = obj[key]
            }
        }
        return newObj
    }
    let arr = [1, 2, 3, [4, 5]]
    let newArr = shallowCopy(arr)
    console.log('-------------浅拷贝--------------')
    console.log('arr => ', arr, 'newArr => ', newArr)
    newArr[3][0] = 40
    console.log('arr => ', arr, 'newArr => ', newArr)
}

{
    // 手写深拷贝
    let deepCopy = function (obj) {
        if (typeof obj !== 'object') return
        let newObj = obj instanceof Array ? [] : {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
            }
        }
        return newObj
    }
    let arr = [1, 2, 3, [4, 5]]
    let newArr = deepCopy(arr)
    console.log('-------------深拷贝--------------')
    console.log('arr => ', arr, 'newArr => ', newArr)
    newArr[3][0] = 40
    console.log('arr => ', arr, 'newArr => ', newArr)
}

{
    /** 上面知识点补充，遍历对象时，加上 if (obj.hasOwnProperty(key))这句时
     因为有的属性是从prototype上面继承的属性，因此要忽略掉，eg如下*/
    function Foo() {
        this.name = 'zzy'
        this.age = 18
        this.sayHi = function () {
            console.log('say hi')
        }
    }

    Foo.prototype.sayHello = function () {
        console.log('say hello')
    }
    let foo = new Foo()
    console.log('-----------检测原型属性-----------')
    for (let key in foo) {
        console.log('Object key: ', key);
    }
    console.log('Object has sayHi: ', foo.hasOwnProperty('sayHi'));
    console.log('Object has sayHello: ', foo.hasOwnProperty('hello'));   // false 就是从原型继承的属性，不应该被拷贝
}
