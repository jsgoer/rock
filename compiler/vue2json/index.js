// 将vue单文件编译为json文件    SFC(Single File Components)
const fs = require('fs')
const compiler = require('vue-template-compiler')

const vueFileContent = fs.readFileSync('../../static/App.vue', 'utf8')
const sfc = compiler.parseComponent(vueFileContent)
console.log(sfc);
