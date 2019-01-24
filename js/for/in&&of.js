let obj = {
  name: 'zzy',
  age: 18
}

let arr = [1, 2, 3]

for (let i in arr) {
  console.log(i)
}

for (let i of arr) {
  console.log(i)
}

for (let i in obj) {
  console.log(i)
}

// for of 不能用于json对象
// for (let i of obj) {
//   console.log(i)
// }