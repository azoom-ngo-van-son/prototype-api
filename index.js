const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = 'Son Ngo Van';
  res.send(`Hello ${name}, Nice to meet you!`);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
