{
    // 通过直接赋值是浅拷贝,对新数组的修改也会涉及到旧数组
    let arr = ['a', 'b', 'c']
    let newArr = arr
    console.log('arr =>', arr, 'newArr =>', newArr)
    newArr[0] = 'A'
    console.log('arr =>', arr, 'newArr =>', newArr)
}

{
    /**通过slice(start,end)方法，返回原数组的一个副本
     注：如果下标是负值，则当做length + start或length + end 处理，如果end在start之前，则返回空数组*/
    let arr = ['a', 'b', 'c']
    let newArr = arr.slice(0)
    console.log('arr =>', arr, 'newArr =>', newArr)
    newArr[0] = 'A'
    console.log('arr =>', arr, 'newArr =>', newArr)
}

{
    // slice方法只能深拷贝扁平数组，对于嵌套数组不生效
    let arr = ['a', 'b', {name: 'c', age: 18}, [1, 2]]
    let newArr = arr.slice(0)
    console.log('arr =>', arr, 'newArr =>', newArr)
    newArr[2].age = 20
    newArr[3][0] = 10
    console.log('arr =>', arr, 'newArr =>', newArr)
}

{
    /** concat()的参数可以是具体的值，也可以是数组对象，且可以传入多个
     注：和slice一样，不能深拷贝嵌套数组 */
    let arr = ['a', 'b', 'c']
    let newArr = arr.concat()
    console.log('arr =>', arr, 'newArr =>', newArr)
    newArr[0] = 'A'
    console.log('arr =>', arr, 'newArr =>', newArr)
}

{
    /** 利用JSON.parse和JSON.stringify方法对数组和对象深拷贝,
     注：但是不能拷贝函数*/
    let arr = ['a', 'b', {name: 'c', age: 18}, [1, 2]]
    let newArr = JSON.parse(JSON.stringify(arr))
    console.log('arr =>', arr, 'newArr =>', newArr)
    newArr[2].age = 20
    newArr[3][0] = 10
    console.log('arr =>', arr, 'newArr =>', newArr)
}


