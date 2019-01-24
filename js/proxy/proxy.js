const person = {
    name: 'zzy',
    age: 18
}
const personProxy = new Proxy(person, {
    get(target, key) {
        return target[key].toUpperCase()
    },
    set(target, key, value) {
        if (typeof value == 'string') {
            target[key] = value.trim()
        }
    }
})
personProxy.name = 'phr'
console.log(personProxy.name)

personProxy.job = '     web       '
console.log(personProxy.job)
