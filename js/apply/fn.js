function Person(name) {
    this.name = name
    this.sayName = function () {
        console.log(this.name)
    }
}

function Student(name) {
    Person.apply(this, arguments)   // Student类拷贝了Person的属性和方法，实现了类的继承
}

let xiaoming = new Student('小明')
xiaoming.sayName()
