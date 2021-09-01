const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = 'Son Ngo';
  res.send(`Hello ${name}!`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
