function* show() {
  console.log('a')
  let a = yield;
  console.log('b')
  console.log(a)
  return '1'
}

let gen = show()
let r1 = gen.next(12)  // 第一个next传参是没有效果的
console.log(r1)
let r2 = gen.next(5)  // 最后一个是return返回
console.log(r2)