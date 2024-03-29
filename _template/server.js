// express モジュールのインスタンス作成
const express = require('express');
const app = express();
// パス指定用モジュール
const path = require('path');

// 3000番ポートで待ちうける
app.listen(3000, () => {
  console.log('Running at Port 3000...\n-----\nURL: http://localhost:3000\n-----');
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});
