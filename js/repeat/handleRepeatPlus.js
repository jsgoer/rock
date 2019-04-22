// 优雅的手写repeat
// 相当于4个空数组用str连接起来
String.prototype._repeat = function (n) {
    return Array(n + 1).join(this)
}

console.log('zzy'._repeat(3));

