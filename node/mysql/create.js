const query = require('mysql')
const connection = query.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1017',
    port: '3306',
    database: 'test'
})
connection.connect()
const sql = 'INSERT INTO user(id,name,age,address,company) VALUES(?,?,?,?,?)'
const sqlParams = [6, 'james', '34', '洛杉矶', 'nba']
connection.query(sql, sqlParams, function (err, res) {
    if (err) {
        console.log(err)
        return
    }
    console.log(res);
})
connection.end()
