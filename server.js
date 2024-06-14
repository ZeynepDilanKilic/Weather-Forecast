const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Statik dosyaları sun
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server http://127.0.0.1:${PORT}`);
});
