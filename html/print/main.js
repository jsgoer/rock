const express = require('express')
const bodyParser = require('body-parser')
const {Router} = require('express')
const path = require('path')
const router = new Router()
const app = express()
const pdf = require('html-pdf')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
// 全局 中间件  解决所有路由的 跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    next()
})
app.use(router)

router.get('/aaa', function (req, res) {
    res.send({
        msg: 'hi node express'
    })
})

router.post('/pdf_html_print', function (req, res) {
    // let options = {
    //     format: 'Letter',
    //     width: `${req.body.printWidth}mm`,
    //     height: `${req.body.printHeight}mm`,
    //     orientation: req.body.printFangxiang == 1 ? 'portrait' : 'landscape',
    //     renderDelay: 0,
    //     border: {
    //         top: `${req.body.printTop}mm`,
    //         left: `${req.body.printLeft}mm`,
    //         right: '0',
    //         bottom: '0',
    //     }
    // };
    //
    // if (req.body.printWidth == 100) {
    //     options.width = `${req.body.printWidth * 0.8}mm`
    //     options.height = `${req.body.printHeight * 0.81}mm`
    // } else if (req.body.printWidth == 60) {
    //     options.width = `${req.body.printWidth * 1.8}mm`
    //     options.height = `${req.body.printHeight * 2}mm`
    // }
    //
    // console.log('options', options)
    //
    // let tmpPath = path.resolve(__dirname, Date.now() + '.pdf');
    // try {
    //     pdf.create('fdafadfagadffafa igsnow', options).toFile(tmpPath, function (err, res) {
    //         if (err) return console.log(err);
    //         console.log((res.filename));
    //     });
    // } catch (error) {
    //     console.log(error)
    // }

    var options = {format: 'Letter'};

    pdf.create(req.body.html, options).toFile(path.resolve(__dirname, Date.now() + '.pdf'), function (err, res) {
        if (err) return console.log(err);
        console.log(res); // { filename: '/app/businesscard.pdf' }
    });


    res.send({
        msg: '生成PDF success'
    })
})


app.listen(1018, function () {
    console.log('服务器启动成功')
    console.log('http://127.0.0.1:1018')
})
