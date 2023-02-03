const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Este é meu site, gostou né?");
});

app.listen(3000);
