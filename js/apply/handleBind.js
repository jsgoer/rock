// 手写bind


let o = {
    name: 'james',
    say() {
        console.log(this)
    }
}

o.say()

function add(a, b) {
    console.log(this)
}

add(1, 2)



