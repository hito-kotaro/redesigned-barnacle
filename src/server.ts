require('dotenv').config();
import express from 'express';
const mysql = require('mysql2');
const app = express();
// jsonデータを扱う
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err: any) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    console.log('db connection false');
    return;
  }
  console.log('db connection success');
});

// アカウント作成用のエンドポイント
app.get('/account', (req: any, res: any) => {
  connection.query('SELECT * FROM accounts', (error: any, results: any) => {
    console.log(results);
    res.send(results);
  });
});

// テスト用のエンドポイント
app.get('/', (req, res) => {
  res.status(200).send({ message: 'hello, api sever!' });
});

// サーバー接続
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('listen on port:', port);
});
