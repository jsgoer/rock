// 类的创建
class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    print() {
        return this.name + ":" + this.age
    }
}

let p = new Person("zzy", 18)
p.print()