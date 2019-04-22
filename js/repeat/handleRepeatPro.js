// 优雅的手写repeat之二

String.prototype._repeat = function (n) {
    return Array(n).fill(this).join('')
}

console.log('zzy'._repeat(3));
