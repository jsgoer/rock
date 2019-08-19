function toArray(list, start) {
    start = start || 0
    let i = list.length - start
    const ret = new Array(i)
    while (i--) {
        ret[i] = list[i + start]
    }
    return ret
}

let list = [11, 22, 33, 44, 55, 66]
console.log(toArray(list, 7));

