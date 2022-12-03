const mysql = require('mysql2')//incluir la carpeta mysql2

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'usuarios',
    password: ''
});

module.exports = connection