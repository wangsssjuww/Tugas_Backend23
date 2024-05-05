const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'unitkos'
});

connection.connect(error => {
    if (error) {
        console.log(error)
    };
    console.log('terhubung ke database unitkos')
})

module.exports = connection

