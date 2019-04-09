/**
 * this的四种绑定原则
 * @默认绑定
 * @隐式绑定
 * @显式绑定
 * @new绑定
 */

/** 默认绑定
 当独立函数调用时，this指向全局对象,但是当使用严格模式时,无法绑定到全局对象，而是undefined */
'use strict'

function fn() {
    console.log(this)
}

fn()

{
    /** 隐式绑定
     当不是独立函数，而是当做属性被添加到对象中，this绑定到上下文对象
     此类绑定会带来函数中的this丢失绑定对象,会运用第一条规则,此时一般用   var  that = this 来保存*/
    let obj = {
        name: 'zzy',
        say() {
            console.log(this)
        }
    }

    obj.say()
}

{
    /** 显式绑定
     * apply、call等方法，在调用函数的时候绑定this
     */
}

{
    // new 绑定
    function Person() {
        console.log(this);
    }

    let p = new Person()
}




