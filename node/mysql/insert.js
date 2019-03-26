const query = require('mysql')
const connection = query.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1017',
    port: '3306',
    database: 'test'
})
connection.connect()
const addSql = 'INSERT INTO user(id,name,age) VALUES(3,?,?)'
const addSqlParams = ['zzy', 18]
connection.query(addSql, addSqlParams, function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    console.log(res);
})
connection.end()
