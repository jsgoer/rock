// 自定义iterator
class CustomIterable {
    constructor(start, stop) {
        this.start = start
        this.stop = stop
    }

    // This property makes this an iterator
    [Symbol.iterator]() {
        return this
    }

    // This property makes this an iterator
    next() {
        return this.start !== this.stop ? {
            value: this.start++, down: false
        } : {value: this.start, down: true}
    }
}

const customIterable = new CustomIterable(0, 3)
console.log(customIterable[Symbol.iterator]().next().value);
console.log(customIterable[Symbol.iterator]().next().value);
console.log(customIterable[Symbol.iterator]().next().value);
console.log(customIterable[Symbol.iterator]().next().value);
console.log(customIterable[Symbol.iterator]().next().value);

