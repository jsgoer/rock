/**
 * @name 自定义异常
 * @constructor Error
 */
function MyError(msg) {
    this.name = 'MyError'
    this.msg = msg || '默认异常消息'
}

MyError.prototype = Object.create(Error.prototype)
MyError.prototype.constructor = MyError

try {
    throw new MyError('用户不存在')
} catch (e) {
    console.log(e.name + ':' + e.msg)
}

