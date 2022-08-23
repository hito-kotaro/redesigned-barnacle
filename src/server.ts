require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 5000;

console.log('START SERVER');

app.get('/', (req: any, res: any) => {
  res.send('hello');
});

console.log(PORT);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
