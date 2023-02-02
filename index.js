const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Este é meu site");
});

app.listen(3000);
