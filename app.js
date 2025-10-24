const express = require('express');
const app = express();
const port = 8080;
const secret = process.env.MY_SECRET || 'NO_SECRET';

app.get('/', (req, res) => {
  res.send(`<h2>FSL DevOps Challenge</h2><p>MY_SECRET: ${secret}</p>`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

