const mysql = require('mysql2/promise');

const conection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "La_Libreria_dello_Scaffale_Dorato"
});

module.exports = conection;