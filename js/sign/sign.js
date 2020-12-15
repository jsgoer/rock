const md5 = require('md5');

// md5(token&t&appKey&data)
let token = 'd9b02598946ea996670af3259469fe23'
let t = 1608014187778
let appKey = '12574478'
let data = JSON.stringify({ "videoId": "276875336567", "from": "detail" })
let params = `${token}&${t}&${appKey}&${data}`
let res = md5(params)
console.log(res)