const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Halo! Task Manager saya sudah jalan di Azure!');
});

app.listen(port, () => {
  console.log('Aplikasi jalan di port ' + port);
});
