const query = require('mysql')
const connection = query.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1017',
    port: '3306',
    database: 'test'
})
connection.connect()
const sql = 'UPDATE user SET name = ?, age = ? WHERE id = ?'
const sqlParams = ['zhangzhiyong', 29, 5]
connection.query(sql, sqlParams, function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    console.log(res);
})
connection.end()
