// 测试 Date.now()和new Date().getTime()的性能对比
console.time();
for (let i = 0; i < 10000; i++) {
    new Date().getTime()
}
console.timeEnd();

console.time();
for (let i = 0; i < 10000; i++) {
    Date.now()
}
console.timeEnd();



