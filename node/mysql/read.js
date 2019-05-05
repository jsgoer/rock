const read = require('mysql')
const connection = read.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1017',
    port: '3306',
    database: 'test'
})
connection.connect()
const sql = 'SELECT * FROM user WHERE id = ?'
const sqlParams = [1]
connection.query(sql, sqlParams, function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    console.log(res);
})
connection.end()
