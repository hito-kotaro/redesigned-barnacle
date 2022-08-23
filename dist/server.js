"use strict";
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 5000;
const connection = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        console.log('db connection false');
        return;
    }
    console.log('db connection success');
});
// app.get('/', (req: any, res: any) => {
//   res.send('hello');
// });
app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        console.log(results);
        res.send(results);
    });
});
console.log(PORT);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
//# sourceMappingURL=server.js.map