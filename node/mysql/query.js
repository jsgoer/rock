const query = require('mysql')
const connection = query.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1017',
    port: '3306',
    database: 'mysql'
})
connection.connect()

const sql = 'SELECT * FROM global_grants'
connection.query(sql, function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    console.log(res);
})

connection.end()
