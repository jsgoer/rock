const animalDecorator = (target) => {
    target.isAnimal = true
    target.prototype.nickName = 'nimo'
}

@animalDecorator
class Cat {

}

console.log(Cat.isAnimal)