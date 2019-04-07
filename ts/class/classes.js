// 类的创建
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return Person;
}());
var p = new Person("zzy", 18);
p.print();
