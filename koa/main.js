const koa = require('koa')
const app = new koa()
app.use(ctx => {
    ctx.body = 'hello'
})

app.listen(1017)